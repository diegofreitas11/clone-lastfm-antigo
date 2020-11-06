import React from 'react';
import './index.css';
import api from './services/api';


const periods = [
    {value: '7day', name:'Last 7 Days'}, 
    {value: '1month', name:'Last month'}, 
    {value: '3month', name:'Last 3 months'}, 
    {value: '6month', name:'Last 6 months'}, 
    {value: '12month', name:'Last 12 months'}, 
    {value: 'overall', name: 'Overall'}
]

const API_KEY = '87388aa0974f3cc9ddf2e4adac39a39e';

export default class Chart extends React.Component{
    state = {
        selectedPeriod: periods[5],
        charts:{'7day': null, '1month': null, '3month': null,
        '6month': null, '12month': null, 'overall': null},
        isTrackChart: false
    }


    componentDidUpdate(prevProps, prevState){
        if(prevProps.charts != this.props.charts){
            let isTrackChart = this.props.charts[0].duration ? true : false
            let charts = this.state.charts;
            charts.overall = this.props.charts

            this.setState({
                charts: charts,
                isTrackChart: isTrackChart
            })
        }

        if(prevState.selectedPeriod != this.state.selectedPeriod){
            this.loadData();
        }
    }

    loadData = async () => {
        let period = this.state.selectedPeriod.value;
        if(this.state.charts[period] === null){
            let user = window.location.href.split('/')[3] || 'fltngboy'
            let chartType = this.state.isTrackChart ? 'track' : 'artist'
            let response = await api.get(`?api_key=${API_KEY}&method=user.gettop${chartType}s&username=${user}&limit=10&period=${period}&format=json`);
        
            let charts = this.state.charts;
            charts[period] = this.state.isTrackChart ? 
            response.data.toptracks.track: response.data.topartists.artist;

            this.setState({
                charts: charts
            })
        }    
    }

    changeTab = async (item) => {
        this.setState({
            selectedPeriod: item
        })
    }

    render(){
        const period = this.state.selectedPeriod.value;
        const topCount = this.state.charts[period] ? this.state.charts[period][0].playcount : null;
        
        //console.log(this.state);
        //console.log(this.props);
        const chartRows = this.state.charts[period] ? this.state.charts[period].map((item, index) => (
            <tr style={{backgroundColor: index%2===0 ? '#D8D8D8' : '#fff'}}>
                <td className='position'>{index+1}</td>
                <td className='subject'> {this.state.isTrackChart ? 
                    `${item.artist.name} - ${item.name}` : item.name}</td>
                <td className='chartBarCell'>
                    <div className='chartBar' style={{width: `${(item.playcount/topCount)*100}%`}}>
                        <a href='#'>{item.playcount}</a>
                    </div>
                </td>
            </tr>
        )) : null


        const tabItens = periods.map((item) => {
            let comp = this.state.selectedPeriod === item ?
            <li id='selected'>{item.name}</li> :
            <li onClick={() => this.changeTab(item)} style={{cursor: 'pointer'}}>{item.name}</li>
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
