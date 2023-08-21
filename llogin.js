const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("username-error");
const passwordError = document.getElementById("password-error");
const submitBtn = document.querySelector(".login-btn");

username.addEventListener("keyup", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  } else {
    usernameError.style.display = "none";
  }
});

password.addEventListener("keyup", () => {
  if (password.value == "") {
    passwordError.style.display = "block";
  } else {
    passwordError.style.display = "none";
  }
});

submitBtn.addEventListener("click", () => {
  if (username.value == "") {
    usernameError.style.display = "block";
  }
  if (password.value == "") {
    passwordError.style.display = "block";

  }
  else{
      usernameError.style.display = 'none';
      passwordError.style.display = "none";
      let cred = {
          userName: `${username.value}`,
          password: `${password.value}`
      }
   
      console.log(cred);

  }
  function myfunction(){
    var x =document.getElementById("pass");

    if(x.type === "password"){
        x.type = "text";
    }
    else{
        x.type = "password";
    }
}

function validate(){
    var password = document.getElementById("pass");
    var length = document.getElementById("length");

    if(password.value.length >= 8){
        alert("login Successful");
        window.location.replace("index.html");
        return false;
    }
    else{
        alert("Invalid Failed");
    }
}

});