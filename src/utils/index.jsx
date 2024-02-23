import * as httpsRequest from './httpsRequest';

const ApiRequest = {
    get: httpsRequest.getRequest,
    post: httpsRequest.postRequest,
    patch: httpsRequest.patchRequest,
    delete: httpsRequest.deleteRequest,
};

export default ApiRequest;
