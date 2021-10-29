const { country } = require("../../models");

exports.addCountrys = async (req, res) => {
  try {
    await country.create(req.body);
    const data = await country.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "Add country success",
      datas: data,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const countrys = await country.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: countrys,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
