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

    if(password.value.length  <= 2){
        alert("Something is not right. TRY AGAIN");
        
        return false;
    }
    else{
        alert("Welcome");
        window.location.replace("home.html");
    }

}
