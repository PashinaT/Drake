import * as React from "react";
import * as I from "./IDrakeCalc"
import 'bootstrap/dist/css/bootstrap.css';
import '../../styles/styles.css';
import {IItem, selectedItems} from "../../constants";
import ReactSelect, {
    OptionTypeBase,
    Props as SelectProps,
} from "react-select";



export interface State {

    r: number
    nE: number;
    fP: number;
    selectedValueFl: number;
    fC: number;
    L: number;
    fI: number;
    showResult: boolean;
    result:number;
}

export default class DrakeCalcPL extends  React.Component<I.OwnProps & I.StateProps & I.DispatchProps, I.State>
{

    state: State ={
        r: 0,
        nE: 8,
        fP: 0,
        fC: 0,
        selectedValueFl: selectedItems[0].value,
        L: 1,
        fI: 1,
        showResult:false,
        result:0
    };

    private changeSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({selectedValueFl:Number(event.target.value)});
    }

    private countResult =()=> {
        let res:number = this.state.selectedValueFl* this.state.fI* this.state.nE*this.state.fP* this.state.fC* this.state.L* this.state.r
        this.setState({result:res,showResult:true})
    };

    render(){
        return(
            <div className={"container containerColor"}  >
                <div className={"row"}>
                    <div className="centerComponent"> Формула Дрейка</div>
                </div>
                <div className="row ">
                   <div className="centerComponent"> N=R &middot; f<sub>p</sub>   &middot;   n<sub>e</sub> &middot; f<sub>l</sub> &middot; f<sub>i</sub> &middot; f<sub>c</sub> &middot; L </div>
                </div>
                <div className="row">
                    <div className="col-md">
                        <div className= "row">
                            <div className="col-sm-3 ">
                                R =
                            </div>
                            <div className="col-sm-2">
                                <input type="number" className="width130" step={1}  value={this.state.r}
                                       onChange={event=>{this.setState({r:event.target.value})}} min="1" />
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm-3 ">
                                f<sub>p</sub> = {this.state.fP} %
                            </div>
                            <div className="col-sm-2 ">
                                <input type="range" className="width130" min="0" max="100" step="1" value={this.state.fP} onChange={event=>{this.setState({fP:event.target.value})}}/>
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm-3 ">
                                n<sub>e</sub> = {this.state.nE}
                            </div>
                            <div className="col-sm-2 ">
                                <input type="number" className="width130"  value={this.state.nE}
                                    onChange={event=>{this.setState({nE:event.target.value})}} min="0" />
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm-3 ">
                                f<sub>l</sub> = {this.state.selectedValueFl}
                            </div>
                            <div className="col-sm-2 ">
                                <select className="width130" onChange={(event)=>{ console.log("there");this.changeSelected(event)}}>
                                    {selectedItems.map(item=>{
                                        return( <option value={item.value}>{item.content}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm-3 ">
                                f<sub>i</sub> = {Math.pow(0.1,this.state.fI)}
                            </div>
                            <div className="col-sm-2 " >
                                <input type="range" className="width130" min="1" max="6" step="1" value={this.state.fI} onChange={event=>{this.setState({fI:event.target.value})}}/>
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm-3 ">
                                f<sub>c</sub> = {this.state.fC} %
                            </div>
                            <div className="col-sm-2 ">
                                <input type="range" className="width130" min="0" max="100" step="1" value={this.state.fC} onChange={event=>{this.setState({fC:event.target.value})}}/>
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm-3 ">
                                L = {Math.pow(10,this.state.L)}
                            </div>
                            <div className="col-sm-2 ">
                                <input type="range" className="width130" min="1" max="10" step="1" value={this.state.L} onChange={event=>{this.setState({L:event.target.value})}}/>
                            </div>

                        </div>
                    </div>
                    <div className="col-md ">
                        <div className= "row">
                            <div className="col-sm">
                                R - натуральное число
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm">
                                f<sub>p</sub> - шкала в %
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm">
                                n<sub>e</sub> - целое число
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm">
                                f<sub>l</sub> - выбор из двух()
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm">
                                f<sub>i</sub> - логарифмическая шкала c основанием 1/10
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm">
                                f<sub>c</sub> - шкала в %
                            </div>
                        </div>
                        <div className= "row">
                            <div className="col-sm">
                                L - десятичная логарифмическая шкала
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row ">
                    <button  className="btn-light centerComponent" onClick={()=>{this.countResult()}}> Получить N </button>
                </div>
                <div className="row ">
                    {this.state.showResult &&
                    <div>
                        Результат = {this.state.result}
                    </div>}
                </div>

            </div>

        )
    }


}