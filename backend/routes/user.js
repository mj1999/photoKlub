
const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");

//if the route is <root Url>/user/create  it will call the userController to create the User and post it in the database
router.post("/create", userController.create);

module.exports = router;
