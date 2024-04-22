import ApiRequest from '../utils';

const top100Api = async () => {
    try {
        const res = await ApiRequest.get('top100');

        return res;
    } catch (e) {
        return { Error: {...e, isError: true}};
    }
};

export default top100Api;
