import {bookApi} from "../api/book_api";
import {addBookAction, resetAddBookErrorAction, resetErrorAction, setCurrentPageAction} from "./book_action";

const initialState = {
    isWasSaved: false,
    addBookError: false,
    currentPage: 1
};

export const bookReducer = (state = initialState, action) => {
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
                addBookError: false,
                isWasSaved: false
            };
        case 'bookstore/book/RESET_ADD_BOOK_ERROR':
            return {
                ...state,
                addBookError: false,
            };
        case 'bookstore/book/SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload
            };
        default:
            return state;
    }
}

export const bookSaveStatus = (newBook) => async (dispatch) => {
    return await bookApi.addBook(newBook).then(response => {
        if (response.status === 200) {
            dispatch(addBookAction(response.data.isWasSaved));
        }
    })
}

export const resetError = () => (dispatch) => {
    dispatch(resetErrorAction());
}

export const resetAddBookError = () => (dispatch) => {
    dispatch(resetAddBookErrorAction());
}

export const setCurrentPage = (page) => (dispatch) => {
    dispatch(setCurrentPageAction(page));
}