import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import FU from './FetchRandomUser'

//conditional rendering of components::
import Form from './Form'
class Index extends React.Component{

    render(){
        let e = <div>
                    <h1>React Practice<hr id = 'h1-br'/></h1>
                    
                    <Form />
                </div>
        return e
    }
}
// ReactDOM.render(<Index/>,document.getElementById('root'));
ReactDOM.render(<FU />, document.getElementById('test'));
serviceWorker.unregister();
