require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/api/expenses", expenseRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("SpendWise Backend is Running!");
});

module.exports = app;
