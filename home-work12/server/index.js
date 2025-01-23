import express from "express";
import mongoose from "mongoose";
import Employee from "./Employee.js";
import cors from "cors";
import Joi from "joi";

mongoose.connect("mongodb+srv://elipentser:NlhU0JQdBbWSOR27@svcollege.75omg.mongodb.net/crud")
.then(()=>{
  console.log("connect to mongo");
 })
 .catch((err)=>{
  console.log(err);
 })

const app=express();

//middleware
app.use(cors({
    origin:"*"
}))
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({msg:"wellcome..."})
})

app.post("/",(req,res)=>{

  console.log(req.body);
  res.json({data:req.body})
  })
  
// app.post("/",validate ,(req,res)=>{
    
//   // add employee to database
// const employee= new Employee(req.value.body);
// employee.save()
// .then(()=>{
//     console.log(employee._doc);

// })
// .catch((err)=>{
//    console.log(err.message)
// })


// })



app.listen(3000,()=> {
    console.log("server is running on port 3000");
});



function validate(req,res,next) {
    // Define a validation schema for the request body
const schema = Joi.object({
    fullname: Joi.string().min(3).max(30).required(),
    department: Joi.string().min(3).max(30).required(),
    age: Joi.number().min(0).max(135).required(),
    salary: Joi.number().min(0).required()
  });

  const result = schema.validate(req.body);
  if (result.error) {
    return res.status(400).json({
      error: result.error.details[0].message,
    });
  }
  if (!req.value) {
    req.value = {};
  }
  req.value['body'] = result.value;
  next();
};
