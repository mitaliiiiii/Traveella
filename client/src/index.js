import React from "react";
import './App.css';

import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Toaster } from "react-hot-toast";

// ======= Dummy Reducer Setup =======
const initialProfileState = { user: null };

function profileReducer(state = initialProfileState, action) {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  profile: profileReducer,
});

// ======= Configure Store =======
const store = configureStore({
  reducer: rootReducer,
});

// ======= Render App =======
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <Toaster />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
