import {
    createSelector
} from 'reselect';

export const musicSelector = createSelector(state => state && state.main && state.main.music, musicSelector => musicSelector);
export const loadingSelector = createSelector(state => state && state.main && state.main.loading, loadingSelector => loadingSelector);
