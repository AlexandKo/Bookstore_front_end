import './App.css';
import {BrowserRouter} from "react-router-dom";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import {Redirect, Route, Switch} from "react-router";
import {Component} from "react";
import Book from "../book/Book";
import BookContainer from "../book/book_container";

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
                            <Route exact path='/showBooks' component={Book}/>
                            <Route exact path='/addBooks' component={BookContainer}/>
                        </Switch>
                        <Redirect to={"/showBooks"}/>
                    </div>
                </BrowserRouter>
            );
        } else {
            return (
                <div>
                    Loading....
                </div>
            )
        }
    };
}

export default App;