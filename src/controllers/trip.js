const { trip, country } = require("../../models");

exports.getTrips = async (req, res) => {
  try {
    const data = await trip.findAll({
      include: [
        {
          model: country,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "countryId"],
      },
    });

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.getTripId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await trip.findOne({
      where: {
        id,
      },
      include: [
        {
          model: country,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt", "countryId"],
      },
    });

    res.send({
      status: "success...",
      data,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

exports.addTrip = async (req, res) => {
  try {
    const { idUser } = req.user;
    await trip.create(req.body, idUser);
    const data = await trip.findAll({
      include: [
        {
          model: country,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "Add trip success",
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

exports.updateTrip = async (req, res) => {
  try {
    const { idUser } = req.user;
    const { id } = req.params;

    await trip.update(req.body, {
      where: {
        id,
      },
      idUser,
    });
    const data = await trip.findOne({
      include: [
        {
          model: country,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "Add trip success",
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
