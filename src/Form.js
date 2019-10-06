import React, { Component } from 'react'
import App from './App'
//Login Form
export class Form extends Component {

    state = { 
        id   : '',
        pass : '',
        loggedIn : false
    }

    handleLogout = ()=>{
        this.setState({
            loggedIn : false
        });
        console.log("Session over!")
    }

    handleLogin = ()=>{
        if(this.state.id === 'Abhimanyu' && this.state.pass === 'Password'){
            this.setState({
                loggedIn : true
            });
            console.log('Welcome')
        }
    };

    handleUsername = (event)=>{
        console.log(event.target.value);
        this.setState({
            id : event.target.value
        });
    }

    handlePassword = (event)=>{
        console.log(event.target.value);
        this.setState({
            pass : event.target.value
        });
    }

    render() {
        
        let e = <div></div>
        if(!this.state.loggedIn){        
            e = (<div>
                    <input type = 'text' placeholder = 'Username' onBlur = {this.handleUsername}></input>
                    <input type = 'text' placeholder = 'Password' onBlur = {this.handlePassword}></input>
                    <button onClick = {this.handleLogin}>Login</button> 
                </div>);
        }
        else{
            e = (<div>
                    <App/>
                    <button onClick = {this.handleLogout}>Logout</button> 
                </div>)
        }
        return e;
    };
}

export default Form
