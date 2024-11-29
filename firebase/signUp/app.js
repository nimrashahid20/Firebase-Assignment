

import{auth, createUserWithEmailAndPassword} from "./firebase.js"
console.log("hello")
let signUp = ()=>{
  console.log("hello")
    let name = document.getElementById("name").value
    let lname = document.getElementById("lname").value
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    let cPassword = document.getElementById("cPassword").value
    let nameRegex = /([a-zA-Z0-9_\s]+)/g
    let lRegex = /([a-zA-Z0-9_\s]+)/g
    let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

     if( nameRegex.test(name)&& lRegex.test(lname) && emailRegex.test(email) && passwordRegex.test(password)){
      console.log("test")
        createUserWithEmailAndPassword(auth, email, password)
           .then((userCredential) => {
             const user = userCredential.user;
             console.log(user)
             alert("Account Created Successfully")
             window.location.href = "./dashboard.html"
    
          })
           .catch((error) => {
             console.log(error.code)
          });
        }else{
            alert("Invalid Email or Passsword")
        }
        
      let signUpBtn = document.getElementById("sign_upbtn")
      signUpBtn.addEventListener("click",signUp)}
     