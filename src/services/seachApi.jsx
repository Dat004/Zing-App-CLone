import ApiRequest from '../utils';

export const suggestionSearchApi = async (keyword) => {
    try {
        const res = await ApiRequest.getExtra('suggestkeyword', {
            params: {
                keyword,
            },
        });

        return res.data;
    } catch (e) {
        return { Erorr: e };
    }
};
