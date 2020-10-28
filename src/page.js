import React from 'react';
import './index.css';
import UserCard from './userCard';
import api from './services/api';
import ProfileOptions from './profileOptions';
import RecentScrobbles from './recentScrobbles';
import Library from './library';
import ArtistChart from './artistChart';

const API_KEY = '87388aa0974f3cc9ddf2e4adac39a39e';


export default class Page extends React.Component{
    state = {
        artists: null,
        recentscrobbles: null
    }
    
    componentDidMount(){
        console.log()
        this.loadData();
    }

    loadData = async () => {
        let user = window.location.href.split('/')[3] || 'fltngboy';
        var responseArtists = await api.get(`?api_key=${API_KEY}&method=user.gettopartists&username=${user}&limit=8&format=json`);
        var responseTracks = await api.get(`?api_key=${API_KEY}&method=user.getrecenttracks&username=${user}&limit=4&format=json`);
        this.setState({
            artists: responseArtists.data.topartists.artist,
            recentscrobbles: responseTracks.data.recenttracks.track
        })
        console.log(responseTracks.data.recenttracks.track);
    }

    render(){
        return(
            <div className='page'>
                <div className='leftCol'>
                    <UserCard />
                    <ProfileOptions />
                    <RecentScrobbles scrobbles={this.state.recentscrobbles}/>
                    <Library artists={this.state.artists}/>
                    <ArtistChart artists={this.state.artists}/>
                </div>
                <div className='rightCol'></div>
            </div>
        )
    }
}