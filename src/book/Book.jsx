import {Table} from "react-bootstrap";
import Paging from "../util/Paging";
import {useEffect} from "react";

const Book = (props) => {
    const data = props.bookList;

    useEffect(() => {
        props.loadBooks(props.currentPage);
        props.resetError();
        props.resetAddBookError();
    }, [])

    return (
        <div>
            <div className="container  table-responsive">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <td style={{textAlign: 'center'}}>#</td>
                        <th style={{textAlign: 'center'}}>Book Title</th>
                        <th style={{textAlign: 'center'}}>Book Price</th>
                    </tr>
                    </thead>
                    <tbody style={{lineHeight: '2.5'}}>
                    {data.map(i => <tr key={i.id}>
                        <td style={{width: '5%'}}>{i.id}</td>
                        <td style={{width: '10%'}}>{i.title}</td>
                        <td style={{width: '10%'}}>{i.price}</td>
                    </tr>)}
                    </tbody>
                </Table>
            </div>
            <div className="pagination justify-content-center">
                <Paging/>
            </div>
        </div>
    );
}

export default Book;

