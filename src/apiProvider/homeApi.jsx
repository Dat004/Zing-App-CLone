import ApiRequest from '../utils';

const homeApi = async () => {
    try {
        const res = await ApiRequest.get('home');

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};

export default homeApi;
