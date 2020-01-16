import React from 'react';
import { connect } from 'react-redux'
import SearchBar from 'components/SearchBar'
import WheatherDetails from 'components/WheatherDetails';
import { showWeather } from 'actions'

class SeachEngine extends React.Component {
 
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      details: {
        temperature: '',
        description: '',
      },
      error: false,
      loading: true,
    }
  }
 setWeather = () => {
   const city = this.state.value;
   const API_KEY = 'ef492176ad9936bf71e039bc27971569'
   const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
   const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`
   this.setState({
    details: {},
     loading: true,
     error: false
   }, () => {
     //callback of set state function
    fetch(URL)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        this.setState({
          details: {
            temperature: data.main.temp,
            description: data.weather[0].main
          },
          loading: false
        });
      }else{
        throw data.cod
      }
    })
    .catch(err => {
      console.log(err);
      this.setState({
        loading: false,
        error: true
      });
    }); 
   });
 } 

 componentDidMount() {
   //this.setWeather();
 }
 handleChange = (event) => {
  this.setState({value: event.target.value});
}

handleSubmit = (event)  => {
  this.setState({value: this.state.value}, () => {
    this.setWeather()
  });
  //this.setWeather();
  event.preventDefault();
}

setImportantCity = (e) => {
  this.props.dispatch(showWeather(e.target.innerHTML))
}

  
 render () {
   const {value} = this.state
   const {details} = this.props

   return (
    <div>
      <SearchBar value={value} setWeather={this.setWeather} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
      <WheatherDetails details={details}/>
      <p>Important Cities</p>
      <button onClick={(e) => this.setImportantCity(e)}>New York</button>
      <button onClick={(e) => this.setImportantCity(e)}>Paris, France</button>
    </div>
    );
  }
} 
const mapStateToProps = state => ({
  details: state.details
})

export default connect(mapStateToProps)(SeachEngine);