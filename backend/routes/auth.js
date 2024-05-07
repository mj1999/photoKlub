const express = require("express");
const passport = require("passport");
const router = express.Router();
const authMiddleware=require("../middleware/auth");


//displaying the google login page
router.get("/", passport.authenticate("google", ["profile", "email"]));

//if the user gets authenticated it redirects to success route
router.get(
	"/callback",
	passport.authenticate("google", {
		successRedirect: "/auth/google/login/success",
		failureRedirect: "/auth/google/login/failed",
	})
);

//send success message with user details
router.get("/login/success",authMiddleware.checkAuthenticated ,(req, res) => {
	console.log(req.user)
		res.status(200).json({
			error: false,
			message: "Successfully Loged In",
			user: req.user,
		})})

//send Failure message 
router.get("/login/failed",(req,res)=>{
	res.status(401).json({
		error:true,
		message:'Login Failed',

	})
})

module.exports = router;