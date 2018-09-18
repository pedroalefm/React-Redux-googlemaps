import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart.js'
import GoogleMap from '../components/google_map.js'

class WeatherList extends Component {
    renderWeather(cityData) {
        return (
            <tr>
                <td>{cityData.city.name}</td>
            </tr>
        )
    }
    render(){
        return (
            <table className = "table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>

                    </tr>
                </thead>
                <tbody>
                    {

                        this.props.weather.map((cityData)=>{
                            const name = cityData.city.name;
                            const temps = cityData.list.map(temperaturies=>temperaturies.main.temp);
                            const press = cityData.list.map(pressures => pressures.main.pressure);
                            const humidity = cityData.list.map(himidities => himidities.main.humidity)
                            const lon = cityData.city.coord.lon;
                            const lat = cityData.city.coord.lat;
                            console.log(cityData.city.coord.lat)

                            return(
                                <tr key = {name}>
                                    <td><GoogleMap lon = {lon} lat = {lat} /></td>
                                    <Chart data = {temps} color = 'red' />
                                    <Chart data = {press} color = 'orange' />
                                    <Chart data = {humidity} color = 'green' />

                                </tr>
                                
                            )
                        }) 
                    }
                </tbody>
            </table>
        )
    }
}
const mapStateToProps = (state)=>{
    return {weather: state.weather}
}
export default connect(mapStateToProps)(WeatherList)