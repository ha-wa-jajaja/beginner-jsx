import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import router
import { BrowserRouter } from "react-router-dom";

// activate redux, wrap provider around app
import { Provider } from "react-redux";
import store from "./store/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
