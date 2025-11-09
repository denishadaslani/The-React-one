import { createStore } from "redux";
import { productReducer } from "../services/reducer/propertyReducer";


const store = createStore(productReducer);

export default store