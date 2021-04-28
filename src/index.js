import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
