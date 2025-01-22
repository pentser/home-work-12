import express from "express";
import mongoose from "mongoose";
import Employee from "./Employee.js";

const app=express();


mongoose.connect(process.env.CONNECTION_STRING);
const employee= new Employee({name:"rafi pentser",age:54});

employee.save()
.then(()=>{
    console.log(employee._doc);
    
})
.catch((err)=>{
    console.log(err.message)
})
const employee1= new Employee({name:"eli pentser",age:54});
employee1.save()
.then(()=>{
    console.log(employee1._doc);

})
.catch((err)=>{
   console.log(err.message)
})




// Employee.find({}).then ((doc)=>{
// console.log(doc[0].toObject())
// });




app.listen(3001,()=> {
    console.log("server is running");
});
