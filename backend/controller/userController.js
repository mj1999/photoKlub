const userSchema = require("../models/userSchema");

module.exports.create = async function (req, res) {
  const userData = req.body;
  const newUser = await userSchema.create(userData);
  //Task:user verification is needed for no duplicate user for Brown
  if (newUser) {
    res.status(200).json({
      message: "User created succesfully",
      data: { newUser },
    });
  }
};
