import {connect} from "react-redux";
import {saveStatus} from "./book_reducer";
import AddBook from "./AddBook";

let mapStateToProps = (state) => {
    const isWasSaved = state.book.isWasSaved;
    const addBookError = state.book.addBookError;
    return {
        isWasSaved: isWasSaved,
        addBookError: addBookError
    }
}

const BookContainer = connect(mapStateToProps, {saveStatus})(AddBook);

export default BookContainer;