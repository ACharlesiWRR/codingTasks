const express = require("express"); // express import
const mongoose = require("mongoose"); //mongoose import
const routes = require("./routes/routes"); // import routing
const cors = require("cors"); //import cors for resource sharing FE/BE
const corsOptions = {origin: "http://localhost:3000", optionsSuccessStatus: 200,};
const PORT = process.env.PORT || 8000; // store port as a var

// initialise App
const app = express();
app.use(express.json());

//CORs for cross-origin resource sharing
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); //wildcard route handler

// define a route for the frontend to retrieve info
app.get('/api', (req,res) => { // api endpoint
    const data = {message: 'backend hello there'}; //package to send back to FE client
    res.json(data);
}); 

// Use the car routes
// app.use('/cars', routes);

// Use the car routes
app.use('/api', routes);

//MongoDB Connection
const url =
  "mongodb+srv://<insertUserNameHere>:<insertPasswordHere>.bwdenxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

// connect to mongoose
mongoose
  .connect(url, clientOptions)
  .then(() => {
    console.log("Connection to mongodb done successfully...");
  })
  .catch((error) => {
    console.log("Error connecting to mongodb", error);
    // process.exit(1); // stop server if no connection
  });

//Nodejs and Express Server
// app.use("/", routes.routes);
app.listen(PORT, () => {
  console.log(`Backend server is running on Port${PORT} at http://localhost:8000`);
});
