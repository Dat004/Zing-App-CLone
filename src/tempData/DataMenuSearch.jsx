import images from '../assets/images';

export const DATA_MENU_SEARCH = [
    {
        name: 'tất cả',
        href: '',
        type: 'menu',
    },
    {
        name: 'bài hát',
        href: '',
        type: 'menu',
    },
    {
        name: 'playlist/album',
        href: '',
        type: 'menu',
    },
    {
        name: 'nghệ sĩ/oa',
        href: '',
        type: 'menu',
    },
    {
        name: 'mv',
        href: '',
        type: 'menu',
    },
];

export const DATA_EMTY_MENU = [
    {
        background: images.noResultSearch,
        title: 'Không có kết quả được tìm thấy',
    },
    {
        background: images.noMusicResult,
        title: 'Không có Bài Hát được tìm thấy',
    },
    {
        background: images.noPlaylistSearch,
        title: 'Không có Playlist/Album được tìm thấy',
    },
    {
        background: images.noArtistSearch,
        title: 'Không có Nghệ sĩ/OA được tìm thấy',
    },
    {
        background: images.noVideoSearch,
        title: 'Không có MV được tìm thấy',
    },
];
