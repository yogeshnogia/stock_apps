import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";
import store from "./store";
import { getStocks } from "./actions/Actions";

import "../assets/css/index.css";

let renderThis = <Provider store = {store}><App /></Provider>;

/* 
We use a try/catch here because most modern browsers don't allow mixed-content 
to be rendered on the same page. Since this project is hosted on GitHub Pages which 
uses HTTPS only, we can't directly use the WebSocket. This is because the WebSocket 
which we have subscribed to uses 'ws' instead of 'wss' (wss: ws secure). So we use 
a try/catch block to display a temporary element which has some basic information. On 
Google Chrome, in the address bar, there is a shield icon which enables users to 
'Load unsafe scripts' after which the app works normally.
*/

try {
    store.dispatch(getStocks());
} catch (err) {
    renderThis =
        <p>
            This website uses the websocket 'ws://stocks.mnet.website' 
            which cannot be used in HTTPS. Since GitHub Pages uses HTTPS 
            as standard, if you want to view the site, please click on the 
            shield icon on the address bar and click 'allow unsafe scripts' 
            and then refresh the browser (Currently only on Google Chrome).
        </p>;
}

ReactDOM.render(renderThis, window.document.getElementById("app"));
