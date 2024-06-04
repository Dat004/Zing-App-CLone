import React, { useEffect, useMemo, useState } from 'react';
import { BsSkipStartFill, BsSkipEndFill, BsPlayCircle, BsPauseCircle } from 'react-icons/bs';
import { IoRepeat, IoShuffle } from 'react-icons/io5';
import { PiRepeatOnce } from 'react-icons/pi';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

import InformationCard from '../../../../components/Card/MusicCards/InformationCard';
import MusicActions from '../../../../redux/actions/MusicActions';
import { SpinnerIcon } from '../../../../components/CustomIcon';
import TippyBox from '../../../../components/Tippy/TippyBox';
import { musicSelector } from '../../../../redux/selector';
import PopperWrapper from '../../../../components/Popper';
import Button from '../../../../components/Button';
import BarProgess from './BarProgess';

function BarController({ data = {} }) {
    const [modeRepeat, setModeRepeat] = useState('none');
    const [isShuffle, setIsShuffle] = useState(false);
    const [disbled, setDisabled] = useState({
        prevBtn: false,
        nextBtn: false,
    });
    const musicState = useSelector(musicSelector);

    const { NEXTMUSIC, PREVMUSIC, ON_PLAYING_MUSIC, ON_CHANGE_CURRENT_TIME, SET_IS_SHUFFLE, SET_MODE_REPEAT } =
        MusicActions();
    const { currentIndexMusic } = data.currentMusicOfPlaylist;
    const { isPlaying, isFetching } = musicState.musics;
    const value = {
        musicData: data.currentMusicOfPlaylist,
        musicState: musicState.musics,
    };
    const { itemsPlaylist } = data.dataPlaylist;
    const { prevBtn, nextBtn } = disbled;

    useEffect(() => {
        setDisabled({
            prevBtn: currentIndexMusic <= 0 ? true : false,
            nextBtn: currentIndexMusic >= itemsPlaylist.length - 1 ? true : false,
        });
        ON_CHANGE_CURRENT_TIME(0);
    }, [currentIndexMusic]);

    useEffect(() => {
        SET_MODE_REPEAT(modeRepeat);
    }, [modeRepeat]);

    const repeatIconStyles = classNames('mx-[7px] w-[32px] h-[32px] hover:bg-purple-bg-btn-alpha', {
        '!text-link-text-hover': modeRepeat === 'all',
        'text-purple-text-actions': modeRepeat === 'none',
    });

    const nextData = useMemo(() => data[currentIndexMusic + 1], [data, currentIndexMusic]);

    const handleTogglePlayMusic = () => {
        if (isPlaying) {
            ON_PLAYING_MUSIC(false);

            return;
        }

        ON_PLAYING_MUSIC(true);
    };

    const handleSetModeRepeat = () => {
        if (modeRepeat === 'none') setModeRepeat('all');
        if (modeRepeat === 'all') setModeRepeat('song');
        if (modeRepeat === 'song') setModeRepeat('none');
    };

    const handleToggleShuffle = () => {
        setIsShuffle((state) => !state);
        SET_IS_SHUFFLE(!isShuffle);
    };

    const handleNextMusic = () => {
        NEXTMUSIC();
    };

    const handlePrevMusic = () => {
        PREVMUSIC();
    };

    const NEXT_MUSIC_TIPPY = ({ data = {} }) => {
        return (
            <PopperWrapper className="w-[250px] py-[7px] px-[3px] bg-transparent">
                <h3 className="text-[12px] text-purple-text-items">Phát tiếp theo</h3>
                <div className="mt-[12px]">
                    <InformationCard data={data} className="size-size-0.4" isSongCard />
                </div>
            </PopperWrapper>
        );
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex items-center">
                    <TippyBox
                        content={isShuffle ? 'Tắt phát ngẫu nhiên' : 'Bật phát ngẫu nhiên'}
                        placement="top"
                        arrow
                        offset={[0, 10]}
                    >
                        <Button
                            rounded
                            onClick={handleToggleShuffle}
                            className={`mx-[7px] w-[32px] h-[32px] ${
                                isShuffle ? '!text-link-text-hover' : 'text-purple-text-actions'
                            } text-purple-text-actions hover:bg-purple-bg-btn-alpha`}
                        >
                            <IoShuffle className="text-[26px]" />
                        </Button>
                    </TippyBox>
                    <Button
                        onClick={handlePrevMusic}
                        disabled={prevBtn}
                        rounded
                        className="mx-[7px] w-[32px] h-[32px] text-purple-text-actions hover:bg-purple-bg-btn-alpha"
                    >
                        <BsSkipStartFill className="text-[26px]" />
                    </Button>
                    <Button
                        rounded
                        disabled={isFetching}
                        onClick={handleTogglePlayMusic}
                        className="mx-[7px] w-[50px] h-[50px] text-purple-text-actions hover:text-link-text-hover hover:!bg-transparent"
                    >
                        {isPlaying && !isFetching && <BsPauseCircle className="text-[38px]" />}
                        {!isPlaying && !isFetching && <BsPlayCircle className="text-[38px]" />}
                        {isFetching && (
                            <i className="rounded-[50%] border border-solid border-purple-bd-white-color">
                                <SpinnerIcon />
                            </i>
                        )}
                    </Button>
                    <TippyBox content={<NEXT_MUSIC_TIPPY data={nextData} />} placement="top" arrow offset={[0, 10]}>
                        <Button
                            onClick={handleNextMusic}
                            disabled={nextBtn}
                            rounded
                            className="mx-[7px] w-[32px] h-[32px] text-purple-text-actions hover:bg-purple-bg-btn-alpha"
                        >
                            <BsSkipEndFill className="text-[26px]" />
                        </Button>
                    </TippyBox>
                    <TippyBox
                        content={
                            (modeRepeat === 'none' && 'Bật phát lại tất cả') ||
                            (modeRepeat === 'all' && 'Bật phát lại 1 bài') ||
                            (modeRepeat === 'song' && 'Tắt phát lại')
                        }
                        placement="top"
                        offset={[0, 10]}
                        arrow
                    >
                        <Button rounded onClick={handleSetModeRepeat} className={repeatIconStyles}>
                            {!(modeRepeat === 'song') && <IoRepeat className="text-[26px]" />}
                            {modeRepeat === 'song' && <PiRepeatOnce className="text-[26px]" />}
                        </Button>
                    </TippyBox>
                </div>
            </div>
            <BarProgess data={value} />
        </>
    );
}

export default BarController;
