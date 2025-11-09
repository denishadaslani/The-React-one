import { applyMiddleware, createStore } from "redux";
import { productReducer } from "../services/reducer/propertyReducer";
import { thunk } from "redux-thunk"; 

const store = createStore(productReducer, applyMiddleware(thunk));

export default store;

