import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from "react-bootstrap/Form";
import bookStyle from './Book.module.css';
import BookContainer from "./book_container";
import {Redirect} from "react-router";
import {ModalBody, ModalDialog, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/ModalHeader";

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

    let addButtonClick = false;

    const handleSubmit = () => {
        let bookData = {
            title: bookState.title,
            price: bookState.price
        }
        addButtonClick = true
        props.bookSaveStatus(bookData);
    }

    if (!addButtonClick) {
        return (
            <div>
                <div className={bookStyle.book}>
                    <Form>
                        <Form.Group size="lg" controlId="validation_Book">
                            <Form.Label>Book title</Form.Label>
                            <Form.Control
                                autoFocus
                                required
                                type="text"
                                value={bookState.title}
                                name={"title"}
                                autoComplete="off"
                                isInvalid={props.addBookError}
                                isValid={props.isWasSaved}
                                onChange={handleInputChange}
                            />
                            <Form.Control.Feedback type="invalid">Book exists</Form.Control.Feedback>
                            <Form.Control.Feedback type="valid">Book saved</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group size="lg">
                            <Form.Label>Book price</Form.Label>
                            <Form.Control
                                required
                                type="number"
                                value={bookState.price}
                                name={"price"}
                                autoComplete="off"
                                isInvalid={props.addBookError}
                                isValid={props.isWasSaved}
                                onChange={handleInputChange}
                            />
                        </Form.Group>
                        <Button block size="lg" onClick={handleSubmit} disabled={!validateForm()}>
                            Add Book
                        </Button>
                    </Form>
                </div>
            </div>
        );
    } else {
        return (<div>
                {cleanState()}
            </div>
        )
    }
}

export default AddBook;