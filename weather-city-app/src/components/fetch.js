import React, { useState , useEffect } from 'react';

// this feels like i made it much harder than it needed to be???

export default function Fetch ({city , setFetchTrigger}) {
    let [weather, setWeather] = useState(null);
    console.log(
      `http://api.weatherapi.com/v1/current.json?q=london&key=${process.env.REACT_APP_WEATHER_API_KEY}`
    );
    console.log("Fetch component rendered");

// sepatated out API fetch function as it was making a lot of API calls when include in the useEffect block / prior to adding a button it was firing on every keystroke
    let fetchWeatherData = async () => {
        try {
            const response = await fetch(`http://api.weatherapi.com/v1/current.json?q=${city}&key=${process.env.REACT_APP_WEATHER_API_KEY}`);
                if (!response.ok) throw new Error(`Failed to fetch weather data`);
                const data = await response.json();
                console.log(data);
                setWeather((prevWeather)=> {
                    console.log(`weather state before update:`, prevWeather); // log prev state before returning
                    return data;
                })
                console.log(`Data fetched:`, data); // logging fetched data for debugging
        } catch (error) {
            console.error("Failed to fetch:", error.message);
            setWeather(null); // clearing if failed
        }
    }

    console.log("weather state:", weather);

    useEffect(() => {
        if (city) {
        // Ensure city is not empty
        fetchWeatherData();
        }
    }, [city]); // only refresh the effect if city changes


    // useEffect(() => {
    //     fetchWeatherData().then(() => setFetchTrigger(false)); //reset the trigger for next fetch only after it's set
    // }, [city, setFetchTrigger]);

    // useEffect(() => {
    //     fetchWeatherData();
    //     setFetchTrigger(false); //reset the trigger for next fetch
    // }, [city, setFetchTrigger]);

    if (
      !weather ||
      !weather.current ||
      !weather.current.condition ||
      !weather.current.temp_c ||
      !weather.current.feelslike_c ||
      !weather.current.wind_mph ||
      !weather.current.wind_dir ||
      !weather.current.pressure_mb ||
      !weather.current.humidity ||
      !weather.current.vis_miles
    ) {
      console.error(`No weather was returned from the API`);
      return (
        <div className="failed-fetch">
          <p>No weather data available. Please try again.</p>
        </div>
      );
    } else {

      return (
        <div>
          {weather &&
          weather.current &&
          weather.current.condition &&
          weather.current.temp_c &&
          weather.current.feelslike_c &&
          weather.current.wind_mph &&
          weather.current.wind_dir &&
          weather.current.pressure_mb &&
          weather.current.humidity &&
          weather.current.vis_miles ? (
            <div className="output-weather">
              <p>The Weather in {city} is:</p>
              <p>It's {weather.current.condition.text} skies</p>
              <p>{weather.current.temp_c} degrees C</p>
              <p>Feels Like {weather.current.feelslike_c} degrees C</p>
              <p>Wind Speed: {weather.current.wind_mph}mph</p>
              <p>Wind Direction: {weather.current.wind_dir}</p>
              <p>Pressure: {weather.current.pressure_mb} millibars</p>
              <p>Humidity: {weather.current.humidity}%</p>
              <p>Visibility: {weather.current.vis_miles} miles</p>
            </div>
          ) : (
            <div className="failed-fetch">
              <p>No weather data available. Please try again.</p>
            </div>
          )}
        </div>
      );
    }  
}