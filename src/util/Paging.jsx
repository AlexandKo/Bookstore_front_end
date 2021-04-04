import {Pagination} from "react-bootstrap";
import {connect} from "react-redux";
import {loadBooks} from "../app/app_reducer";

const Paging = (props) => {
    let items = [];
    for (let number = 1; number <= props.pageCount; number++) {
        items.push(
            <Pagination.Item key={number} id={number} onClick={() => paginationClicked}>
                {number}
            </Pagination.Item>
        );
    }
    let paginationClicked = (event) => {
        props.loadBooks(event.target.id)
    }
    return (
        <div>
            <Pagination onClick={paginationClicked}>
                {items}
            </Pagination>
        </div>
    )
}
let mapStateToProps = (state) => {
    const pageCount = state.load.pageCount;
    return {
        pageCount: pageCount
    }
}
export default connect(mapStateToProps, {loadBooks})(Paging);