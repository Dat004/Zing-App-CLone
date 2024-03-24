import ApiRequest from '../utils';

const newReleaseApi = async () => {
    try {
        const res = await ApiRequest.get('newreleasechart');

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};

export default newReleaseApi;
