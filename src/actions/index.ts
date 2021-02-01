import {ActionTypes} from "../constants";

export interface  IBaseActionCreator<T,P> {
    type:T;
    payload:P;
}
export interface  IActionCreator<P> extends IBaseActionCreator<ActionTypes, P>{

    type:ActionTypes;
    payload:P;
}

export function actionCreator<T>(actionType:ActionTypes, data: T): IActionCreator<T> {
    return{
        type:actionType,
        payload:data
    }
}