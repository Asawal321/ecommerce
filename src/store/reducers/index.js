import { createStore } from "redux";
import ProductsReducers from "./ProductsReducers";

const store = createStore(
  ProductsReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
