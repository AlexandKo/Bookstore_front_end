import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import {Provider} from "react-redux";
import AppContainer from "./app/App_container";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();