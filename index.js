// app.js

const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection URI
const mongoURI =
  "mongodb+srv://ajayahir:Ajay3398@cluster.vy3znto.mongodb.net/test?retryWrites=true&w=majority";

// Connect to MongoDB
MongoClient.connect(
  mongoURI,
  // { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
      return;
    }

    console.log("Connected to MongoDB");

    // Set up your routes or other logic here

    // Close the MongoDB connection when the app is terminated
    // process.on("SIGINT", () => {
    //   client.close();
    //   process.exit();
    // });
  }
);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running 🥳");
});

// Define a simple route
app.get("/home", (req, res) => {
  res.send("Hello, MongoDB!");
});

module.exports = app;
