import { ADD_MUSIC, REMOVE_MUSIC } from './constants';

export const addMusic = (payload) => {
    return {
        type: ADD_MUSIC,
        payload,
    };
};

export const removeMusic = (payload) => {
    return {
        type: REMOVE_MUSIC,
        payload,
    };
};
