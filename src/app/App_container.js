import {connect} from "react-redux";
import {appFirstRun} from "./app_reducer";
import App from "./App";

let mapStateToProps = (state) => {
    const isLoaded = state.load.isLoaded;
    return {
        isLoaded: isLoaded
    }
}

const AppContainer = connect(mapStateToProps, {appFirstRun})(App);

export default AppContainer;