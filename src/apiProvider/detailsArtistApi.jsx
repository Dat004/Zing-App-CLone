import ApiRequest from '../utils';

const detailsArtistApi = async (name) => {
    try {
        const res = await ApiRequest.get('artist', {
            params: {
                name,
            },
        });

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};

export default detailsArtistApi;
