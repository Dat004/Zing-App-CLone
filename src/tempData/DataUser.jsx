import { LabelPLusIcon, LabelPremiumIcon } from "../components/CustomIcon";
import images from "../assets/images";

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
