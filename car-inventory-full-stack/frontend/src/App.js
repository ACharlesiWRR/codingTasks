import "./App.css";
import React, { useState } from "react";
import CarInfo from "./components/carInfo.js"; // Import the CarInfo component
import CarList from "./components/carList.js"; // Import the CarList component
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // State to manage the list of cars
  const [cars, setCars] = useState([]);

  // To add a new car to the list
  const addCar = (car) => {
    setCars([...cars, car]); // Update the cars state with the new car
  };

  return (
    <div className ="App">
      <div>
        <header className="App-header">
          <h1>My Car Inventory App</h1>
        </header>
      </div>
      <div className="App-body">
        <CarInfo onAdd={addCar} className="Car-info" />
        <CarList cars={cars} setCars={setCars} className="Car-list-edit-delete" />
      </div>
      <h2 className="h2-task23-part2-was-tricky">Enjoy using my fullstack app! :-S</h2>
    </div>
  );
}

export default App;
