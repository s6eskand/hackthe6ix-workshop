import {
    takeLatest,
    put,
    call,
} from 'redux-saga/effects';
import axios from 'axios';

import {
    FETCH_ALL_MUSIC,
    CREATE_MUSIC,
    EDIT_MUSIC,
    DELETE_MUSIC
} from "../../constants/main";

import {
    SERVER_ENDPOINTS
} from "../../../global/constants";

import {
    storeMusic,
    setLoading
} from "../../actions/main";

function* postRequest(endpoint, data) {
    return yield axios.post(endpoint, data, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
        .then(response => response.data)
}

function* getRequest(endpoint) {
    return yield axios.get(endpoint, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
        .then(response => response.data)
}

function* putRequest(endpoint, data) {
    return yield axios.put(endpoint, data, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
}

function* delRequest(endpoint) {
    return yield axios.delete(endpoint, {
        headers: {
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
}

function* fetchAllMusic() {
    yield put(setLoading(true));
    const response = yield call(() => getRequest(SERVER_ENDPOINTS.GET_AND_POST));
    yield put(storeMusic(response));
    yield put(setLoading(false));
}

function* createMusic(action) {
    yield put(setLoading(true));
    const response = yield call(() => postRequest(SERVER_ENDPOINTS.GET_AND_POST, action.music));
    yield call(() => fetchAllMusic());
    yield action.close()
}

function* editMusic(action) {
    yield put(setLoading(true));
    const response = yield call(() => putRequest(SERVER_ENDPOINTS.DELETE_AND_EDIT + action.id, action.edit));
    yield call(() => fetchAllMusic());
    yield action.close()
}

function* deleteMusic(action) {
    yield put(setLoading(true));
    const response = yield call(() => delRequest(SERVER_ENDPOINTS.DELETE_AND_EDIT + action.deleteMusic.id));
    yield call(() => fetchAllMusic());
}

export default function* mainSagas() {
    yield takeLatest(FETCH_ALL_MUSIC, fetchAllMusic);
    yield takeLatest(CREATE_MUSIC, createMusic);
    yield takeLatest(EDIT_MUSIC, editMusic);
    yield takeLatest(DELETE_MUSIC, deleteMusic);
}