import {DATES} from "../constants/constants";

function datesReducer(state = DATES, action) {
    switch (action.type) {
        case 'UPDATE_DATES':
            return [action.initialDate, action.finalDate];
        default:
            return state;

    }
}

export default datesReducer;