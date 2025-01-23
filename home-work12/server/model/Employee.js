
import mongoose from "mongoose";

const employeeSchema= new mongoose.Schema({
    name:{type:String,require:true,unique:true},
    department:{type:String,require:true},
    age:{type:Number,require:true},
    salary:{type:Number,require:true}
})

const Employee=mongoose.model("Employee",employeeSchema);
export default Employee;