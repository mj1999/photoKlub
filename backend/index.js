const connectToDb=require("./config/dbConf");
const express = require("express");

const port = 1337;
const app = express();
connectToDb()
app.listen(port, (err) => {
  if (err) {
    console.log("Server not started due to: ", err);
    return;
  }
  console.log("Server started on port: ", port);
});
