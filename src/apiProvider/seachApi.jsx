import ApiRequest from '../utils';

const suggestionSearchApi = async (keyword, num = 10) => {
    try {
        const res = await ApiRequest.getCustom('ac-suggestions', {
            params: {
                num,
                query: keyword,
            },
        });

        return res.data;
    } catch (e) {
        return { Erorr: e };
    }
};

export default suggestionSearchApi;
