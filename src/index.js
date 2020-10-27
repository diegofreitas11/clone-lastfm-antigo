import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import Axios from 'axios';

const API_KEY = '87388aa0974f3cc9ddf2e4adac39a39e';


var artists;

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
        return(
            <div className='compatibility'>
                <p>Your musical compatibility with <strong>ThePaulBranco </strong> 
                is <strong>UNKNOWN</strong></p>
                <span id='compatibilityBar'></span>
                <a>Compare your taste</a>
            </div>
        )
    }
}

class Tracks extends React.Component{
    render(){
        const tracks = [{song: 'Vá se virar', artist: 'Ratos de Porão', 
                    src: 'https://lastfm.freetls.fastly.net/i/u/770x0/66f3fb0d842cc37a9c3194ce1c0ebb51.webp#66f3fb0d842cc37a9c3194ce1c0ebb51'},
                    {song: 'Bebete Vambora', artist: 'Jorge Ben', 
                    src: 'https://lastfm.freetls.fastly.net/i/u/770x0/84a725d27811406398b86906a233fccc.webp#84a725d27811406398b86906a233fccc'},
                    {song: 'Vent', artist: 'Snapcase', 
                    src: 'https://lastfm.freetls.fastly.net/i/u/770x0/bee7697f6528440bbc351fa244efd083.webp#bee7697f6528440bbc351fa244efd083'},
                    {song: 'Flor de Maracuja', artist: 'Gal Costa', 
                    src: 'https://lastfm.freetls.fastly.net/i/u/770x0/ae7fb548d12db0389e8aff406cd10969.webp#ae7fb548d12db0389e8aff406cd10969'},
                    {song: 'Empty Words', artist: 'Death', 
                    src: 'https://lastfm.freetls.fastly.net/i/u/770x0/6b95c58c6d214b98abfc12a808dab1ae.webp#6b95c58c6d214b98abfc12a808dab1ae'}]
                    .map((item) => 
                        (
                            <li className='track'>
                                <img 
                                    src={item.src}
                                />
                                <p>{item.artist} - {item.song}</p>
                                <p id='time'>6 years ago</p>
                            </li>
                        )   
                    )
        return(
            <ul>
                {tracks}
            </ul>
        )
    }
}


class Subtitle extends React.Component{
    render(){
        return(
            <div className='subtitle'> 
                <div className='libraryInfos'>
                    <p><strong>1500 Artists in total</strong></p>
                    <p className='grayDetail'>Showing: Last 7 Days</p>
                </div>
                <div id='libraryPlayButton'>
                    Play ThePaulBranco's library
                </div>
            </div>
        )
    }
}

class LibraryGrid extends React.Component{
    

    render(){
        const firstRow = this.props.artists ? this.props.artists.filter((item, index) => index < 4 )
                            .map((item) => (
                                <div className='artistGridCard'>
                                    <img src={item.image[2]['#text']}/>
                                    <p>{item.name} <a>({item.playcount} plays)</a></p>
                                </div>
                            )) : null

        const secondRow = this.props.artists ? this.props.artists.filter((item, index) => index >= 4 )
                            .map((item) => (
                                <div className='artistGridCard'>
                                    <img src={item.image[2]['#text']}/>
                                    <p>{item.name} <a>({item.playcount} plays)</a></p>
                                </div>
                            )) : null
        return(
            <div className='libraryGrid'>
                <div className='gridRow'>
                    {firstRow}
                </div>
                <div className='gridRow'>
                    {secondRow}    
                </div>
            </div>
        )
    }
}


////////////////////////////////////////

class UserCard extends React.Component{
    render(){
        return(
            <div className='userCard'>
                <Avatar />
                <UserCardInfo />
            </div>
        )
    }
}

class ProfileOptions extends React.Component{
    render(){
        return(
            <div className='profileOptions'>
                <OptionsList />
                <Compatibility />
            </div>
        )
    }
}

class RecentScrobbles extends React.Component{
    render(){
        return(
            <div className='recentScrobbles'>
                <h2>Recently Listened Tracks</h2>
                <Tracks />
                <a  className='seeMore' href='#'>See More</a>
            </div>
        )
    }
}

class Library extends React.Component{
    render(){
        return(
            <div className='library'>
                <h2>ThePaulBranco's library</h2>
                <Subtitle/>
                <LibraryGrid artists={this.props.artists}/>
                <a  className='seeMore' href='#'>See More</a>
            </div> 
        )
    }
}


const periods = ['Last 7 Days', 'Last month', 'Last 3 months', 'Last 6 months', 
                'Last 12 months', 'Overall']

class ArtistChart extends React.Component{
    state = {
        selectedPeriod: 'Overall'
    }

    changeTab = (item) => {
        this.setState({
            selectedPeriod: item
        })
    }

    render(){
        const topCount = this.props.artists ? this.props.artists[0].playcount : null;
        console.log(topCount);
        const chartRows = this.props.artists ? this.props.artists.map((item, index) => (
            <tr style={{backgroundColor: index%2==0 ? '#D8D8D8' : '#fff'}}>
                <td className='position'>{index+1}</td>
                <td className='subject'> {item.name}</td>
                <td className='chartBarCell'>
                    <div className='chartBar' style={{width: `${(item.playcount/topCount)*100}%`}}>
                        <a href='#'>{item.playcount}</a>
                    </div>
                </td>
            </tr>
        )) : null


        const tabItens = periods.map((item) => {
            let comp = this.state.selectedPeriod == item ?
            <li id='selected'>{item}</li>:
            <li onClick={() => this.changeTab(item)} style={{cursor: 'pointer'}}>{item}</li>
            return comp;
        })

        return(
            <div className='artistChart'>
                <h2>Top Artists</h2>
                <div className='tabs'>
                <ul>
                    {tabItens}
                </ul>
                </div>
                <div className='chart'>
                    <table>
                        <tbody>
                            {chartRows}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


class Page extends React.Component{
    state = {
        artists: null
    }
    
    componentDidMount(){
        this.loadData();
    }

    loadData = async () => {
        var response = await Axios.get(`http://ws.audioscrobbler.com/2.0/?method=user.gettopartists&username=fltngboy&api_key=${API_KEY}&limit=8&format=json`)
        
        this.setState({
            artists: response.data.topartists.artist
        })
        console.log(this.state.artists[0].image[0]);
    }

    render(){
        return(
            <div className='page'>
                <div className='leftCol'>
                    <UserCard />
                    <ProfileOptions />
                    <RecentScrobbles />
                    <Library artists={this.state.artists}/>
                    <ArtistChart artists={this.state.artists}/>
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