// action type imports
import {SET_TEST} from "../actions/homepage-actions";

// init state
const initialState = {
    test:true
};
// reducer
export default function homepageReducer(state=initialState, action) {
    switch (action.type) {
        case SET_TEST:
            return {
                ...state,
                test: action.payload
            };
        default:
            return state;
    }
};

