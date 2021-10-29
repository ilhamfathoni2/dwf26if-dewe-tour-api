const express = require("express");

const router = express.Router();

// Controller
const { addCountrys } = require("../controllers/country");

// Route
router.post("/country", addCountrys);

module.exports = router;
