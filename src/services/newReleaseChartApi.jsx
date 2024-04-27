import ApiRequest from '../utils';

export const newReleaseChartApi = async () => {
    try {
        const res = await ApiRequest.get('charthome');

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};

export const weekChartApi = async (id) => {
    try {
        const res = await ApiRequest.getExtra('weekchart', {
            params: {
                id,
            },
        });

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};
