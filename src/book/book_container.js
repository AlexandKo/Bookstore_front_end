import {connect} from "react-redux";
import {resetAddBookError} from "./book_reducer";
import {loadBooks} from "../app/app_reducer";
import {resetError} from "./book_reducer";
import Book from "./Book";


let mapStateToProps = (state) => {
    const isWasSaved = state.book.isWasSaved;
    const addBookError = state.book.addBookError;
    const currentPage = state.book.currentPage;
    const bookList = state.load.load;
    return {
        isWasSaved: isWasSaved,
        addBookError: addBookError,
        currentPage: currentPage,
        bookList: bookList
    }
}

const BookContainer = connect(mapStateToProps, {resetError, loadBooks,resetAddBookError})(Book);

export default BookContainer;