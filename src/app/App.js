import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import {Redirect, Route, Switch} from "react-router";
import {Component} from "react";
import AddBookContainer from "../book/addBook_container";
import BookContainer from "../book/book_container";
import {Spinner} from "react-bootstrap";

class App extends Component {
    componentDidMount() {
        this.props.appFirstRun();
    }

    render() {
        if (this.props.isLoaded) {
            return (
                <BrowserRouter>
                    <div className="app">
                        <Header/>
                        <Navbar/>
                        <Switch>
                            <Route exact path='/showBooks' component={BookContainer}/>
                            <Route exact path='/addBooks' component={AddBookContainer}/>
                        </Switch>
                        <Redirect to={'/showBooks'}/>
                    </div>
                </BrowserRouter>
            );
        } else {
            return (
                <div className={"loader"}> Wait connection.......
                        <Spinner animation="border" role="status"/>

                </div>
            )
        }
    };
}

export default App;