//Reducers
import {combineReducers} from 'redux';
import visitReducer from './visitReducer';

let GlobalState = combineReducers({
    currentVisit: visitReducer
});

export default GlobalState;
