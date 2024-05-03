const connectToDb = require("./config/dbConf");
const express = require("express");

const port = 1337;
const app = express();

connectToDb();
app.use(express.urlencoded());

app.use("/", require("./routes")); // router redirection to routes folder

app.listen(port, (err) => {
  if (err) {
    console.log("Server not started due to: ", err);
    return;
  }
  console.log("Server started on port: ", port);
});
