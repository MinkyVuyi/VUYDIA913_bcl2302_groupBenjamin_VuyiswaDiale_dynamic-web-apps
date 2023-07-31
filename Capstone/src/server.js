const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000; // Choose a port for your server

// Basic route for testing the server
app.get("/", (req, res) => {
  res.send("Hello, this is your Express.js server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const { Pool } = require("pg");

// Configure the database connection
const pool = new Pool({
  user: "your_postgres_user",
  host: "localhost",
  database: "your_database_name",
  password: "your_database_password",
  port: 5432, // Default PostgreSQL port
});

// Test the database connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected to the database at:", res.rows[0].now);
  }
});
