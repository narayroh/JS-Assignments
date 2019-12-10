const validateForm = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email') .value;
    const password= document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

if(firstName=='') {
    document.getElementById("firstname").innerHTML = "** Blank Username";
    return false;
}
else if((firstName.length <= 2) && (firstName.length > 15)) {
    document.getElementById("firstname").innerHTML = "** User length must be between 2 and 20";
    return false;
}
else if (!isNaN(firstName)) {
    document.getElementById("firstname").innerHTML = "** Only characters allowed";
    return false;
}
if (lastName=='') {
    document.getElementById("lastname").innerHTML = "** Blank Username";
    return false;
}
else if (((lastName.length <= 2) || (lastName.length > 15))) {
    document.getElementById("lastname").innerHTML = "** User length must be between 2 and 20";
    return false;
}
else if (!isNaN(lastName)) {
    document.getElementById("lastname").innerHTML = "** Only characters allowed";
    return false;
}
else if(email=='') {
    document.getElementById("emailid").innerHTML = "** Please enter valid email id";
    return false;
}
else if (email.indexOf('@') <= 0) {
    document.getElementById("emailid").innerHTML = "** @ invalid position";
    return false;
}   
else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')) {
    document.getElementById("emailid").innerHTML = "** '.' invalid position";
    return false;
}
else if(password=='') {
    document.getElementById("pass").innerHTML = "** Please enter valid password";
    return false;
}
else if ((password.length <= 5) || (password.length > 20)) {
    document.getElementById("pass").innerHTML = "Password is too short";
    return false;
}

else if(confirmPassword==''){
    document.getElementById("confirmpassword").innerHTML ="** Password does not match";
    return false;
}
else if(passowrd != confirmPassword) {
    document.getElementById("confirmpassword").innerHTML = "** Password does not match";
}
}