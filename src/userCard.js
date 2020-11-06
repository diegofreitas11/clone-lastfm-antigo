import React from 'react';
import './index.css';
import api from './services/api';

const API_KEY = '87388aa0974f3cc9ddf2e4adac39a39e';



class Avatar extends React.Component{
    render(){
        return(
            <img className='photo' src={this.props.src}/>
        )
    }
}

class UserCardInfo extends React.Component{


    render(){
        const info = this.props.userInfo;
        return(
            <div className='userCardInfo'>
                <p>
                    <strong>{info ? info.realname : null}</strong>, 99<br/>
                    <a href='#'>twitter.com/_diego_of</a> <br/>
                    <small className='grayDetail'>Last seen: 6 years ago</small>
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


export default class UserCard extends React.Component{
    state = {
        userInfo: null
    }

    componentDidMount(){
        this.loadData()
    }

    loadData = async () => {
        let user = window.location.href.split('/')[3] || 'fltngboy';
        var response = await api.get(`?api_key=${API_KEY}&method=user.getinfo&user=${user}&format=json`);

        this.setState({
            userInfo: response.data.user
        })
    }
    render(){
        return(
            <div className='userCard'>
                <Avatar src = { this.state.userInfo ? this.state.userInfo.image[2]['#text'] : null}/>
                <UserCardInfo userInfo = {this.state.userInfo} />
            </div>
        )
    }
}