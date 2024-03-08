import ApiRequest from '../utils';

const newReleaseApi = async () => {
    try {
        const res = await ApiRequest.get('newreleasechart');

        return res.data;
    } catch (e) {
        return { Error: e };
    }
};

export default newReleaseApi;
