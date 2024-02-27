import ApiRequest from "../utils";

const homeApi = async () => {
    try {   
        const res = await ApiRequest.get('home');

        return res.data;
    }
    catch (e) {
        return { Error: e }
    }
};

export default homeApi;