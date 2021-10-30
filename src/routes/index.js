const express = require("express");

const router = express.Router();

// Controller
const {
  addCountrys,
  getCountry,
  getAllCountry,
  deleteCountry,
  updateCountry,
} = require("../controllers/country");
const { register, login } = require("../controllers/auth");

// Route
router.post("/register", register);
router.post("/login", login);

router.post("/country", addCountrys);
router.get("/country", getAllCountry);
router.get("/country/:id", getCountry);
router.patch("/country/:id", updateCountry);
router.delete("/country/:id", deleteCountry);

module.exports = router;
