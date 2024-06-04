const express = require("express");
const controllers = require("../controllers/carControllers"); // import controllers
const routes = express.Router(); // connect a Router

// for the root
routes.get("/", controllers.carsApp);

// for the POST create a car
routes.post("/cars", controllers.createCars);

// for the read GET a car by id
routes.get("/cars/:id", controllers.readCars);

// for read GEt a car by the registration
// routes.get("/cars/registration/:registration", controllers.readCarByRegistration);

// for update PUT a car by id
routes.put("/cars/:id", controllers.updateCars);

// for updating PUT by registration
// routes.put("/cars/registration/:registration", controllers.updateCarByRegistration);

// for deleting a car by id
routes.delete("/cars/:id", controllers.deleteCars);

// for deleting a car by registration
// routes.delete("/cars/registration/:registration", controllers.deleteCarByRegistration);

// add route for listing all cars
routes.get("/cars", controllers.listAllCars);

// Add route for listing old cars
routes.get("/old-cars", controllers.listOldCars);

// export
module.exports = routes;

