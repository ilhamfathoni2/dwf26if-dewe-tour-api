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
const {
  getTrips,
  addTrip,
  getTripId,
  updateTrip,
} = require("../controllers/trip");

const { auth, adminOnly } = require("../middleware/auth");

// Route
router.post("/register", register);
router.post("/login", login);

router.post("/country", auth, adminOnly, addCountrys);
router.get("/country", getAllCountry);
router.get("/country/:id", getCountry);
router.patch("/country/:id", auth, adminOnly, updateCountry);
router.delete("/country/:id", auth, adminOnly, deleteCountry);

router.get("/trip", getTrips);
router.get("/trip/:id", getTripId);
router.post("/trip", auth, addTrip);
router.patch("/trip/:id", auth, updateTrip);

module.exports = router;
