const express = require("express");
const router = express.Router();
const postController = require("../controller/postController");

//if the route is <root Url>/user/create  it will call the userController to create the User and post it in the database
router.post("/create", postController.create);

module.exports = router;