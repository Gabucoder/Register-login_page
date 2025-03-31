const signInFieldset = document.querySelector("#signIn-form")
const signUpFieldset = document.querySelector("#signUp-form")
const loginBtn = document.querySelector("#signIn-btn")
const signUpBtn = document.querySelector("#signUp-btn")
const passIcons = document.querySelectorAll(".fa-eye-slash")
let inputs = document.querySelectorAll(".password")
const loginPassword = document.querySelector("#loginPassword")
const newPassword = document.querySelector("#newPassword")
const confirmPassword = document.querySelector("#confirmPassword")
const userName = document.querySelector("#userName")



window.onload = function () {
    signUpFieldset.style.display = 'none'
}

//create acc btn event listeners
signUpBtn.addEventListener('click', () => {
    signUpFieldset.style.display = 'block'
    signInFieldset.style.display = 'none'
    validatePassword (newPassword)
    validatePassword (confirmPassword)
})


//login Btn event listeners
loginBtn.addEventListener('click', () => {
    signInFieldset.style.display = 'block'
    signUpFieldset.style.display = 'none'
    validatePassword (loginPassword)
    checkIfEmail(userName)
    

})

function showPass(input) {
    if(input.type === "password") {
      input.type = "text"
    } else {
      input.type = "password"
    }
}

//showPassword function
// function showPass() {
//   inputs.forEach((input) => {
//     if(input.type === "password") {
//       input.type = "text"
//     } else {
//       input.type = "password"
//     }
  
//     })
// }

//password and email regular expression pattern
const passwordPattern = /[a-z,A-Z]+[_,\-,@,#,$,%,&,*]+[0-9]+/
const emailPattern = /[\w,_,\-,0-9,\.]+[@][a-z]{2,3}/


//password validation
function validatePassword (password) {
  if(password.value !== "") {
    if(passwordPattern.test(password.value)) {

      alert("This is a strong password")

    } else {

      alert("you password should contain [a-z]+[A-Z]+[\@\#\$\%\*]+")
      
   }
  }
}

//email validation 

function validateEmail(email) {
  if(email.value !== "") {
    if(emailPattern.test(email.value)) {
      alert("Your email format is correct")
    } else {
      alert("Please enter a valid email")
    }
  }
}

//check if userName is an email or not

function checkIfEmail(userName) {
  if(userName.value !== "") {
    if(emailPattern.test(userName.value)) {
      alert("You are using your email to login")

    } else{
      alert("You are using your userName to login")
    }
  }
}




passIcons.forEach((passIcon)=>{
  passIcon.addEventListener("click", () => {
    inputs.forEach((input) => {

    if(input.id === "loginPassword") {

      showPass(loginPassword)

    } else if(input.id === "newPassword"){

      showPass(newPassword)

    } else if(input.id === "confirmPassword") {

      showPass(confirmPassword)

    }
  
    })
  
  
  })
})

