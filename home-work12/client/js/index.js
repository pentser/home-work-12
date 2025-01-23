

const $formAdd= window.document.querySelector("#form_add");

$formAdd.addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log(e)

    const $error= document.querySelector("#errAddMessage")
    const name=e.target[1].value;
    const department=e.target[2].value;
    const age =e.target[3].value;
    const salary=e.target[4].value;

    $error.innerHTML="";
    isError=false;


    if(name.length<2 ) {

        const newSpan=document.createElement("span");
        newSpan.textContent=`* error: please enter valid string >2 string name length[:${+name}]`;
        $error.appendChild(newSpan);
        isError=true;
        
    }
    if(department.length<2) {
        
        const newSpan=document.createElement("span");
        newSpan.textContent=`* error: please enter valid string >2 department string length:[${+department}]`;
        $error.appendChild(newSpan);
        isError=true;
        
    }
    
    if(age<=0 || age>135 ) {
        const newSpan=document.createElement("span");
        newSpan.textContent=`* error: please enter valid age 0-135`;
        $error.appendChild(newSpan);
        isError=true;
        
    }
    
    if(salary<=0) {
        
        const newSpan=document.createElement("span");
        newSpan.textContent=`* error: please enter valid salary >0`;
        $error.appendChild(newSpan);
        isError=true;

    }

    // if all valid data
    if(isError===false) {
        try {

            await axios.post("http://localhost:3000/add-employee",{name,department,age,salary})
        }

        catch (err) {
            console.log(err.message);
        }
    }
 
})

