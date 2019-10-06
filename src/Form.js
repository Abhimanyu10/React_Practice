import React, { Component } from 'react'
import App from './App'
//Login Form
export class Form extends Component {

    state = { 
        id   : '',
        pass : '',
        loggedIn: false,
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
    
    handleData = (event, fieldName) => {
        console.log(fieldName);
        this.setState({
            [fieldName] : event.target.value
            // Equivalent to id : event.target.value or pass : event.target.value depending upon the fieldname
        })
    }

    render() {
        let text = "Enter 'Abhimanyu' in Username and 'Password' in Password field to continue."
        
        let e = <div></div>
        if(!this.state.loggedIn){        
            e = (<div>
                <h3>{text}</h3>
                <input type='text' placeholder='Username' onBlur = {(e)=>this.handleData(e,'id')}></input>
                <input type='password' placeholder='Password' onBlur = {(e)=>this.handleData(e,'pass')}></input>
                <button onClick = {this.handleLogin}>Login</button> 
                </div>);
        }
        else{
            e = (<div>
                <App />
                <div id = 'app-div-id'>
                    <button onClick = {this.handleLogout} id>Logout</button> 
                </div>
                </div>)
        }
        return e;
    };
}

export default Form
