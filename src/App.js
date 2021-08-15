import React from 'react';
// import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FormDisplay from './components/form';
import TableDisplay from './components/table';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      displayname:'',
      Latitude:'',
      Longitude:''
    }
  }

  ShowLocations = async (e) => {
    e.preventDefault();
    let result = await axios.get(`https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_YOUR_ACCESS_TOKEN}&q=${e.target.Explorer.value}&format=json`);
    await this.setState({
      location: result,
      displayname:result.data[0].display_name,
      Latitude:result.data[0].lat,
      Longitude:result.data[0].lon
    })
    console.log(this.state.location.data[0]);
    
    
  }
  
  render() {
    
    return (
      <>
        <FormDisplay ShowLocations={this.ShowLocations} />
        
      <TableDisplay displayname={this.state.displayname} Latitude={this.state.Latitude} Longitude={this.state.Longitude} />;
      </>
    )
  }
}
export default App;