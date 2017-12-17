//Reducers
import {combineReducers} from 'redux';
import visitReducer from './visitReducer';
import dataReducer from './dataReducer';

let GlobalState = combineReducers({
    currentVisit: visitReducer,
    isDataReady: dataReducer
});

export default GlobalState;
