import {IActionCreator} from "../../../src/actions"
import {ActionTypes, initialState} from "../../constants";

export default (state=initialState.appState,action: IActionCreator<number>):number=>{
    return action.type === ActionTypes.APP_STATE? action.payload:state;
}