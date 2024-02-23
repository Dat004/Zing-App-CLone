import axios from "axios";

export const request = axios.create({
    baseURL: 'https://server-tau-six.vercel.app/api/',
});

export const getRequest = (path, options) => {
    const reponse = request.get(path, options);
    
    return reponse;
};

export const postRequest = (path, data, options) => {
    const reponse = request.post(path, data, options);

    return reponse;
};

export const deleteRequest = (path, options) => {
    const reponse = request.delete(path, options);

    return reponse;
};

export const patchRequest = (path, data, options) => {
    const reponse = request.patch(path, data, options);

    return reponse;
};