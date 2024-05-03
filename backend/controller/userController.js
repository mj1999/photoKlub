const userSchema = require("../models/userSchema");

module.exports.create = async function (req, res) {
  const userData = req.body;
  const newUser = await userSchema.create(userData);
  if (newUser) {
    res.status(200).json({
      message: "User created succesfully",
      data: { newUser },
    });
  }
};
