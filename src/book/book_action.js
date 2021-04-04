export const addBook = "bookstore/book/ADD_BOOK";
export const resetError = "bookstore/book/RESET_ERROR";

export const addBookAction = (book) => {
    return {type: addBook, payload: book}
}

export const resetErrorAction = () => {
    return {type: resetError}
}