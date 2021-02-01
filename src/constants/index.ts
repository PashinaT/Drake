
export interface IRootReducers{
    app:IInitialState;
}

export interface IInitialState{
    appState:number
}

export enum ActionTypes{
    APP_STATE="appState"
}

export  interface IItem {
    value:number,
    content:string
}

export const selectedItems:IItem[]=[
    {value:1,
        content:"1 (Дрейк)"},
    {value:0.13,
        content:"0.13 (Лайнвивер)"},
];


export const initialState: IInitialState = {
    appState:0
}