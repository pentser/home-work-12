

export async function getAllEmployees(employeeModel) {

    try {

        const data= await employeeModel.find({}).lean();
        console.log(data);
       
    }
    catch(err) {
     console.error(err);
       
    }
}


export async function insertEmployee(model,newEmployee) {
    
    // add employee to database
const employee= new model(newEmployee);
employee.save()
.then(()=>{
  console.log(employee._doc);

})
.catch((err)=>{
 console.log(err.message)
})
  
}
export async function replaceEmployeeDepartment(model,oldDepartment,newDepartment) {
    try {
        const employee=await model.replaceOne({name:oldDepartment}, {name:newDepartment}) 
        console.log(employee);
    }
       
    catch(error) {
        console.error(error);
      };
  }

  export async function deleteEmployeOverAge(model,age) {
    try {
        const employee=await model.deleteMany({ age: {$gt: age} }) 
        console.log(employee);

    }
       
    catch(error) {
        console.error(error);
      };
  }




    
 




