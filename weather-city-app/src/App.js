import './App.css';
import React from "react";
import CityWeatherInput from "./components/input.js";


// Task 2 - weather-city-app
// create a React app that will display the current weather in a
// particular city using the Weather API
// will need to obtain an API key (pass in the clear via the URL OR via a variable in .env folder, with fetch())
// Allow the user to enter the name of a city in an input field
// the app should then return the weather data from the API
// and display it in a user-friendly way
// EXTRA: try using geolocation library to get the user's
// location and use the data to retrieve the local weather
// geolocation intro: https://dev.to/codebucks/how-to-get-user-s-location-in-react-js-1691

// components
// API Fetch in .env folder using API key
// INPUT - name of a city field 
// FETCH - wather in a city 
// OUTPUT - weather in a city 
// CLEANUP - to prevent leaks

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>City Weather App</h1>
      </header>
      <div className="App-body">
        <h2>Enter a city name to check the weather right now:</h2>
        <div className="input-city">
        <CityWeatherInput />
        </div>
        {/* <div className="output-weather">
        <Fetch />
        </div> */}
      </div>
    </div>
  );
}

export default App;
