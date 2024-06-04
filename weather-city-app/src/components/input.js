import React from "react";
import { useState, useRef , useEffect } from "react";
import Fetch from "./fetch.js";

// this feels like i made it much harder than it needed to be???

export default function CityWeatherInput() {
  const [city, setCity] = useState("");
  // const [fetchTrigger, setFetchTrigger] = useState(false); // default not to fetch until button submission
  const [fetchKey, setFetchKey] = useState(0); // trying a counter to trigger a fetch, instead of a boolean
  const [shouldFetch, setShouldFetch] = useState(false); // state to control the fetching (it was triggering before button press)
  const inputRef = useRef(null);

    useEffect(() => {
    inputRef.current.focus(); // focuses on city field
  }, []);

  // to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (city.trim())
      // only if there is a name
      setShouldFetch(true);
      setFetchKey((prevKey) => prevKey + 1); // incrememnting key to trigger
      console.log("Form submitted, triggering fetch with new key", fetchKey + 1);
    // console.log("handleSubmit called, setting fetchTrigger to true");
    // setFetchTrigger(true);
  }

  // event handler on change
  const handleCityChange = (e) => {
    setCity(e.target.value); 
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          value={city}
          className="input-field"
          onChange={handleCityChange}
          placeholder="Enter city"
        ></input>
        <button type="submit">Get Weather</button>
      </form>
      {shouldFetch && <Fetch key={fetchKey} city={city} /> }
    </div>
  );

}