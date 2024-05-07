const GoogleStrategy = require("passport-google-oauth2").Strategy;
const passport = require("passport");
const User=require('../models/userSchema');

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: "/auth/google/callback",
			scope: ["profile", "email"],
		},
		function (accessToken, refreshToken, profile, callback) {
			// console.log(profile);
			User.findOne({email:profile.emails[0].value})
			.then((user)=>{
				if(user){
					return callback(null, user);
				}
				else
				{
					User.create({
						name:profile.displayName,
						email:profile.emails[0].value,
						profileImage:profile.photos[0].value
					})
					.then((user)=>{
						return callback(null, user)
					})
					.catch((err)=>{
						console.log("Error creating user!")
					})
				}
			})
			.catch((err)=>{
				console.log("Error while logging using Oauth Google")
			})
			
		}
	)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

module.exports=passport;