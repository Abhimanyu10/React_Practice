import React from 'react';
import ReactDOM from 'react-dom';

class ImgSlider extends React.Component{
    state = {
        images : [
            "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2016&q=80",
            "https://images.unsplash.com/photo-1471922694854-ff1b63b20054?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80", 
            "https://images.unsplash.com/photo-1570216977217-83196ea82dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80"
        ],
        idx : 0,
        sz : 3
    };

    // ele =

    increment = ()=>{
        this.setState({
            idx : (this.state.idx + 1) % this.state.sz
        });
    }

    render(){
        return  (
            <div>
                Image Slider
                <div>
                    <img alt = 'click to change'src = {this.state.images[this.state.idx] } onClick = {this.increment}/>
                </div>
                {/* <button onClick = {this.increment}>-></button> */}
            </div>
        );
    }
    
}


export default ImgSlider;