import axios from "axios";

export const defaultRequest = axios.create({
    baseURL: 'https://server-tau-six.vercel.app/api/',
});

export const customRequest = axios.create({
    baseURL: 'https://ac.zingmp3.vn/v1/web/',
});

export const getRequest = async (path, options) => {
    const reponse = await defaultRequest.get(path, options);
    
    return reponse;
};

export const getCustomRequest = async (path, options) => {
    const reponse = await customRequest.get(path, options);
    
    return reponse;
};

export const postRequest = async (path, data, options) => {
    const reponse = await defaultRequest.post(path, data, options);

    return reponse;
};

export const deleteRequest = async (path, options) => {
    const reponse = await defaultRequest.delete(path, options);

    return reponse;
};

export const patchRequest = async (path, data, options) => {
    const reponse = await defaultRequest.patch(path, data, options);

    return reponse;
};