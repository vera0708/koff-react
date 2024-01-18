import { fetchAccessToken } from "./auth/auth.slice";


export const apiTokenErrorMiddleware = (store) => (next) => async (action) => {
    const state = store.getState();
    if (action.type.endsWith('rejected') && action.payload?.status === 401) {
        if (!state.auth.loading) {
            const refreshAction = await store.dispatch(fetchAccessToken())
            console.log(refreshAction);
        }
    }
    next(action);
};