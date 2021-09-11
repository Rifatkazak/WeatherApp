import { useState,useEffect} from 'react';
import './App.css';

import ContentContext from './context/ContentContext';
import Dropbox from './components/Dropbox';
import Content from './components/Content';
import { Provider } from 'react';




function Weather() {

  const cities = ["istanbul", "izmir", "ankara", "bursa", "denizli", "manisa"]
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
 

  const [weatherInfo , setWeatherInfo] = useState([]);

  const [city, setCity] = useState([]);
  
  

  const values = {city, setCity, cities, weatherInfo ,days }

  const API_KEY = "jIzOMHTYeUlklFWYvlu9Ceg6UsKbc4A0"
  // const LOCATION_KEY = { istanbul :"318251",
  //                         izmir :"318290" ,
  //                         ankara :"316938" ,
  //                         bursa : "317350", 
  //                         denizli : "317679", 
  //                         manisa : "319151" }
  // const LOCATION_KEY = "318251"

  //"http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}=${city}&alias=%C4%B0zmir"

  useEffect(  () => {
     fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}=${city}&alias=%C4%B0zmir`)
    .then(res => res.json())
    .catch(res => {setWeatherInfo(res.DailyForecasts.map((df) => {
      return {
        min : df.Temperature.Minimum.Value,
        max : df.Temperature.Maximum.Value,
       // icon : `https://developer.accuweather.com/sites/default/files/${df.Day.Icon<10 ? "0"`${df.Day.Icon}` : `${df.Day.Icon}` }-s.png`,
        weatherday : df.Date,
        weatherType : df.Day.IconPhrase
      }
    } ))});
  },[weatherInfo]);

  // useEffect(() => {
  //     console.log(weatherInfo)
  // }, [weatherInfo])
  
 

  return (
    <ContentContext.Provider value={values}>
       <Dropbox />
       <Content />
    </ContentContext.Provider>
    
  );
}

export default Weather;