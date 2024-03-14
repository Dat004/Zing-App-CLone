import ApiRequest from '../utils';

const newReleaseChartApi = async () => {
    try {
        const res = await ApiRequest.get('charthome');

        return res.data;
    } catch (e) {
        return { Error: e };
    }
};

export default newReleaseChartApi;