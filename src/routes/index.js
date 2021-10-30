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

const { auth, adminOnly } = require("../middleware/auth");

// Route
router.post("/register", register);
router.post("/login", login);

router.post("/country", auth, adminOnly, addCountrys);
router.get("/country", getAllCountry);
router.get("/country/:id", getCountry);
router.patch("/country/:id", auth, adminOnly, updateCountry);
router.delete("/country/:id", auth, adminOnly, deleteCountry);

module.exports = router;
