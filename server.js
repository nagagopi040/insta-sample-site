import "babel-polyfill";
import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import bodyParser from "body-parser";
import { createStore } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./src/reducers";
import App from "./src/App";

var app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('build/public'));

app.use(handleRender)

// We are going to fill these out in the sections to follow
function handleRender(req, res) {
    const store = createStore(rootReducer);

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    // Grab the initial state from our Redux store
    const preloadedState = store.getState();
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html, preloadedState));
}
function renderFullPage(html, preloadedState) {
    return `
    <!doctype html>
    <html>
      <head>
        <title>Sample Insta Site</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <noscript>Your browser does not support JavaScript!</noscript>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            '\\u003c'
          )}
        </script>
        <script src="client_bundle.js"></script>
      </body>
    </html>
    `
}

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
})