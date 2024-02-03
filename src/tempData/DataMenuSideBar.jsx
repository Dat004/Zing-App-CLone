import {
    CDChartIcon,
    CategoriesIcon,
    ChartsIcon,
    DiscoveryIcon,
    LibraryIcon,
    RadioIcon,
    TopIcon,
} from '../components/CustomIcon';
import config from '../config';

export const DATA_MENU_TOP = [
    {
        type: 'menu',
        icon: <DiscoveryIcon />,
        title: 'Khám Phá',
        path: config.routes.home,
    },
    {
        type: 'menu',
        icon: <CDChartIcon />,
        title: '#zingchart',
        path: config.routes.zing_chart,
    },
    {
        type: 'menu',
        icon: <RadioIcon />,
        title: 'Radio',
        path: config.routes.radio,
    },
    {
        type: 'menu',
        icon: <LibraryIcon />,
        title: 'Thư Viện',
        path: config.routes.my_music,
    },
];

export const DATA_MENU_BOTTOM_CLIENT = [
    {
        type: 'menu',
        icon: <ChartsIcon />,
        title: 'BXH Nhạc Mới',
        path: config.routes.new_release,
    },
    {
        type: 'menu',
        icon: <CategoriesIcon />,
        title: 'Chủ Đề & Thể Loại',
        path: config.routes.hub,
    },
    {
        type: 'menu',
        icon: <TopIcon />,
        title: 'Top 100',
        path: config.routes.top100,
    },
];
