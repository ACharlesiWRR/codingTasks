const models = require("../models/carModel"); // import car schema and model
const carInfo = require("../models/carModel");
// const carModel = Car;

// root test it's connected
const carsApp = (request, response) => {
  response.json({ message: "Welcome! Did you ask about cars?" });
};

//Create POST
const createCars = async (req, res) => {
  try {
    // Create a new carInfo with the request body data
    const newCar = new carInfo(req.body);
    // Save the new car instance to the DB
    const savedCar = await newCar.save();
    // Respond it has saved the car data
    res.status(201).json({ message: "Car saved successfully", savedCar});
    console.log(`Car ${savedCar.make, savedCar.model} saved successfully`)
  } catch (error) {
    // error handling
    res.status(500).json({ message: "Error creating car", error: error.message });
  }
};

// Update PUT by id
const updateCars = async (req, res) => {
  try {
    // Find the car by ID and update it with the request body data
    const updatedCar = await carInfo.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });
    // if no car found
    if (!updatedCar) {
        return res.status(404).json({ message: `car not found` });
    }
    // if found respond with the updated car data
    res.json({ message: "car updated successfully", updatedCar});
    console.log(`Car ${updatedCar.make, updatedCar.model} updated sucessfully`)
  } catch (err) {
    // If there's an error, respond with status 400 and the error message
    res.status(500).json({ message:"Car not updated", err: err.message });
  }
};

//Read GET by id
const readCars = async (req, res) => {
    try {
        const {id} = req.params; // retrieves id
        if(id) {
            const car = await carInfo.findById(id); // look for a single car
            if (!car) {
                res.status(404).json({message: "car not found"});
            }
            console.log("single car response", car); //log the response
            res.json(car); // return a car
        } else {
            const cars = await carInfo.find(); // look for all cars
            console.log("all cars response", cars);
            res.json(cars || []); // return the cars
        } 
    } catch (err) {
        res.status(500).json({ message: "Error getting cars", err: err.message});
    }
};

// Delete by id
const deleteCars = async (req, res) => {
  try {
    // Find the car by ID and delete it
    const deletedCar = await carInfo.findByIdAndDelete(req.params.id);
    // error handling
    if (!deletedCar) {
        return res.status(404).json({ message: `car not found` });
    }
    // Respond with a success message
    res.json({ message: "Car deleted successfully" });
  } catch (error) {
    // If there's an error, respond with status 400 (Bad Request) and the error message
    res.status(500).json({ message: "Error deleting car", err: err.message });
  }
};

// List all cars over 5 years old
const listOldCars = async (req, res) => {
  try {
    // Find cars where the year is less than the current year minus 5
    const cars = await carInfo.find(
      { year: { $lt: new Date().getFullYear() - 5 } },
      "model make registration owner_name owner_surname" // Select specific fields to return
    );
    // Respond with the list of older cars
    res.json(cars);
  } catch (err) {
    // If there's an error respond with error message
    res.status(500).json({ message: "Error getting old cars", err: err.message });
  }
};

// const listOldCars = async (req, res) => {
//   try {
//     const currentYear = new Date().getFullYear();
//     const oldCars = await carInfo.find({ year: { $lt: currentYear - 5 } });
//     res.json(oldCars);
//   } catch (err) {
//     res.status(500).json({ message: "Error getting old cars", err: err.message });
//   }
// };

// list all cars - not done
const listAllCars = async (req, res) => {
  try {
    // Find and list all cars
    const cars = await carInfo.find();
    res.json(cars);
  } catch (err) {
    // If there's an error respond with error message
    res.status(500).json({ message: "Error getting cars list", err: err.message });
  }
};

module.exports = {
  carsApp,
  createCars,
  readCars,
  updateCars,
  deleteCars,
//   readCarByRegistration,
//   updateCarByRegistration,
//   deleteCarByRegistration,
  listOldCars,
  listAllCars,
};
