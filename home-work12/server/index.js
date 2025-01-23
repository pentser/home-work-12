import express from "express";
import cors from "cors";
import connectDB from "./data/config.js";




import routerAdd from "./router/add-employee.js";
import routerDelete from "./router/delete-employee.js";
import routerUpdate from "./router/apdate-employee.js";


connectDB();


const app=express();

//middleware
app.use(cors({
    origin:"*"
}))
app.use(express.json());
app.use("/add-employee",routerAdd);
app.use("/delete-employee",routerDelete);
app.use("/apdate-employee",routerUpdate);

app.get("/",(req,res)=>{
    res.json({msg:"wellcome..."})
 })

  


app.listen(3000,()=> {
    console.log("server is running on port 3000");
});



