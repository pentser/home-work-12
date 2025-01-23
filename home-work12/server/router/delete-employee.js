import express from "express";
import Employee from "../model/Employee.js";
import Joi from "joi";
import {deleteEmployeOverAge} from "../data/crud.js"


const router= express.Router();

router.post("/",validate ,(req,res)=>{
  const {upAge} = req.value.body

  deleteEmployeOverAge(Employee,upAge);

  })

  function validate(req,res,next) {
    // Define a validation schema for the request body
const schema = Joi.object({
    upAge: Joi.number().min(0).max(135).required(),
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



