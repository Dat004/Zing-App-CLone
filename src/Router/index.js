import DefaultLayout from '../layout/DefaultLayout';
import config from '../config';
import pages from '../pages';

const routerApp = [
    { path: config.routes.week_chart, component: pages.WeekChartCountry, layout: DefaultLayout },
    { path: config.routes.artist_songs, component: pages.ArtistSongs, layout: DefaultLayout },
    { path: config.routes.new_release, component: pages.NewRelease, layout: DefaultLayout },
    { path: config.routes.hub_details, component: pages.HubDetails, layout: DefaultLayout },
    { path: config.routes.zing_chart, component: pages.ZingChart, layout: DefaultLayout },
    { path: config.routes.playlist, component: pages.Playlist, layout: DefaultLayout },
    { path: config.routes.my_music, component: pages.MyMusic, layout: DefaultLayout },
    { path: config.routes.artists, component: pages.Artist, layout: DefaultLayout },
    { path: config.routes.top100, component: pages.Top100, layout: DefaultLayout },
    { path: config.routes.search, component: pages.Search, layout: DefaultLayout },
    { path: config.routes.radio, component: pages.Radio, layout: DefaultLayout },
    { path: config.routes.album, component: pages.Album, layout: DefaultLayout },
    { path: config.routes.home, component: pages.Home, layout: DefaultLayout },
    { path: config.routes.hub, component: pages.Hub, layout: DefaultLayout },
];

export default routerApp;
