import React from 'react';
import ImgSlider from './ImgSlider';
import Counter from './Counter';
class App extends React.Component{

	state = {
		visible : true
	};

	handleEvent = ()=>{
		this.setState({
			visible : this.state.visible^true
		})
	}

	render(){
		const buttonText = this.state.visible ? "Hide" : "Show" ;
		const slider = this.state.visible ? (<div><ImgSlider /></div>) : (<Counter init = {0}/>) ;
		let e = (<div id = 'app-div-id'>
					{slider}
					<button onClick = {this.handleEvent}>{buttonText}</button>	
				</div>);
		
		return e; 
	}
}

export default App;
