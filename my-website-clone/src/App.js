// cd my-website-clone

import React from "react";
import "./App.css";
import Header from "./Components/header.js";
import Hero from "./Components/hero.js";
import Body from "./Components/body.js";
import Footer from "./Components/footer.js";

// import SocialProof from "./Components/socialProof.js";

function App() {
  return (
    <div className="App">
      <Header className="App-header" />
      <Hero className="App-hero" />
      <Body className="App-body" />

      {/* pass props to socialProof */}
      {/* <SocialProof name="John" quote="placeholdder" />
      <SocialProof name="John" quote="placeholdder" />
      <SocialProof name="John" quote="placeholdder" /> */}

      <Footer className="App-footer" />
    </div>
  );
}

export default App;

