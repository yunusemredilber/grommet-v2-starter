// action type exports
export const SET_TEST = "SET_TEST";

// actions
export function setTest(test) {
    return dispatch => {
        dispatch({
            type: SET_TEST,
            payload: test
        })
    }
};