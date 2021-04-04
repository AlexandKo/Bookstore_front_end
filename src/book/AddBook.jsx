import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import bookStyle from './Book.module.css';
import {Redirect} from "react-router";

const AddBook = (props) => {
    const [bookState, setState] = useState({
        title: "",
        price: ""
    });

    const validateForm = () => bookState.title.length > 0 && bookState.price.length > 0;

    const handleInputChange = (event) => {
        setState((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }));
    };

    const cleanState = () => {
        setState((prevProps) => ({
            ...prevProps,
            title: "",
            price: ""
        }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        let bookData = {
            title: bookState.title,
            price: bookState.price
        }
        props.saveStatus(bookData);

    }

    if (!(props.isWasSaved)) {
        return (
            <div>
                <div className={bookStyle.book}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group size="lg" controlId="validation_Book">
                            <Form.Label>Book title</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="text"
                                value={bookState.title}
                                name={"title"}
                                autoComplete="off"
                                isInvalid={Boolean(props.addBookError)}
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">Book exists</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group size="lg">
                            <Form.Label>Book price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={bookState.price}
                                name={"price"}
                                autoComplete="off"
                                isInvalid={Boolean(props.addBookError)}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button block size="lg" type={"submit"} disabled={!validateForm()}>
                            Add Book
                        </Button>
                    </Form>
                </div>
            </div>
        );
    } else {
        return (
            <div>
                {cleanState()}
                <Redirect to={"/showBooks"}/>
            </div>
        )
    }
}

export default AddBook;