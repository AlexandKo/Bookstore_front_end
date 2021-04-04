import {bookApi} from "../api/book_api";
import {addBookAction, resetErrorAction} from "./book_action";

const initialState = {
    isWasSaved: null,
    addBookError: false
};

export const addBookReducer = (state = initialState, action) => {
    let addBookError = false;
    switch (action.type) {
        case 'bookstore/book/ADD_BOOK':
            if (!action.payload) {
                addBookError = true
            }
            return {
                ...state,
                isWasSaved: action.payload,
                addBookError: addBookError
            };
        case 'bookstore/book/RESET_ERROR':
            return {
                ...state,
                addBookError: false
            }
        default:
            return state;
    }
}

export const saveStatus = (newBook) => async (dispatch) => {
    return await bookApi.addBook(newBook).then(response => {
        if (response.status === 200) {
            dispatch(addBookAction(response.data.isWasSaved));
        }
    })
}

export const resetError = () => (dispatch) => {
    dispatch(resetErrorAction());
}