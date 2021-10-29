const { country } = require("../../models");

exports.addCountrys = async (req, res) => {
  try {
    await country.create(req.body);
    res.send({
      status: "success",
      message: "Add country success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};
