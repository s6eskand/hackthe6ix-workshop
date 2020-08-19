import {
    STORE_TOKEN,
    STORE_USER,
    SET_AUTH_STATUS,
    AUTH_LOGIN,
    AUTH_REGISTER, AUTH_LOGOUT,
} from "../../constants/auth";

export const storeToken = (token, isAuthenticated) => ({
   type: STORE_TOKEN,
   token,
   isAuthenticated
});

export const storeUser = (userInfo) => ({
    type: STORE_USER,
    userInfo,
});

export const setAuthStatus = (loading, error, message) => ({
    type: SET_AUTH_STATUS,
    loading,
    error,
    message
});

export const authLogin = (user, history) => ({
    type: AUTH_LOGIN,
    user,
    history,
});

export const authRegister = (user, history) => ({
    type: AUTH_REGISTER,
    user,
    history,
});

export const authLogout = (history) => ({
    type: AUTH_LOGOUT,
    history,
});