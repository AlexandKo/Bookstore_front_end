export const addBook = "bookstore/book/ADD_BOOK";
export const resetError = "bookstore/book/RESET_ERROR";
export const setCurrentPage = "bookstore/book/SET_CURRENT_PAGE";
export const resetAddBookError = "bookstore/book/RESET_ADD_BOOK_ERROR";

export const addBookAction = (book) => {
    return {type: addBook, payload: book}
}

export const resetErrorAction = () => {
    return {type: resetError}
}

export const resetAddBookErrorAction = () => {
    return {type: resetAddBookError}
}

export const setCurrentPageAction = (page) => {
    return {type: setCurrentPage, payload: page}
}