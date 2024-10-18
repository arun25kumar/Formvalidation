const form=document.getElementById("form")
const username=document.getElementById("username")
const email=document.getElementById("email")
const password=document.getElementById("password")
const confirmpassword=document.getElementById("confirmpassword")


String.prototype.isEmail = function() {
    return !!this.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);
}

function checkRequired(inputs) {
    inputs.forEach(input => {
        if(input.value.trim()===""){
      errorinput(input, `${getName(input)} is Required`);
        } 
        else{
   
        }
        
    });
    }

        function getName(input) {
            return input.id;
            
        }
        function errorinput( input,message){
            const formGroup=input.parentElement;
            const p = formGroup.querySelector("p")
            formGroup.className="form-group error"
            p.innerHTML= message

        }
        function successinput(input) {
            const formGroup=input.parentElement;
            formGroup.className="form-group success";
            const p= formGroup.querySelector("p")
            p.innerHTML="";
       


        }
    
        function checklength(input,min,max) {
            let data=input.value.trim().length
            if(data<min){
                errorinput(input, `${getName(input)}must be atleast greater than ${min} character`);
            }
            else if(data>max){
                errorinput(input, `${getName(input)}must be atleast lesser than ${max} character`);
            }
            else{
                successinput(input)

            }
            
        }
  function checkpassword(password,min,max) {
    let pass=password.value.trim().length
    if(pass<min){
        errorinput(input, `${getName(password)}must be atleast greater than ${min} character`);

    }
    else if(pass>max){
        errorinput(input, `${getName(password)}must be atleast lesser than ${max} character`);

    }
    else{
        successinput(input)
    }
    
  }
  function checkconfirmpassword(password,confirmpassword){
  if(password.value!=confirmpassword.value){
    errorinput(confirmpassword, `${getName(confirmpassword)}password does not match `);


  }
  }
  function checkemail(input) {
  if(!input.value.trim().isEmail()){
    errorinput(input,`this email is not valid `)
  }
    
  }

form.addEventListener("submit",function (e) {
    e.preventDefault();
    checkRequired([username,email,password,confirmpassword]);
    checklength(username,5,10)
    checkpassword(password,8,10)
    checkconfirmpassword( password,confirmpassword)
    checkemail(email    )

})