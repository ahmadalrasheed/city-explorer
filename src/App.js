import React from 'react';
// import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FormDisplay from './components/form';
import TableDisplay from './components/table';
import MapDisplay from './components/location';
import './components/style.css';
// import { NavItem } from 'react-bootstrap';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherdata:[],
      weatherdescription:'',
      Mapimage:'',
      displaytable:'',
      location: {},
      displayname:'',
      Latitude:'',
      Longitude:'',

    }
  }

  ShowLocations = async (e) => {
    try{
      e.preventDefault();
    let result = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_YOUR_ACCESS_TOKEN}&q=${e.target.Explorer.value}&format=json`);
    let Weather = await axios.get(`${process.env.REACT_APP_API_LINK}weatherdata?city_name=${e.target.Explorer.value}`);
    console.log(Weather);
    
    
    await this.setState({
      weatherdata:Weather.data,
      displaytable:1,
      location: result,
      displayname:result.data[0].display_name,
      Latitude:result.data[0].lat,
      Longitude:result.data[0].lon,

    })
    }
    catch(error){
      <p>Error: wrong word Entered </p>
    }
    
    // console.log(this.state.location.data[0]);
    
  }
  
  render() {
    
    return (
      <>
        <FormDisplay ShowLocations={this.ShowLocations} />
        
      {this.state.displaytable && <TableDisplay displayname={this.state.displayname} Latitude={this.state.Latitude} Longitude={this.state.Longitude} />}
      <MapDisplay Mapimage={this.state.Mapimage}/>

      {this.state.displaytable && <img alt='city' src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_YOUR_ACCESS_TOKEN}&center=${this.state.Latitude},${this.state.Longitude}&zoom=12`}/>}

      {typeof(this.state.weatherdata)==typeof([]) && this.state.weatherdata.map(item =>{
        return(
          <>
          {this.state.displaytable && <p>Date: {item.date}</p>}
          {this.state.displaytable && <p>Description : {item.description}</p>}
          {console.log(item)}
          {console.log(item.date)}
          
          </>
        )

        
      })}

      
      
      </>
    )
  }
}
export default App;