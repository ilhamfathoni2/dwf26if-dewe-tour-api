require("dotenv").config();
const express = require("express");
const app = express();
const port = 5000;

const router = require("./src/routes");

app.use(express.json());

app.use("/api/v1/", router);

app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
