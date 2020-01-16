import { SHOW_WEATHER } from './types';

export const showWeather = (city) => {
  return (dispatch) => {
   console.log("city " + city)
   const API_KEY = 'ef492176ad9936bf71e039bc27971569'
   const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
   const URL = API_URL + `?q=${city}&appid=${API_KEY}&units=metric`
   return fetch(URL)
    .then(res => res.json())
    .then(data => {
      if (data.cod === 200) {
        dispatch(showWeatherSuccess(data))
      }else{
        dispatch(showWeatherSuccess(data))
      }
    })
    .catch(err => {
      console.log(err);
    });
 
  };
};



export const showWeatherSuccess =  (data) => {
  console.log(data)
  return {
    type: SHOW_WEATHER,
    payload: {
      temperature: data.main.temp,
      description: data.weather[0].main
    }
  }
};