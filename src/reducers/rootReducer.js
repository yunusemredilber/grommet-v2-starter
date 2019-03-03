import {combineReducers} from "redux";

// reducer imports
import homepageReducer from "./homepageReducer";

// export root reducer for store
export const rootReducer = combineReducers({
    homepage:homepageReducer,
});
