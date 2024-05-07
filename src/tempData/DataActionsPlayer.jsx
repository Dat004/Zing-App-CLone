import { PiLayout, PiMicrophoneStage } from 'react-icons/pi';
import { MdMusicVideo } from 'react-icons/md';

const DATA_ACTIONS_PLAYER = [
    {
        name: 'MV',
        icon: <MdMusicVideo className="text-[20px]" />,
    },
    {
        name: 'Xem lời bài hát',
        icon: <PiMicrophoneStage className="text-[20px]" />,
    },
    {
        name: 'Chế độ cửa sổ',
        icon: <PiLayout className="text-[20px]" />,
    },
];

export default DATA_ACTIONS_PLAYER;
