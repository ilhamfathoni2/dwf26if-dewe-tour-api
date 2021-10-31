const { trip, user, transaction } = require("../../models");

exports.getTransactions = async (req, res) => {
  try {
    const { idUser } = req.user;

    const data = await transaction.findAll({
      include: [
        {
          model: trip,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: user,
          attributes: {
            exclude: ["createdAt", "updatedAt", "password"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      idUser,
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

exports.getTransactionId = async (req, res) => {
  try {
    const { idUser } = req.user;
    const { id } = req.params;
    const data = await transaction.findOne({
      where: {
        id,
      },
      include: [
        {
          model: trip,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: user,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
      idUser,
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

exports.addTransaction = async (req, res) => {
  try {
    const { idUser } = req.user;
    await transaction.create(req.body, idUser);
    const data = await transaction.findAll({
      include: [
        {
          model: trip,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: user,
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
      message: "Transaction success",
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

exports.updateTransaction = async (req, res) => {
  try {
    const { idUser } = req.user;
    const { id } = req.params;

    await transaction.update(req.body, {
      where: {
        id,
      },
      idUser,
    });
    const data = await transaction.findOne({
      include: [
        {
          model: trip,
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
        {
          model: user,
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
      message: "Edit transaction success",
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

exports.deleteTransaction = async (req, res) => {
  try {
    const { idUser } = req.user;
    const { id } = req.params;

    await transaction.destroy({
      where: {
        id,
      },
      idUser,
    });
    const data = await transaction.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      message: "Delete transaction success",
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
