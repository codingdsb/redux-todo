import React from "react";
import { render } from "react-dom";
import "./main.css";
import App from "./components/App";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import todosReducer from "./features/Todos";
import { composeWithDevTools } from "redux-devtools-extension";

const root = document.getElementById("root");

const store = configureStore(
  {
    reducer: {
      todos: todosReducer,
    },
  },
  composeWithDevTools()
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
