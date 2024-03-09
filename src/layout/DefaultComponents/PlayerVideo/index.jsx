import { useState } from 'react';
import { PiLayout, PiMicrophoneStage } from 'react-icons/pi';
import { MdMusicVideo } from 'react-icons/md';
import { RiPlayList2Fill } from 'react-icons/ri';
import { SlVolume2, SlVolumeOff } from 'react-icons/sl';

import ActionsMusic from '../../../components/ActionsMusic';
import CardImage from '../../../components/CardImage';
import TippyBox from '../../../components/Tippy/TippyBox';
import BarController from './BarController';
import InputSlider from '../../../components/InputSlider';
import Button from '../../../components/Button';

function MusicPlayer() {
    const [muteVolume, setMuteVolume] = useState(false);

    const handleMuteVolume = () => {
        setMuteVolume((state) => !state);
    };

    return (
        <div className="fixed bottom-0 left-0 h-[90px] w-full bg-purple-bg-layout">
            <div className="flex items-center w-full h-full bg-purple-bd-player px-[20px] border-t border-t-purple-bd-primary-color">
                <div className="flex items-center justify-start w-[30%]">
                    <CardImage className="p-0" />
                    <div className="ml-[10px]">
                        <ActionsMusic widthBtn="32px" heightBtn="32px" isAddLibrary />
                    </div>
                </div>
                <div className="flex-auto">
                    <BarController />
                </div>
                <div className="flex items-center justify-end w-[30%]">
                    <div className="flex items-center pr-[20px] mr-[20px] border-r border-r-purple-bd-primary-color">
                        <TippyBox content="MV" placement="top" arrow offset={[0, 10]}>
                            <Button rounded className="w-[32px] h-[32px] mx-[2px] !text-purple-text-actions">
                                <MdMusicVideo className="text-[20px]" />
                            </Button>
                        </TippyBox>
                        <TippyBox content="Xem lời bài hát" placement="top" arrow offset={[0, 10]}>
                            <Button rounded className="w-[32px] h-[32px] mx-[2px] !text-purple-text-actions">
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
                                onClick={handleMuteVolume}
                            >
                                {muteVolume ? (
                                    <SlVolumeOff className="text-[20px]" />
                                ) : (
                                    <SlVolume2 className="text-[20px]" />
                                )}
                            </Button>
                            <InputSlider
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
                            <button className="flex items-center justify-center h-[30px] px-[5px] bg-purple-bg-btn-alpha rounded-[4px] !text-purple-text-actions">
                                <RiPlayList2Fill className="text-[18px]" />
                            </button>
                        </TippyBox>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MusicPlayer;
