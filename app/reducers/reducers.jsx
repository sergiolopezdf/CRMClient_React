//Reducers
import {combineReducers} from 'redux';
import visitReducer from './visitReducer';
import dataReducer from './dataReducer';
import datesReducer from "./datesReducer";

let GlobalState = combineReducers({
    currentVisit: visitReducer,
    isDataReady: dataReducer,
    dates: datesReducer
});

export default GlobalState;
