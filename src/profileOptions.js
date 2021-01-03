import React from 'react';
import './index.css';


class OptionsList extends React.Component{
    render(){
        return(
            <div className='floatLeft'>
                <ul>
                    <li><a href='#'>Add as friend</a></li>
                    <li><a href='#'>Send a message</a></li>
                    <li><a href='#'>Leave a shout</a></li>
                </ul>
            </div>
        )
    }
}

class Compatibility extends React.Component{
    render(){
        let user = window.location.href.split('/')[3]
        return(
            <div className='compatibility'>
                <p>Your musical compatibility with <strong>{user} </strong> 
                is <strong>UNKNOWN</strong></p>
                <span id='compatibilityBar'></span>
                <a>Compare your taste</a>
            </div>
        )
    }
}

export default class ProfileOptions extends React.Component{
    render(){
        return(
            <div className='profileOptions'>
                <OptionsList />
                <Compatibility />
            </div>
        )
    }
}