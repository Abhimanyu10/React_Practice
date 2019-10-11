import React, { Component } from 'react'

export class FetchRandomUser extends Component {
    state = {
        welcome : '',
        loading: false,
        person: '',
        imag : ''
        
    }

    async componentDidMount() {
        this.setState({ welcome: 'HELLO THIS IS RANDOM USER FETCHING COMPONENT' });
    }

    async get() {
        
        const url = "https://api.randomuser.me/?results=5";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({
            // welcome:'',
            imag : data.results[0].picture.large,
            people: data.results[0].name.first,
            loading: false
        });
    } 

    gen = () => {
        this.get();
    }

    render() {
        if (this.state.loading) {
            return <div>
                Please wait ....
            </div>
        }
        
        return (
            <div>
                {this.state.welcome}<br/>
                <button onClick={this.gen}> Fetch </button>
                <div>{this.state.people}</div>
                <img id = 'asda'src = {this.state.imag}></img>
                
            </div>
        );
    }
}


export default FetchRandomUser
