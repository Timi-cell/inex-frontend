import React from "react";
import axios from "axios";
import ReactDOM from "react-dom/client";
import App from "./App";
import './index.css';
import { Provider } from "react-redux";
import { store } from "./redux/store";
axios.defaults.withCredentials = true;


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

