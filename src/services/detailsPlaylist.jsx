import ApiRequest from '../utils';

export const detailsPlaylist = async (id) => {
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

export const sectionPlaylist = async (id) => {
    try {
        const res = await ApiRequest.getExtra('suggestedplaylist', {
            params: {
                id,
            },
        });

        return res;
    } catch (e) {
        return { Error: { ...e, isError: true } };
    }
};
