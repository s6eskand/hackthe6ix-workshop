const BASE_URL = "https://music-listing.herokuapp.com";

export const SERVER_ENDPOINTS = {
    AUTH_LOGIN: `${BASE_URL}/auth/login`,
    AUTH_REGISTER: `${BASE_URL}/auth/register`,
    AUTH_LOGOUT: `${BASE_URL}/auth/logout`,
    GET_AND_POST: `${BASE_URL}/music`,
    DELETE_AND_EDIT: `${BASE_URL}/music/`,
};