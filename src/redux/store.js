import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {bookReducer} from "../book/book_reducer";
import {bookLoaderReducer} from "../app/app_reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let indexReducers = combineReducers({
    book: bookReducer,
    load: bookLoaderReducer
})

let store = createStore(indexReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;