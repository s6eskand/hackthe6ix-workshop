import {
    STORE_USER,
    STORE_TOKEN,
    SET_AUTH_STATUS,
} from "../../constants/auth";
import {
    AUTH_KEY
} from "../../constants/keys";
import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";

const initialState = {
    isAuthenticated: false,
    token: null,
    userInfo: {},
    loading: false,
    error: false,
    message: '',
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case STORE_TOKEN:
            return {
                ...state,
                isAuthenticated: action.isAuthenticated,
                token: action.token
            };
        case STORE_USER:
            return {
                ...state,
                userInfo: action.userInfo
            };
        case SET_AUTH_STATUS:
            return {
                ...state,
                loading: action.loading,
                error: action.error,
                message: action.message
            };
        default:
            return state
    }
};

const config = {
    key: AUTH_KEY,
    storage: storage,
    whitelist: ['isAuthenticated', 'userInfo'],
};

export default persistReducer(config, auth)