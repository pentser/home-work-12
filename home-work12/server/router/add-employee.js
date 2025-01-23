import express from "express";
import Employee from "../model/Employee.js";
import Joi from "joi";

const router= express.router();

app.post("/",validate ,(req,res)=>{
    
    // add employee to database
  const employee= new Employee(req.value.body);
  employee.save()
  .then(()=>{
      console.log(employee._doc);
  
  })
  .catch((err)=>{
     console.log(err.message)
  })
  
  
  })

  function validate(req,res,next) {
    // Define a validation schema for the request body
const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    department: Joi.string().min(2).max(30).required(),
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


export default router;