const mongoose = require("mongoose");
require('dotenv').config();
//URI FOR CONNECTING TO DB
const uri = `mongodb+srv://${process.env.DB_ADMIN}:${process.env.DB_PASSWORD}@photoklub.tav86nq.mongodb.net/?retryWrites=true&w=majority&appName=photoKlub`;

//COPIED FROM MONGODB ATLAS NO IDEA WHAT IT MEANS
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectToDb=async () =>{
  try
  {
    await mongoose.connect(uri, clientOptions);
    console.log('Connected to Mongodb Atlas');
  }catch(err)
  {
    console.log(err)
  }

}

module.exports = connectToDb;
