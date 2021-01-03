import React from 'react';
import './index.css';

class Subtitle extends React.Component{
    render(){
        return(
            <div className='subtitle'> 
                <div className='libraryInfos'>
                    <p><strong>1500 Artists in total</strong></p>
                    <p className='grayDetail'>Showing: Last 7 Days</p>
                </div>
                <div id='libraryPlayButton'>
                    Play {this.props.user}'s library
                </div>
            </div>
        )
    }
}

class LibraryGrid extends React.Component{
    render(){
        const firstRow = this.props.artists ? 
        this.props.artists.filter((item, index) => index < 4 ).map((item) => (
            <div className='artistGridCard'>
                <img src={item.image[2]['#text']}/>
                <p>{item.name} <a>({item.playcount} plays)</a></p>
            </div>
        )) : null

        const secondRow = this.props.artists ? 
        this.props.artists.filter((item, index) => index >= 4 && index < 8).map((item) => (
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

export default class Library extends React.Component{
    render(){
        return(
            <div className='library'>
                <h2>{this.props.user}'s library</h2>
                <Subtitle
                    user={this.props.user}
                />
                <LibraryGrid artists={this.props.artists}/>
                <a  className='seeMore' href='#'>See More</a>
            </div> 
        )
    }
}