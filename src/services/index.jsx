import { newReleaseChartApi, weekChartApi } from './newReleaseChartApi';
import { detailsPlaylist, sectionPlaylist } from './detailsPlaylist';
import { suggestionSearchApi, searchResultsApi } from './seachApi';
import detailsArtistApi from './detailsArtistApi';
import { hubApi, hubDetailsApi } from './hubApi';
import newReleaseApi from './newReleaseApi';
import top100Api from './top100Api';
import musicApi from './musicApi';
import homeApi from './homeApi';

const apiService = {
    hubApi,
    homeApi,
    musicApi,
    top100Api,
    weekChartApi,
    newReleaseApi,
    hubDetailsApi,
    sectionPlaylist,
    detailsPlaylist,
    searchResultsApi,
    detailsArtistApi,
    newReleaseChartApi,
    suggestionSearchApi,
};

export default apiService;
