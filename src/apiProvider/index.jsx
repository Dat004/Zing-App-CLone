import homeApi from './homeApi';
import { hubApi, hubDetailsApi } from './hubApi';
import top100Api from './top100Api';
import newReleaseApi from './newReleaseApi';
import { suggestionSearchApi } from './seachApi';
import detailsArtistApi from './detailsArtistApi';
import newReleaseChartApi from './newReleaseChartApi';

const apiService = {
    hubApi,
    homeApi,
    top100Api,
    newReleaseApi,
    hubDetailsApi,
    detailsArtistApi,
    newReleaseChartApi,
    suggestionSearchApi,
};

export default apiService;
