import React from 'react';
// import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FormDisplay from './components/form';
import TableDisplay from './components/table';
import MapDisplay from './components/location';
import './components/style.css';
import Image from 'react-bootstrap/Image';
import WeatherData from './components/weatherdata';
import MovieData from './components/moviedata'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      weatherdata: [],
      weatherdescription: '',
      Mapimage: '',
      displaytable: '',
      location: {},
      displayname: '',
      Latitude: '',
      Longitude: '',

    }
  }

  ShowLocations = async (e) => {
    try {
      e.preventDefault();
      let result = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_YOUR_ACCESS_TOKEN}&q=${e.target.Explorer.value}&format=json`);
      let Weather = await axios.get(`${process.env.REACT_APP_API_LINK}weatherdata?city_name=${e.target.Explorer.value}`);
      let Movies = await axios.get(`${process.env.REACT_APP_API_LINK}movie?movieSearch=${e.target.Explorer.value}`)
      console.log(Movies.data);

      await this.setState({
        movies: Movies.data,
        weatherdata: Weather.data,
        displaytable: 1,
        location: result,
        displayname: result.data[0].display_name,
        Latitude: result.data[0].lat,
        Longitude: result.data[0].lon,
      })
    }
    catch (error) {
      <p>Error: wrong word Entered </p>
    }

    // console.log(this.state.location.data[0]);

  }

  render() {

    return (
      <>
        <FormDisplay ShowLocations={this.ShowLocations} />

        {this.state.displaytable && <TableDisplay displayname={this.state.displayname} Latitude={this.state.Latitude} Longitude={this.state.Longitude} />}
        <MapDisplay Mapimage={this.state.Mapimage} />
        {this.state.displaytable && <Image className='mapimage' alt='city' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_YOUR_ACCESS_TOKEN}&center=${this.state.Latitude},${this.state.Longitude}&zoom=12`} roundedCircle />}

        <WeatherData WeatherData={this.state.weatherdata} DisplayWeather={this.state.displaytable}/>
        <MovieData Displaymovie={this.state.displaytable} Allmovies={this.state.movies}/>
      </>
    )
  }
}
export default App;