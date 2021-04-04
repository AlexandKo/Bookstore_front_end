import {appApi} from "../api/app_api";
import {loadBookAction, appFirstRunAction} from "./app_action";

const initialState = {
    pageCount: 0,
    isLoaded: false
};
export const bookLoaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'bookstore/app/LOAD_BOOKS':
            return {
                ...state.load = action.payload,
                isLoaded: true
            }
        case 'bookstore/app/APP_RUN':
            return {
                ...state,
                isLoaded: true
            }
        default:
            return state;
    }
}

export const loadBooks = (pageNumber) => async (dispatch) => {
    return await appApi.loadBooks(pageNumber).then(response => {
        if (response.status === 200) {
            dispatch(loadBookAction(response.data));
        }
    })
}

export const appFirstRun = () => (dispatch) => {
    let promise = dispatch(loadBooks(1));
    promise.then(() => {
        dispatch(appFirstRunAction());
    });
}