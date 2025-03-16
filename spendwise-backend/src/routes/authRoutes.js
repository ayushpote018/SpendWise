const express = require("express");
const { body } = require("express-validator");
const { registerUser, loginUser, getMe } = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Register User
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("username").matches(/^[A-Za-z0-9 .,'!&]+$/).withMessage("Username must be a alphanumeric characters"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
  ],
  registerUser
);

// Login User
router.post(
  "/login",
  [
    body("username").notEmpty().withMessage("Username is required"),
    body("password").notEmpty().withMessage("Password is required")
  ],
  loginUser
);

// Get Logged-in User
router.get("/me", authMiddleware, getMe);

module.exports = router;
