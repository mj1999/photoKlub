// ROOT FOLDER FOR ALL ROUTES
const express = require("express");
const router = express.Router();

//if the route is <root Url>/user  it will call the user route
router.use("/user", require("./user"));

//POST ROUTES
router.use("/post",require("./post"));

module.exports = router;
