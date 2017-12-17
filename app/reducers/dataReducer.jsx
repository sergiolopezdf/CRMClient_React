import {ISDATAREADY} from "../constants/constants";


function dataReducer(state = ISDATAREADY, action) {
    switch (action.type) {
        case 'DOWNLOADED_JSON':
            return action.isDataReady;
        default:
            return state;

    }
}

export default dataReducer;