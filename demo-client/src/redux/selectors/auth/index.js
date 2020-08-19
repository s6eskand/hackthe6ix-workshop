import {
    createSelector
} from 'reselect';

export const tokenSelector = createSelector(state => state && state.auth && state.auth.token, tokenSelector => tokenSelector);
export const isAuthenticatedSelector = createSelector(state => state && state.auth && state.auth.isAuthenticated, isAuthenticatedSelector => isAuthenticatedSelector);
export const userInfoSelector = createSelector(state => state && state.auth && state.auth.userInfo, userInfoSelector => userInfoSelector);
export const loadingSelector = createSelector(state => state && state.auth && state.auth.loading, loadingSelector => loadingSelector);
export const errorSelector = createSelector(state => state && state.auth && state.auth.error, errorSelector => errorSelector);
export const messageSelector = createSelector(state => state && state.auth && state.auth.message, messageSelector => messageSelector);
