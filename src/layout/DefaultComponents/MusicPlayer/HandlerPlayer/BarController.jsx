import { useEffect, useState } from 'react';
import { BsSkipStartFill, BsSkipEndFill, BsPlayCircle } from 'react-icons/bs';
import { IoRepeat, IoShuffle } from 'react-icons/io5';

import InformationCard from '../../../../components/Card/MusicCards/InformationCard';
import { DurationTime } from '../../../../components/TimeComponent';
import MusicActions from '../../../../redux/actions/MusicActions';
import InputSlider from '../../../../components/InputSlider';
import TippyBox from '../../../../components/Tippy/TippyBox';
import PopperWrapper from '../../../../components/Popper';
import Button from '../../../../components/Button';

function BarController({ data = {} }) {
    const [disbled, setDisabled] = useState({
        prevBtn: false,
        nextBtn: false,
    });

    const { NEXTMUSIC, PREVMUSIC, ADD_MUSIC_TO_HISTORY } = MusicActions();
    const { currentIndexMusic, currentDataMusic } = data.currentMusicOfPlaylist;
    const { itemsPlaylist } = data.dataPlaylist;
    const { prevBtn, nextBtn } = disbled;
    const { duration } = currentDataMusic;

    useEffect(() => {
        setDisabled({
            prevBtn: currentIndexMusic <= 0 ? true : false,
            nextBtn: currentIndexMusic >= itemsPlaylist.length - 1 ? true : false,
        });
    }, [currentIndexMusic]);

    const handleNextMusic = () => {
        NEXTMUSIC();
        ADD_MUSIC_TO_HISTORY();
    };

    const handlePrevMusic = () => {
        PREVMUSIC();
        ADD_MUSIC_TO_HISTORY();
    };

    const NEXT_MUSIC_TIPPY = () => (
        <PopperWrapper className="w-[250px] py-[7px] px-[3px] bg-transparent">
            <h3 className="text-[12px] text-purple-text-items">Phát tiếp theo</h3>
            <div className="mt-[12px]">
                <InformationCard data={itemsPlaylist[currentIndexMusic + 1]} className="size-size-0.4" isSongCard />
            </div>
        </PopperWrapper>
    );

    return (
        <div>
            <div className="flex items-center justify-center">
                <div className="flex items-center">
                    <TippyBox content="Bật phát ngẫu nhiên" placement="top" arrow offset={[0, 10]}>
                        <Button
                            rounded
                            className="mx-[7px] w-[32px] h-[32px] text-purple-text-actions hover:bg-purple-bg-btn-alpha"
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
                        className="mx-[7px] w-[50px] h-[50px] text-purple-text-actions hover:text-link-text-hover"
                    >
                        <BsPlayCircle className="text-[38px]" />
                    </Button>
                    <TippyBox content={<NEXT_MUSIC_TIPPY />} placement="top" arrow offset={[0, 10]}>
                        <Button
                            onClick={handleNextMusic}
                            disabled={nextBtn}
                            rounded
                            className="mx-[7px] w-[32px] h-[32px] text-purple-text-actions hover:bg-purple-bg-btn-alpha"
                        >
                            <BsSkipEndFill className="text-[26px]" />
                        </Button>
                    </TippyBox>
                    <TippyBox content="Bật phát lại tất cả" placement="top" arrow offset={[0, 10]}>
                        <Button
                            rounded
                            className="mx-[7px] w-[32px] h-[32px] text-purple-text-actions hover:bg-purple-bg-btn-alpha"
                        >
                            <IoRepeat className="text-[26px]" />
                        </Button>
                    </TippyBox>
                </div>
            </div>
            <div className="flex items-center mb-[5px]">
                <DurationTime
                    className="flex items-center justify-center mr-[10px] min-w-[45px]"
                    duration={0}
                    isMilitaryTime
                    isFontColorDark
                />
                <InputSlider
                    className="flex items-center flex-grow h-[15px]"
                    heigthSlider="4px"
                    widthThumb="12px"
                    heightThumb="12px"
                />
                <DurationTime
                    className="flex items-center justify-center ml-[10px] min-w-[45px]"
                    duration={duration}
                    isMilitaryTime
                    isFontColorDark
                />
            </div>
        </div>
    );
}

export default BarController;
