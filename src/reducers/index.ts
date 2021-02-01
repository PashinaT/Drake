import {combineReducers} from 'redux';
import root from './root';
import {IRootReducers} from "../constants";

export default combineReducers<IRootReducers>(
    {
        app:root
    }
)
