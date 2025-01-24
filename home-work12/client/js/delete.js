
const $formDelete= window.document.querySelector("#form_delete");

$formDelete.addEventListener("submit",async(e)=>{
    e.preventDefault();
    console.log(e)

    const $error= document.querySelector("#errDeleteMessage")
    const age =e.target[1].value;

    
    $error.innerHTML="";
    isError=false;

    
    if(parseInt(age)<=0 || parseInt(age)>135 ) {
        const newSpan=document.createElement("span");
        newSpan.textContent=`* error: please enter valid age 0-135`;
        $error.appendChild(newSpan);
        isError=true;
        
    }
    
   
    // if  valid data
    if(isError===false) {
        try {

            await axios.post("http://localhost:3000/delete-employee",{upAge:parseInt(age)})
        }

        catch (err) {
            console.log(err.message);
        }
    }

    
})

