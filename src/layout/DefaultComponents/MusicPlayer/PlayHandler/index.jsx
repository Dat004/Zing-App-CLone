import { useEffect, useState } from 'react';
import { SlVolume2, SlVolumeOff } from 'react-icons/sl';
import { RiPlayList2Fill } from 'react-icons/ri';
import { PiLayout, PiMicrophoneStage } from 'react-icons/pi';
import { MdMusicVideo } from 'react-icons/md';

import InformationCard from '../../../../components/Card/MusicCards/InformationCard';
import MusicActions from '../../../../redux/actions/MusicActions';
import ActionsMusic from '../../../../components/ActionsMusic';
import TippyBox from '../../../../components/Tippy/TippyBox';
import InputSlider from '../../../../components/InputSlider';
import Button from '../../../../components/Button';
import BarController from './BarController';

function PlayHandler({ data = {}, onShowPLaylistPLayer = () => {} }) {
    const [valueVolume, setValueVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);

    const { currentDataMusic, currentIndexMusic } = data.currentMusicOfPlaylist;
    const { hasLyric, mvlink } = currentDataMusic;
    const { ON_CHANGE_SOUND } = MusicActions();

    // console.log(data);

    const MAX_VALUE_VOLUME = 1;
    const MIN_VALUE_VOLUME = 0;

    const handleToggleMuted = () => {
        setIsMuted((state) => !state);
        setValueVolume(isMuted ? 1 : 0);
        ON_CHANGE_SOUND(isMuted ? 1 : 0);
    };

    const handleChangeValueVolume = (e) => {
        const value = +e.target.value;

        setValueVolume(value);
        setIsMuted(value === 0 ? true : false);
        ON_CHANGE_SOUND(value);
    };

    return (
        <div className="fixed bottom-0 left-0 h-[90px] w-full bg-purple-bg-layout">
            <div className="flex items-center w-full h-full bg-purple-bd-player px-[20px] border-t border-t-purple-bd-primary-color">
                <div className="flex items-center justify-start w-[30%]">
                    <div className="w-full">
                        <InformationCard
                            className="size-[64px]"
                            data={data.currentMusicOfPlaylist.currentDataMusic}
                            isSongCard
                        />
                    </div>
                    <div className="ml-[10px]">
                        <ActionsMusic widthBtn="32px" heightBtn="32px" isAddLibrary />
                    </div>
                </div>
                <div className="flex-auto">
                    <BarController data={data} />
                </div>
                <div className="flex items-center justify-end w-[30%]">
                    <div className="flex items-center pr-[20px] mr-[20px] border-r border-r-purple-bd-primary-color">
                        <TippyBox content="MV" placement="top" arrow offset={[0, 10]}>
                            <Button
                                disabled={!!!mvlink}
                                rounded
                                className="w-[32px] h-[32px] mx-[2px] !text-purple-text-actions"
                            >
                                <MdMusicVideo className="text-[20px]" />
                            </Button>
                        </TippyBox>
                        <TippyBox content="Xem lời bài hát" placement="top" arrow offset={[0, 10]}>
                            <Button
                                disabled={!hasLyric}
                                rounded
                                className="w-[32px] h-[32px] mx-[2px] !text-purple-text-actions"
                            >
                                <PiMicrophoneStage className="text-[20px]" />
                            </Button>
                        </TippyBox>
                        <TippyBox content="Chế độ cửa sổ" placement="top" arrow offset={[0, 10]}>
                            <Button rounded className="w-[32px] h-[32px] mx-[2px] !text-purple-text-actions">
                                <PiLayout className="text-[20px]" />
                            </Button>
                        </TippyBox>
                        <div className="flex items-center">
                            <Button
                                rounded
                                className="w-[32px] h-[32px] mx-[2px] !text-purple-text-actions"
                                onClick={handleToggleMuted}
                            >
                                {isMuted ? (
                                    <SlVolumeOff className="text-[20px]" />
                                ) : (
                                    <SlVolume2 className="text-[20px]" />
                                )}
                            </Button>
                            <InputSlider
                                onChange={handleChangeValueVolume}
                                min={MIN_VALUE_VOLUME}
                                max={MAX_VALUE_VOLUME}
                                value={valueVolume}
                                className="h-[15px]"
                                heigthSlider="4px"
                                widthSlider="70px"
                                widthThumb="10px"
                                heightThumb="10px"
                            />
                        </div>
                    </div>
                    <div>
                        <TippyBox content="Danh sách phát" placement="top" arrow offset={[0, 10]}>
                            <Button
                                onClick={onShowPLaylistPLayer}
                                className="h-[30px] px-[5px] bg-purple-bg-btn-alpha rounded-[4px] !text-purple-text-actions"
                            >
                                <RiPlayList2Fill className="text-[18px]" />
                            </Button>
                        </TippyBox>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PlayHandler;
