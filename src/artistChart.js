import React from 'react';
import './index.css';


const periods = ['Last 7 Days', 'Last month', 'Last 3 months', 'Last 6 months', 
                'Last 12 months', 'Overall']

export default class ArtistChart extends React.Component{
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
