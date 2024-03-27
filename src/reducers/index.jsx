import { ADD_MUSIC, REMOVE_MUSIC } from '../reducers/constants'

export const initState = {
    listMusic: [],
};

const reducer = (state, action) => {
    let newState;

    switch(action.type) {
        case ADD_MUSIC:
            const newData = [...state, action.payload];

            newState = newData;

            return newState;
        case REMOVE_MUSIC: 
            const newArr = [...state];

            newState = newArr.filter(items => items.encodeId !== action.payload);

            return newState;
        default: 
            throw new Error('Invalid action type');
    };
};

export default reducer;