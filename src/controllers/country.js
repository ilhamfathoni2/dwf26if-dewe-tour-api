const { country } = require("../../models");

exports.addCountrys = async (req, res) => {
  try {
    const { adminOnly } = req.user;
    await country.create(req.body, adminOnly);
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

exports.getAllCountry = async (req, res) => {
  try {
    const countrys = await country.findAll({
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

exports.updateCountry = async (req, res) => {
  try {
    const { id } = req.params;
    const { adminOnly } = req.user;

    await country.update(req.body, {
      where: {
        id,
      },
      adminOnly,
    });
    const data = await country.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      message: "Update country success",
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.deleteCountry = async (req, res) => {
  const { id } = req.params;
  const { adminOnly } = req.user;

  try {
    await country.destroy({
      where: {
        id,
      },
      adminOnly,
    });

    res.send({
      status: "success",
      message: "delete country successfully",
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
