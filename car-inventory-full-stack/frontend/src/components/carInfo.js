import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import Button from "react-bootstrap/Button";

const CarInfo = ({ onAdd }) => {
  // State to manage car form data
  const [car, setCar] = useState({
    make: "",
    model: "",
    registration: "",
    year: "",
    owner_name: "",
    owner_surname: "",
  });

  // State to track loading status during form submission
  const [loading, setLoading] = useState(false);

  // Handle input changes and update the car state
  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    if (loading) return; // Prevent submitting if already loading
    setLoading(true); // Set loading state to true
    try {
      // Make a POST request to add a new car
      const response = await axios.post("http://localhost:8000/api/cars", car);
      onAdd(response.data); // Call onAdd callback with the new car data
      // Reset the form fields
      setCar({
        make: "",
        model: "",
        registrationNumber: "",
        owner: "",
        year: "",
      });
      alert(`Car ${car.make, car.model} added successfully`); 
      // error handing
    } catch (err) {
      console.error({message: "error adding car", err: err.message});
      alert("Failed to add car");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Add a Car: </h2>
      <div className="form-group">
        <label htmlFor="make">Make: </label>
        <input
          className="form-input"
          name="make"
          value={car.make}
          onChange={handleChange}
          placeholder="Make"
          required // Make field required
        />
      </div>
      <div className="form-group">
        <label htmlFor="model">Model: </label>
        <input
          className="form-input"
          name="model"
          value={car.model}
          onChange={handleChange}
          placeholder="Model"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="registration">Reg: </label>
        <input
          className="form-input"
          name="registration"
          value={car.registration}
          onChange={handleChange}
          placeholder="Registration"
          required // Make field required
        />
      </div>
      <div className="form-group">
        <label htmlFor="year">Year: </label>
        <input
          className="form-input"
          name="year"
          type="number" // Set input type to number
          value={car.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner">Owner: </label>
        <input
          className="form-input"
          name="owner_name"
          value={car.owner_name}
          onChange={handleChange}
          placeholder="Owner First Name"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner">Owner: </label>
        <input
          className="form-input"
          name="owner_surname"
          value={car.owner_surname}
          onChange={handleChange}
          placeholder="Owner Surname"
          required
        />
      </div>
      <button
        // variant="primary"
        className="form-submit-button"
        type="submit"
        disabled={loading}
      >
        {loading ? "Adding..." : "Add Car"}{" "}
        {/* Change button text based on loading state */}
      </button>
    </form>
  );
};

export default CarInfo;