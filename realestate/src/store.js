import { createStore } from 'redux';
import { applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import { propertyReducer } from './services/reducer/propertyReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(propertyReducer, composeEnhancers(applyMiddleware(thunk)));
// const store = createStore(propertyReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;


