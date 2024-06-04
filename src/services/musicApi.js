import ApiRequest from '../utils';

const musicApi = async (id) => {
    try {
        const res = await ApiRequest.get('song', {
            params: {
                id,
            },
        });

        return res;
    } catch (err) {
        return { Error: { ...err, isError: true } };
    }
};

export default musicApi;
