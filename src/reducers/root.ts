import {combineReducers} from 'redux'
import {IInitialState} from "../constants";
import appState from "./appState"
export default combineReducers<IInitialState>(
    {
        appState
    }
)