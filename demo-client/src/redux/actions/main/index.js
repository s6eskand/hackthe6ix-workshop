import {
    CREATE_MUSIC,
    FETCH_ALL_MUSIC,
    EDIT_MUSIC,
    DELETE_MUSIC,
    STORE_MUSIC,
    SET_LOADING
} from "../../constants/main";

export const createMusic = (music) => ({
    type: CREATE_MUSIC,
    music,
});

export const fetchAllMusic = () => ({
    type: FETCH_ALL_MUSIC,
});

export const editMusic = (edit, id) => ({
    type: EDIT_MUSIC,
    edit,
    id,
});

export const deleteMusic = (deleteMusic, id) => ({
    type: DELETE_MUSIC,
    deleteMusic,
    id,
});

export const storeMusic = (music) => ({
    type: STORE_MUSIC,
    music
});

export const setLoading = (loading) => ({
    type: SET_LOADING,
    loading,
});