import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

//conditional rendering of components::
import Form from './Form'
class Index extends React.Component{

    render(){
        let e = <div>
                    <h1>React Practice</h1>
                    <Form/>
                </div>
        return e
    }
}

ReactDOM.render(<Index/>,document.getElementById('root'));
serviceWorker.unregister();
