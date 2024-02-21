import { IoCallOutline, IoAddCircleOutline } from 'react-icons/io5';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { SlArrowRight } from 'react-icons/sl';
import { MdSecurity, MdOutlinePolicy } from 'react-icons/md';
import { LiaBuysellads } from 'react-icons/lia';
import { PiMicrophoneStage, PiShareFat } from 'react-icons/pi';
import { FiRadio } from 'react-icons/fi';
import { HiOutlineLink } from 'react-icons/hi';

import {
    DirectionIcon,
    LabelPLusIcon,
    LabelPremiumIcon,
    PlayCircleIcon,
    ReportIcon,
    ThemeIcon,
} from '../components/CustomIcon';
import images from '../assets/images';

export const DATA_SUB_PACKAGE = [
    {
        id: 1,
        title: 'Zing MP3',
        price: 'Chỉ từ 11.000 đ/tháng',
        description: 'Nghe nhạc với chất lượng cao nhất, không quảng cáo',
        bgUrl: images.plusPackageBg,
        label: <LabelPLusIcon />,
        path: 'https://id.zalo.me/account?continue=https://zingmp3.vn/vip/upgrade/plus',
        isNormal: false,
        isPlus: true,
        isPremium: false,
        type: 'package',
    },
    {
        id: 2,
        title: 'Zing MP3',
        price: 'Chỉ từ 37.500 đ/tháng',
        description: 'Toàn bộ đặc quyền Plus cùng kho nhạc Premium',
        bgUrl: images.premiumPackageBg,
        label: <LabelPremiumIcon />,
        path: 'https://id.zalo.me/account?continue=https://zingmp3.vn/vip/upgrade/premium',
        isNormal: false,
        isPlus: false,
        isPremium: true,
        type: 'package',
    },
];

export const DATA_MENU_SETTINGS = [
    {
        id: 1,
        title: 'Trình phát nhạc',
        leftIcon: <PlayCircleIcon />,
        rightIcon: <SlArrowRight className="text-[16px]" />,
        separate: false,
        isChildMenu: true,
        path: '',
        children: [],
    },
    {
        id: 2,
        title: 'Giao diện',
        leftIcon: <ThemeIcon />,
        rightIcon: <SlArrowRight className="text-[16px]" />,
        separate: false,
        isChildMenu: true,
        path: '',
        children: [],
    },
    {
        id: 3,
        title: 'Giới thiệu',
        leftIcon: <AiOutlineInfoCircle className="text-[20px]" />,
        rightIcon: '',
        separate: true,
        isChildMenu: false,
        path: '',
        children: [],
    },
    {
        id: 4,
        title: 'Thỏa thuận sử dụng',
        leftIcon: <MdOutlinePolicy className="text-[20px]" />,
        rightIcon: <DirectionIcon />,
        separate: false,
        isChildMenu: false,
        path: '',
        children: [],
    },
    {
        id: 5,
        title: 'Chính sách bảo mật',
        leftIcon: <MdSecurity className="text-[20px]" />,
        rightIcon: <DirectionIcon />,
        separate: false,
        isChildMenu: false,
        path: '',
        children: [],
    },
    {
        id: 6,
        title: 'Báo cáo vi phạm bản quyền',
        leftIcon: <ReportIcon />,
        rightIcon: <DirectionIcon />,
        separate: false,
        isChildMenu: false,
        path: '',
        children: [],
    },
    {
        id: 7,
        title: 'Quảng cáo',
        leftIcon: <LiaBuysellads className="text-[20px]" />,
        rightIcon: <DirectionIcon />,
        separate: false,
        isChildMenu: false,
        path: '',
        children: [],
    },
    {
        id: 8,
        title: 'Liên hệ',
        leftIcon: <IoCallOutline className="text-[20px]" />,
        rightIcon: <DirectionIcon />,
        separate: false,
        isChildMenu: false,
        path: '',
        children: [],
    },
];

export const DATA_OPTIONS_CURRENT_MUSIC = [
    {
        id: 1,
        title: 'Phát nội dung tương tự',
        leftIcon: <FiRadio className="text-[16px]" />,
        rightIcon: '',
        isChildMenu: false,
        children: [],
    },
    {
        id: 2,
        title: 'Thêm vào playlist',
        leftIcon: <IoAddCircleOutline className="text-[16px]" />,
        rightIcon: '',
        isChildMenu: false,
        children: [],
    },
    {
        id: 3,
        title: 'Phát cùng lời bài hát',
        leftIcon: <PiMicrophoneStage className="text-[16px]" />,
        rightIcon: '',
        isChildMenu: false,
        children: [],
    },
    {
        id: 4,
        title: 'Sao chép link',
        leftIcon: <HiOutlineLink className="text-[16px]" />,
        rightIcon: '',
        isChildMenu: false,
        children: [],
    },
    {
        id: 5,
        title: 'Chia sẻ',
        leftIcon: <PiShareFat className="text-[16px]" />,
        rightIcon: <SlArrowRight className="text-[16px]" />,
        isChildMenu: true,
        children: [],
    },
];
