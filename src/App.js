import React from "react";
import { Routes } from "./Routing";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/reducers";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes />
      </Provider>
    </div>
  );
};

export default App;
