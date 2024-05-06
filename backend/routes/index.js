// ROOT FOLDER FOR ALL ROUTES
const express = require("express");
const passport = require("passport");
const authMiddleware=require("../middleware/auth");
const router = express.Router();

//if the route is <root Url>/user  it will call the user route
router.use("/user",authMiddleware.checkAuthenticated, require("./user"));

//POST ROUTES
router.use("/post",authMiddleware.checkAuthenticated,require("./post"));


router.get("/google", passport.authenticate("google", ["profile", "email"]));

router.get(
	"/auth/google/callback",
	passport.authenticate("google", {
		successRedirect: "/success",
		failureRedirect: "/login/failed",
	})
);
router.get("/success",authMiddleware.checkAuthenticated ,(req, res) => {
	console.log(req.user)
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		})})

module.exports = router;
