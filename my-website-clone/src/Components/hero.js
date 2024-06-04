import React from "react";
import { useState } from "react";
import "./hero.css";

export default function Hero() {
    const [textValue, setTextValue] = useState(""); // Initialize to hold text input

    function handleSubmit(event) {
      event.preventDefault(); // Prevents the full page reload
      console.log("Sign-up clicked with text: ", textValue); // Shows the current text value
    }

  return (
    <div className="hero-container">
      <h1>Climate Science for All</h1>
      <p>
        We believe the best way to build a net zero carbon world is together.
      </p>
      <p>
        Join our 14-day Intro to Climate email course. It compacts everything you
        need to know into 5-10 minute easy-to-read bursts. Have hope, make
        progress!
      </p>
      <form onSubmit={handleSubmit}>
        <input
          className="hero-input-field"
          type="text"
          placeholder="Email address"
        ></input>
        <input
          className="hero-input-field"
          type="text"
          placeholder="First name"
        ></input>
        <button type="submit">Sign-up for free!</button>
      </form>
    </div>
  );
}

// add event handler in here for the form submission
// onSubmit event? and using <form> or <input>??

// function handleSubmit(event){
//     event.preventDefault(); // prevents full reload
//     console.log("Sign-up clicked");
//     setTextValue(event); // shows text value in form
// }

// <form onSubmit={handleSubmit}>
//     <button type="submit"></button>
// </form>

// function signUpButton({ onClick }) {
//   return (
//     <div>
//       <button onClick={onClick}>Sign-up</button>
//     </div>
//   );
// }

// export default signUpButton;
