import React, { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
// import Button from "react-bootstrap/Button";

const UpdateCar = ({ car, onUpdate, onCancel }) => {
  // State to manage edited car data and loading
  const [editedCar, setEditedCar] = useState({ ...car });
  const [loading, setLoading] = useState(false); // State to track loading status

  // Function to handle changes in form inputs
  const handleChange = (event) => {
    setEditedCar({ ...editedCar, [event.target.name]: event.target.value });
  };

  // Function to handle form submission for updating car
  const handleUpdate = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    if (loading) return; // Prevent submitting if already loading
    setLoading(true); // Set loading state to true
    console.log("sumitting update for:", editedCar); // checking
    try {
      // Send a PUT request to update the car data on the server
      const response = await axios.put(
        `http://localhost:8000/api/cars/${editedCar._id}`,
        editedCar
      );
      // onUpdate function passed from the parent component with the updated car data
      onUpdate(response.data);
      // onCancel function passed from the parent component to exit editing mode
      onCancel();
      // Display a success message
      alert("Car updated successfully!");
      //error handling
    } catch (error) {
      console.error({message: "error handling car update", error});
      alert("Failed to update car");
    } finally {
      setLoading(false); // Reset loading state after form submission completes
    }
  };

  return (
    // Form for updating car details
    <form className="form-container" onSubmit={handleUpdate}>
      {/* Input field for updating car make */}
      <div className="form-group">
        <label htmlFor="make">Make: </label>
        <input
          name="make"
          value={editedCar.make}
          onChange={handleChange}
          placeholder="Make"
          required
        />
      </div>
      {/* Input field for updating car model */}
      <div className="form-group">
        <label htmlFor="model">Model: </label>
        <input
          name="model"
          value={editedCar.model}
          onChange={handleChange}
          placeholder="Model"
          required
        />
      </div>
      {/* Input field for updating car registration number */}
      <div className="form-group">
        <label htmlFor="registration">Registration: </label>
        <input
          name="registration"
          value={editedCar.registration}
          onChange={handleChange}
          placeholder="Registration"
          required
        />
      </div>
      {/* Input field for updating car year */}
      <div className="form-group">
        <label htmlFor="year">Year: </label>
        <input
          name="year"
          type="number" // Set input type to number
          value={editedCar.year}
          onChange={handleChange}
          placeholder="Year"
          required
        />
      </div>
      {/* Input field for updating car owner */}
      <div className="form-group">
        <label htmlFor="owner_name">Owner firstname: </label>
        <input
          name="owner_name"
          value={editedCar.owner_name}
          onChange={handleChange}
          placeholder="Owner firstname"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="owner_surname">Owner surname: </label>
        <input
          name="owner_surname"
          value={editedCar.owner_surname}
          onChange={handleChange}
          placeholder="Owner surname"
          required
        />
      </div>
      {/* Buttons for saving changes and canceling */}
      <div className="form-group">
        {/* Button to save changes */}
        <button
          className="save-button"
          type="submit"
          disabled={loading} // Disable button during loading
        >
          {loading ? "Saving..." : "Save"}{" "}
          {/* Change button text based on loading state */}
        </button>
        {/* Button to cancel editing */}
        <button
          className="cancel-button"
          type="button"
          onClick={onCancel} // Call onCancel function to exit editing mode
          disabled={loading} // Disable button during loading
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default UpdateCar;
