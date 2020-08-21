import {
    STORE_MUSIC,
    SET_LOADING
} from "../../constants/main";

const initialState = {
    loading: false,
    music: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case STORE_MUSIC:
            return {
                ...state,
                music: action.music
            };
        case SET_LOADING:
            return {
                ...state,
                loading: action.loading
            };
        default:
            return state
    }
};