import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 

class Header extends React.Component{
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

class UsernameBar extends React.Component{
    render(){
        return(
        <div className='username-bar'>
            <h1>ThePaulBranco</h1>
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

class Avatar extends React.Component{
    render(){
        return(
            <img className='photo' src='https://i.pinimg.com/originals/a8/40/20/a84020f8d204974ffd0d064e99be8015.jpg'/>
        )
    }
}

class UserCardInfo extends React.Component{
    render(){
        return(
            <div className='userCardInfo'>
                <p>
                    <strong>Diego Freitas</strong>, 17, Male<br/>
                    <a href='#'>twitter.com/_diego_of</a> <br/>
                    <small className='grayDetail'>Last seen: 5 hours ago</small>
                </p>
                <p>
                    <strong>
                        <span className='count'>6</span>
                        <span className='count'>6</span>
                        <span className='count'>6</span>
                        <span className='count'>6</span>
                        <span className='count'>6</span>
                         plays</strong>
                    <small className='grayDetail'>  since 14 Sep 2011</small><br/>
                    <a href='#'>137 Loved Tracks</a> |<a href='#'> 26 Posts </a>| <a href='#'> 0 Playlists</a> | <a href='#'> 587 shouts </a>
                </p>
            </div>
        )
    }
}

class Page extends React.Component{
    render(){
        return(
            <div className='page'>
                <div className='leftCol'>
                    <div className='userCard'>
                        <Avatar />
                        <UserCardInfo />
                    </div>
                </div>
                <div className='rightCol'></div>
            </div>
        )
    }
}

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