import {CURRENTVISIT} from "../constants/constants";

function visitReducer(state = CURRENTVISIT, action) {
    switch (action.type) {
        case 'UPDATE_INFO':
            let newState = action.visit;
            return newState;
        default:
            return state;

    }
}

export default visitReducer;