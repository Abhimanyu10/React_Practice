import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {
            count : props.init
        };
    }

    decr = ()=>{
        this.setState({
            count : this.state.count + 1
        });
    }
     
    incr = ()=>{
        this.setState({
            count : this.state.count - 1
        });
    } 
    

    render() {
        return ( 
            <div>
                <div><label>Count : {this.state.count}</label></div>     
                <p>
                    This is a counter component .<br/>
                </p>
                <button onClick = {this.incr}>Increment</button>
                <button onClick = {this.decr}>Decrement</button>
            </div>
        )
    }
}
