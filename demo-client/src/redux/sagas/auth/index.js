
// sagas effects
import {
    takeLatest,
    put,
    call
} from 'redux-saga/effects';
import axios from 'axios';

// constants
import {
    AUTH_LOGIN, AUTH_LOGOUT,
    AUTH_REGISTER
} from "../../constants/auth";
import {
    SERVER_ENDPOINTS
} from "../../../global/constants";

// secondary actions
import {
    storeToken,
    storeUser,
    setAuthStatus,
} from "../../actions/auth";


function* postRequest(endpoint, data) {
    return yield axios.post(endpoint, data)
        .then(res => res);
}

function* logoutRequest(endpoint) {
    return yield axios.post(endpoint, data, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
        .then(res => res)
}

function* authLogin(action) {
    yield put(setAuthStatus(true, false, "loading"));
    const response = yield call(() => postRequest(SERVER_ENDPOINTS.AUTH_LOGIN, action.user));
    if (response.status === 200) {
        yield localStorage.setItem('token', response.data.token);
        yield put(storeToken(response.data.token, true));
        yield put(storeUser(response.data.user));
        yield put(setAuthStatus(false, false, "Successfully authenticated"))
    } else {
        yield put(setAuthStatus(false, true, response.data.non_field_errors[0]))
    }
    yield action.history.push('/')
}

function* authRegister(action) {
    yield put(setAuthStatus(true, false, "loading"));
    const response = yield call(() => postRequest(SERVER_ENDPOINTS.AUTH_REGISTER, action.user));
    if (response.status === 200) {
        yield localStorage.setItem('token', response.data.token);
        yield put(storeToken(response.data.token, true));
        yield put(storeUser(response.data.user))
    } else {
        yield put(setAuthStatus(false, true, response.data.username[0]))
    }
    yield action.history.push('/')
}

function* authLogout(action) {
    const response = yield call(() => logoutRequest(SERVER_ENDPOINTS.AUTH_LOGOUT));
    if (response.status === 204) {
        yield localStorage.clear();
        yield put(storeToken(null, false));
        yield put(storeUser({}))
    }
    yield action.history.push('/');
}

export default function* authSagas() {
    yield takeLatest(AUTH_LOGIN, authLogin);
    yield takeLatest(AUTH_REGISTER, authRegister);
    yield takeLatest(AUTH_LOGOUT, authLogout);
}