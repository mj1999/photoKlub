const connectToDb = require("./config/dbConf");
const passport = require("passport");
const session = require("express-session");
const passportStrategy = require("./config/passport");
const express = require("express");

const port = 1337;
const app = express();
app.use(
	session({
		secret: 'brownXLuciferous',
    resave: false,
    saveUninitialized: false
	})
);
app.use(passport.initialize());
app.use(passport.session());


//calling this method for DB connection
connectToDb();

//for decoding urlencoded strings
app.use(express.urlencoded());

app.use("/", require("./routes")); // router redirection to routes folder

app.listen(port, (err) => {
  if (err) {
    console.log("Server not started due to: ", err);
    return;
  }
  console.log("Server started on port: ", port);
});
