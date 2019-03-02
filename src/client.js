import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "./App.js";
import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector("#root")
);