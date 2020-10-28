import React from 'react';
import './index.css'; 

export default class UsernameBar extends React.Component{
    render(){
        return(
        <div className='username-bar'>
            <h1>{window.location.href.split('/')[3] || 'fltngboy'}</h1>
            <ul >
                <li><a href='#'>Library</a></li>
                <li><a>Friends</a></li>
                <li><a>Tracks</a></li>
                <li><a>Albums</a></li>
                <li><a>Charts</a></li>
                <li><a>Neighbours</a></li>
                <li><a>Now playing</a></li>
                <li><a>Events</a></li>
            </ul>
        </div>
        )
    }
}