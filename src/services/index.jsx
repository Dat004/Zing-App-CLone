import { detailsPlaylist, sectionPlaylist } from './detailsPlaylist';
import { newReleaseChartApi, weekChartApi } from './newReleaseChartApi';
import detailsArtistApi from './detailsArtistApi';
import { hubApi, hubDetailsApi } from './hubApi';
import { suggestionSearchApi } from './seachApi';
import newReleaseApi from './newReleaseApi';
import top100Api from './top100Api';
import homeApi from './homeApi';

const apiService = {
    hubApi,
    homeApi,
    top100Api,
    weekChartApi,
    newReleaseApi,
    hubDetailsApi,
    sectionPlaylist,
    detailsPlaylist,
    detailsArtistApi,
    newReleaseChartApi,
    suggestionSearchApi,
};

export default apiService;
