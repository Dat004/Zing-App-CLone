import * as httpsRequest from './httpsRequest';

const ApiRequest = {
    get: httpsRequest.getRequest,
    getCustom: httpsRequest.getCustomRequest,
    getExtra: httpsRequest.getExtraRequest,
    post: httpsRequest.postRequest,
    patch: httpsRequest.patchRequest,
    delete: httpsRequest.deleteRequest,
};

export default ApiRequest;
