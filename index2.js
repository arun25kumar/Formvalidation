let  formhead=document.getElementById("formhead")
let  emaill=document.getElementById("emaill")
let  passw=document.getElementById("passw")


formhead.addEventListener("signin", function(e){
    e.preventDefault();
    checkfilled([email,passw])

})
function checkfilled(inputs) {
    inputs.forEach(input=>{
        if(input.value.trim()===""){
            error(input, `${getName(input)} is Required`);

        }
        else{
         success(input)
        }
    })
    
}
function  errors(input,message) {
     const formhead=input.parentElement;
     const p= formhead.querySelector("p")
     formhead.className="formhead error"
     p.input=message
}
function success(input){
    const formhead=input.parentElement;
     const p= formhead.querySelector("p")
     formhead.className="formhead sucess"
     p.input=""
}