const mongoose = require("mongoose"); // import mongoose

// create car schema structure of documents
const carSchema = mongoose.Schema({
// informaiton fields about the cars
  make: { type: String },
  model: { type: String },
  year: { type: Number },
  colour: { type: String},
  registration: { type: String },
  owner_name: { type: String },
  owner_surname: { type: String},
});

// create a mongoose model to interact with the MongoDB
const carInfo = mongoose.model("Car", carSchema);

// export
module.exports = carInfo;

