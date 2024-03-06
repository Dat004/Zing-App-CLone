import ApiRequest from '../utils';

const top100Api = async () => {
    try {
        const res = await ApiRequest.get('top100');

        return res.data;
    } catch (e) {
        return { Error: e };
    }
};

export default top100Api;
