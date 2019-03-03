import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reduxPromise from 'redux-promise-middleware';
// import root reducer
import {rootReducer} from "./reducers/rootReducer";
// enhancers
const allEnhancers = compose(
    applyMiddleware(reduxPromise/*()*/, thunk)/*,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()*/
);

export const store = createStore(
    rootReducer,
    allEnhancers
);