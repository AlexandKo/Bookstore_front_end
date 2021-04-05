import {connect} from "react-redux";
import {bookSaveStatus} from "./book_reducer";
import AddBook from "./AddBook";


let mapStateToProps = (state) => {
    const isWasSaved = state.book.isWasSaved;
    const addBookError = state.book.addBookError;
    const currentPage = state.book.currentPage;
    return {
        isWasSaved: isWasSaved,
        addBookError: addBookError,
        //currentPage: currentPage
    }
}

const AddBookContainer = connect(mapStateToProps, {bookSaveStatus})(AddBook);

export default AddBookContainer;