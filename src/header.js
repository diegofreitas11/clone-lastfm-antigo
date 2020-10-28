import React from 'react';
import './index.css'; 

export default class Header extends React.Component{
    render(){
        return(
        <div className='header'>
            <h1>last.fm</h1>
            
            <input className='search' placeholder='Music Search' />
            
            <ul >
                <li>Music</li>
                <li>Listen</li>
                <li>Events</li>
                <li>Charts</li>
                <li>Originals</li>
            </ul>

            <div className='header-right'>
                <p className='join'>Join</p>
                <p className='login'>Login</p>
            </div>

        </div>
        )
    }
}