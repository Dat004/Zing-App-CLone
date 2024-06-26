import ApiRequest from '../utils';

export const hubApi = async () => {
    try {
        const res = await ApiRequest.getExtra('hub');

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};

export const hubDetailsApi = async (id) => {
    try {
        const res = await ApiRequest.getExtra('gethubdetail', {
            params: {
                id,
            },
        });

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};
