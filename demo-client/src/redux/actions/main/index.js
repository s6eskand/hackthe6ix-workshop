import {
    CREATE_MUSIC,
    FETCH_ALL_MUSIC,
    EDIT_MUSIC,
    DELETE_MUSIC,
    STORE_MUSIC,
    SET_LOADING
} from "../../constants/main";

export const createMusic = (music, close) => ({
    type: CREATE_MUSIC,
    music,
    close,
});

export const fetchAllMusic = () => ({
    type: FETCH_ALL_MUSIC,
});

export const editMusic = (edit, close, id) => ({
    type: EDIT_MUSIC,
    edit,
    close,
    id,
});

export const deleteMusic = (deleteMusic) => ({
    type: DELETE_MUSIC,
    deleteMusic
});

export const storeMusic = (music) => ({
    type: STORE_MUSIC,
    music
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    loading,
});