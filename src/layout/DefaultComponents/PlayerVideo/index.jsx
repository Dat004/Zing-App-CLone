import { useState } from 'react';
import { PiLayout, PiMicrophoneStageLight } from 'react-icons/pi';
import { MdMusicVideo } from 'react-icons/md';
import { RiPlayList2Fill } from 'react-icons/ri';
import { SlVolume2, SlVolumeOff } from 'react-icons/sl';

import ActionsMusic from '../../../components/ActionsMusic/index,';
import CardMusic from '../../../components/CardMusic';
import TippyBox from '../../../components/Tippy/TippyBox';
import BarController from './BarController';
import InputSlider from '../../../components/InputSlider';

function MusicPlayer() {
    const [muteVolume, setMuteVolume] = useState(false);

    const handleMuteVolume = () => {
        setMuteVolume((state) => !state);
    };

    return (
        <div className="fixed bottom-0 left-0 h-[90px] w-full bg-purple-bg-layout">
            <div className="flex items-center w-full h-full bg-purple-bd-player px-[20px] border-t border-t-purple-bd-separator-color">
                <div className="flex items-center justify-start w-[30%]">
                    <CardMusic className="p-0" widthImg="64px" heightImg="64px" isHoverArtist />
                    <div className="ml-[10px]">
                        <ActionsMusic widthBtn="32px" heightBtn="32px" isAddLibrary />
                    </div>
                </div>
                <div className="flex-auto">
                    <BarController />
                </div>
                <div className="flex items-center justify-end w-[30%]">
                    <div className="flex items-center pr-[20px] mr-[20px] border-r border-r-purple-bd-separator-color">
                        <TippyBox content="MV" placement="top" arrow offset={[0, 10]}>
                            <button className="flex items-center justify-center w-[32px] h-[32px] mx-[2px] bg-transparent hover:bg-purple-bg-active-items rounded-[50%] text-purple-text-actions">
                                <MdMusicVideo className="text-[20px]" />
                            </button>
                        </TippyBox>
                        <TippyBox content="Xem lời bài hát" placement="top" arrow offset={[0, 10]}>
                            <button className="flex items-center justify-center w-[32px] h-[32px] mx-[2px] bg-transparent hover:bg-purple-bg-active-items rounded-[50%] text-purple-text-actions">
                                <PiMicrophoneStageLight className="text-[20px]" />
                            </button>
                        </TippyBox>
                        <TippyBox content="Chế độ cửa sổ" placement="top" arrow offset={[0, 10]}>
                            <button className="flex items-center justify-center w-[32px] h-[32px] mx-[2px] bg-transparent hover:bg-purple-bg-active-items rounded-[50%] text-purple-text-actions">
                                <PiLayout className="text-[20px]" />
                            </button>
                        </TippyBox>
                        <div className="flex items-center">
                            <button
                                className="flex items-center justify-center w-[32px] h-[32px] mx-[2px] bg-transparent hover:bg-purple-bg-active-items rounded-[50%] text-purple-text-actions"
                                onClick={handleMuteVolume}
                            >
                                {muteVolume ? (
                                    <SlVolumeOff className="text-[20px]" />
                                ) : (
                                    <SlVolume2 className="text-[20px]" />
                                )}
                            </button>
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
                            <button className="flex items-center justify-center h-[30px] px-[5px] bg-purple-bg-active-items rounded-[4px] text-purple-text-actions">
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
