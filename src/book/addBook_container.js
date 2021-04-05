import {connect} from "react-redux";
import {bookSaveStatus} from "./book_reducer";
import AddBook from "./AddBook";


let mapStateToProps = (state) => {
    const isWasSaved = state.book.isWasSaved;
    const addBookError = state.book.addBookError;
    return {
        isWasSaved: isWasSaved,
        addBookError: addBookError,
    }
}

const AddBookContainer = connect(mapStateToProps, {bookSaveStatus})(AddBook);

export default AddBookContainer;