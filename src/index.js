import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/global.scss";
import { Provider } from "react-redux";
import store from "./reduxToolkit/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Router />
    </Provider>
  </BrowserRouter>
);
