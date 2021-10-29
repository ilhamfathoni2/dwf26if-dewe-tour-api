const express = require("express");

const router = express.Router();

// Controller
const {
  addCountrys,
  getCountry,
  getAllCountry,
  deleteCountry,
} = require("../controllers/country");

// Route
router.post("/country", addCountrys);
router.get("/country", getAllCountry);
router.get("/country/:id", getCountry);
router.delete("/country/:id", deleteCountry);

module.exports = router;
