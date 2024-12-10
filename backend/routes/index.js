//C:\Users\Fadhlan\Downloads\Vastra-main\backend\routes\index.js

const express = require("express");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const router = express.Router();

// Route untuk auth (login & register)
router.use("/auth", authRoutes);

// Route untuk CRUD user
router.use("/api/users", userRoutes);

module.exports = router;
