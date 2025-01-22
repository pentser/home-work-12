import express from "express";
import mongoose from "mongoose";
import Employee from "./Employee.js";

mongoose.connect("mongodb+srv://elipentser:NlhU0JQdBbWSOR27@svcollege.75omg.mongodb.net/crud", ()=>{
     console.log("connected to db");
});

const app=express();

//middleware
app.use(express.json());

app.get("/", (req,res)=>{
    res.json("msg","Hello from server");

})




/* test
const employee1= new Employee({name:"eli pentser",age:54});
employee1.save()
.then(()=>{
    console.log(employee1._doc);

})
.catch((err)=>{
   console.log(err.message)
})
   */
// Employee.find({}).then ((doc)=>{
// console.log(doc[0].toObject())
// });




app.listen(3001,()=> {
    console.log("server is running");
});
