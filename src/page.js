import React from 'react';
import './index.css';
import UserCard from './userCard';
import api from './services/api';
import ProfileOptions from './profileOptions';
import RecentScrobbles from './recentScrobbles';
import Library from './library';
import Chart from './chart';

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
        let topArtistsResponse = await api.get(`?api_key=${API_KEY}&method=user.gettopartists&username=${user}&limit=10&format=json`);
        let topTracksResponse = await api.get(`?api_key=${API_KEY}&method=user.gettoptracks&username=${user}&limit=10&format=json`)
        let recentTracksResponse = await api.get(`?api_key=${API_KEY}&method=user.getrecenttracks&username=${user}&limit=4&format=json`);
        console.log(topTracksResponse.data);

        this.setState({
            artists: topArtistsResponse.data.topartists.artist,
            tracks: topTracksResponse.data.toptracks.track,
            recentscrobbles: recentTracksResponse.data.recenttracks.track
        })
        //console.log(responseTracks.data.recenttracks.track);
    }

    render(){
        return(
            <div className='page'>
                <div className='leftCol'>
                    <UserCard />
                    <ProfileOptions />
                    <RecentScrobbles scrobbles={this.state.recentscrobbles}/>
                    <Library artists={this.state.artists}/>
                    <Chart charts={this.state.artists}/>
                    <Chart charts={this.state.tracks}/>
                </div>
                <div className='rightCol'></div>
            </div>
        )
    }
}