const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

module.exports = app;
