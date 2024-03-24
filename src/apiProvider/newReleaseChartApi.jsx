import ApiRequest from '../utils';

const newReleaseChartApi = async () => {
    try {
        const res = await ApiRequest.get('charthome');

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};

export default newReleaseChartApi;