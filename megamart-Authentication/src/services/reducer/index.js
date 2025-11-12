import { combineReducers } from "redux";
import { productReducer } from "./propertyReducer";
import { authReducer } from "./autenticationReduser";

export const rootReducer = combineReducers({
  productReducer,
  authReducer,
})