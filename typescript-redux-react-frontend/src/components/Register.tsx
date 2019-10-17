import React, { Component } from 'react'
import { ActionType, IAction } from '../framework/IAction';
import {  IState, IUser } from '../state/appState'
import axios from 'axios';
import { IWindow } from '../framework/IWindow';
import { reducerFunctions } from '../reducer/appReducer';
declare let window: IWindow;

interface IProps{};

export interface IUserAction extends IAction {
    user: IUser
  }
  

reducerFunctions[ActionType.create_user] = function (newState: IState, updateAction: IUserAction) {
    console.log(updateAction.user);
    return newState.BM.user=updateAction.user;
}

export default class Register extends Component {

    constructor(props:IProps){
        super(props);

    }
    render() {
        return (
            <div>
                <form action="">
                    <label htmlFor="firstname">First name:</label>
                    <input type="text" placeholder="firstname" onChange={this.handleFirstnameChange} value = {window.CS.getBMState().user.firstname}/>
                    <br />
                    <label htmlFor="lastname">Last name:</label>
                    <input type="text" placeholder="lastname" />
                    <br />
                    <label htmlFor="username">Username:</label>
                    <input type="username" placeholder="Your username" />
                    <br />
                    <label htmlFor="password">Password:</label>
                    <input type="password" placeholder="********" />
                    <br />
                </form>
            </div>
        )
    }

    handleFirstnameChange(event:any){
        let user = window.CS.getBMState().user;
        
        if (user===undefined){
            user = {
                firstname:"",
                lastname:"",
                username:"",
                password:""
            }
        }
        user.firstname = event.target.value
        const action: IUserAction = {
            type: ActionType.update_user,
            user: user
        }
        window.CS.clientAction(action);
    }




}
