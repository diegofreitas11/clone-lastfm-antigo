import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import UsernameBar from './usernameBar';
import Header from './header';
import Page from './page';

class Main extends React.Component{    
    render(){   
        return(
            <div id='wrapper'>
                <Header />
                <UsernameBar />
                <Page />
            </div>
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));