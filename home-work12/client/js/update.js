const $formUpdate= window.document.querySelector("#form_change");

    $formUpdate.addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log(e)

    const $error= document.querySelector("#errChangeMessage")
    const oldDepartmentName=e.target[1].value;
    const newDepartmentName=e.target[2].value;
 

    $error.innerHTML="";
    isError=false;


    if(oldDepartmentName.length<2 ) {

        const newSpan=document.createElement("span");
        newSpan.textContent=`* error: please enter valid string >2 string department string length[:${+oldDepartmentName}]`;
        $error.appendChild(newSpan);
        isError=true;
        
    }
    if(newDepartmentName.length<2) {
        
        const newSpan=document.createElement("span");
        newSpan.textContent=`* error: please enter valid string >2 new department string length:[${+newDepartmentName}]`;
        $error.appendChild(newSpan);
        isError=true;
        
    }
    

    // if all valid data
    if(isError===false) {
        try {

            await axios.post("http://localhost:3000/update-employee",{oldname:oldDepartmentName,newname:newDepartmentName})
        }

        catch (err) {
            console.log(err.message);
        }
    }
})



