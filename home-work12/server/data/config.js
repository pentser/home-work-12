import mongoose from "mongoose";
import 'dotenv/config';

function connectDB() {
    mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>{
      console.log("connect to mongo");
     })
     .catch((err)=>{
      console.log(err);
     })
}

export default connectDB;
