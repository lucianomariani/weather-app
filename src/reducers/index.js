import { combineReducers } from 'redux';
import details from './cityReducer';

export default combineReducers({
    details: details,
});