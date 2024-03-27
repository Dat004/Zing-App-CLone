import ApiRequest from '../utils';

const detailsPlaylist = async (id) => {
    try {
        const res = await ApiRequest.get('detailplaylist', {
            params: {
                id: id,
            },
        });

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};

export default detailsPlaylist;
