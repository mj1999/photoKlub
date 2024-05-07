// ROOT FOLDER FOR ALL ROUTES
const express = require("express");
const authMiddleware=require("../middleware/auth");
const router = express.Router();

//if the route is <root Url>/user  it will call the user route
router.use("/user",authMiddleware.checkAuthenticated, require("./user"));

//POST ROUTES
router.use("/post",authMiddleware.checkAuthenticated,require("./post"));

//AUTH ROUTES
router.use("/auth/google",require("./auth"))



module.exports = router;
