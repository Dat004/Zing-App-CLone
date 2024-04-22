import ApiRequest from '../utils';

export const suggestionSearchApi = async (
    keyword,
    num = 10,
    language = 'vi',
    ctime = '1713780153',
    version = '1.10.20',
    sig = 'cbcc38a68af3d338fa2d74fef1ed63c6bfedd61f63b4503650c1dac9e6adcf880dacc6d4c6aa4d1f636d5100dbba31a4585e18e8d85f63a59a99b279fdecf47d',
    apiKey = 'X5BM3w8N7MKozC0B85o4KMlzLZKhV00y',
) => {
    try {
        const res = await ApiRequest.getCustom('ac-suggestions', {
            params: {
                num,
                query: keyword,
                language,
                ctime,
                version,
                sig,
                apiKey,
            },
        });

        return res.data;
    } catch (e) {
        return { Erorr: e };
    }
};
