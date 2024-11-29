import{getAuth,app,auth, createUserWithEmailAndPassword,} from './firebase.js'
let signUp= ()=>{
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
   console.log(user)
   alert("account created sucssfully")
  })
  .catch((error) => {
    console.log(error.code)
    alert("inavlid email or password")
   
  });

}
let signUp_btn = document.getElementById("sign_up")
signUp_btn.addEventListener("click",signUp)