const express = require("express");

const router = express.Router();

// Controller
const { addCountrys, getCountry } = require("../controllers/country");

// Route
router.post("/country", addCountrys);
router.get("/country/:id", getCountry);

module.exports = router;
