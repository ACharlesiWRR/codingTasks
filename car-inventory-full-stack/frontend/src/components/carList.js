import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import UpdateCar from "./updateCar"; // Import the form for updating a car
// import { updateCars } from "../backend/controllers/carControllers";
// import Button from "react-bootstrap/Button";

const CarList = () => {
  const [cars, setCars] = useState([]); // State to manage the list of cars
  const [selectOptions, setOptions] = useState("All"); // State to manage the filter options
  const [isEditing, setIsEditing] = useState(null); // State to manage editing car

  // Effect to fetch cars data from the server when the component starts or when the cars state changes
  useEffect(() => {
    const fetchCars = async () => {
      try {
        // Send a GET request to fetch cars data from the server
        const response = await axios.get("http://localhost:8000/api/cars");
        // Update the cars state with the fetched data
        setCars(response.data);
        // error handling
      } catch (error) {
        console.error({
          message: "Failed to fetch cars",
          error: error.message,
        });
      }
    };

    fetchCars(); // Call the fetchCars function when the component starts or when the cars state changes
  }, []);

  // Hhandle deleting a car
  const handleDelete = async (id) => {
    try {
      // Send a DELETE request to the server to delete the car by its ID
      await axios.delete(`http://localhost:8000/api/cars/${id}`);
      // Update the cars state by filtering out the deleted car
      setCars(cars.filter((car) => car._id !== id));
      // Display a success notification
      alert("Car Deleted successfully");
      // error handling
    } catch (err) {
      console.error({ message: "Failed to delete cars", err: err.message });
      // Display an error notification if the request fails
      alert(`Failed to Delete car ${(cars.model, cars.make)}`);
    }
  };

  //   Function to handle updating a car
    const handleUpdate = async (updatedCar) => {
      console.log("Received updatedCar:", updatedCar); 
      try {
        // Send a PUT request to the server to update the car
        const response = await axios.put(
          `http://localhost:8000/api/cars/${updatedCar._id}`,
          updatedCar
        );
        // Update the cars state by replacing the old car with the updated car
        setCars(
          cars.map((car) => (car._id === updatedCar._id ? response.data : car))
        );
        // Exit editing mode
        setIsEditing(null);
        // Display a success notification
        alert("Car Updated successfully");
      } catch (err) {
        console.error({ message: "Failed to update car", err: err.message });
        // Display an error notification if it fails
        alert(`Failed to Update car`);
      }
    };

  // Function to handle filtering cars based on select option
  const handleFilter = (event) => {
    // Update the selectOptions state with the selected option
    setOptions(event.target.value);
  };

  // Filter the cars data based on the selected option
  const filteredData =
    selectOptions === "All"
      ? cars // Show all cars if "All" option is selected
      : cars.filter((car) => car.year < new Date().getFullYear() - 5); // Show cars older than 5 years if "Older Cars" option is selected

  return (
    // Render the list of cars
    <div className="car-list-container">
      <h2 className="car-list-header">Car List</h2>
      {/* Dropdown menu for filtering cars */}
      <div className="car-list-filter">
        <label htmlFor="car-select">Filter Cars:</label>
        <select
          className="car-select"
          name="car-list"
          id="car-select"
          onChange={handleFilter}
        >
          <option value="All">All Cars</option>
          <option value="Older Cars">Cars older than 5 years</option>
        </select>
      </div>
      {/* Render individual car items */}
      <ul className="car-item-list">
        {filteredData.map((car) => (
          <li key={car._id}>
            {/* Conditional rendering based on whether the car item is in editing mode */}
            {isEditing === car._id ? (
              // Render the update car form if in editing mode
              <UpdateCar
                car={car}
                onUpdate={handleUpdate}
                onCancel={() => setIsEditing(null)}
              />
            ) : (
              // Render the car details and buttons if not in editing mode
              <>
                {/* Display car details */}
                <div>
                  {car.make} {car.model} - {car.registration} {car.year} (Owner:{" "}
                  {car.owner_name} {car.owner_surname})
                </div>
                {/* Buttons for editing and deleting the car */}
                <div>
                  {/* Button to delete the car */}
                  <button
                    className="deleting-button"
                    onClick={() => handleDelete(car._id)}
                  >
                    Delete
                  </button>
                  {/* Button to switch to editing mode */}
                  <button
                    className="editing-button"
                    onClick={() => setIsEditing(car._id)}
                  >
                    Edit
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
