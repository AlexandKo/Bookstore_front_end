export const loadBook = "bookstore/app/LOAD_BOOKS";
export const appRunFlag = "bookstore/app/APP_RUN";

export const loadBookAction = (books) => {
    return {type: loadBook, payload: books}
}

export const appFirstRunAction = () => {
    return {type: appRunFlag}
}