// Packages
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
const { DB_PASS } = process.env;

// Define express app
const app = express();

// Set port
const PORT = process.env.PORT || 4000;

// Connect to database
mongoose
  .connect(
    `mongodb://lofiapi:${DB_PASS}@lofiapi.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@lofiapi@`,
    { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Database is connected");
  })
  .catch((err) => {
    console.log({ database_error: err });
  });

// Set cors
app.use(cors());

// configure body parser
// Gets the json data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// custom http logging
app.use(morgan("dev"));

// Define static uploads folder
app.use("/uploads", express.static("uploads"));

// Test Route
app.get("/", (req, res) => {
  res.json("Api connection: updated response");
});

// Define api routes
const musicRoutes = require("./api/routes/music");
app.use("/music", musicRoutes);

// listen for requests
app.listen(PORT, () => {
  console.log(`Server is Running on port: ${PORT}`);
});
