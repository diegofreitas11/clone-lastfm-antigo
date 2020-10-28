import React from 'react';
import './index.css';


class Tracks extends React.Component{
    render(){
        const tracks = this.props.tracks ? this.props.tracks.map((item) => (
            <li className='track'>
                <img 
                    src={item.image[0]['#text']}
                />
                <p>{item.artist['#text']} - {item.name}</p>
                <p id='time'>6 years ago</p>
            </li>
        )   
        ) : null
        return(
            <ul>
                {tracks}
            </ul>
        )
    }
}


export default class RecentScrobbles extends React.Component{
    render(){
        return(
            <div className='recentScrobbles'>
                <h2>Recently Listened Tracks</h2>
                <Tracks tracks={this.props.scrobbles}/>
                <a  className='seeMore' href='#'>See More</a>
            </div>
        )
    }
}