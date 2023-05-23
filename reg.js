document.getElementById("register-form").addEventListener("submit", function(event){
    event.preventDefault();
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var agreeChecked = document.getElementById('agree').checked;
    if (name === "") {
        alert("Please fill in the Name field.");
        return;
    }
    function isValid(name) {
        var nameEx = /^[a-zA-Z0-9]+$/;
        return nameEx.test(name);
    }
    if (!isValid(name)) {
        alert("Username field can only contain alphabetical and numerical characters");
        return;
    }
    if (email === "") {
        alert("Please fill in the Email field.");
        return; 
    }
    if (password.length < 6){
        alert('Password should be at least 6 characters long.');
        return;
    }
    if (password === "") {
        alert("Please fill in the password field.");
        return;
    }
    if (confirmPassword === "") {
        alert("Please fill in the Confirm Password field.");
        return;
    }
    if (password !== confirmPassword){
        alert("Passward did not match");
        return;
    }
    if (!agreeChecked) {
        alert('Please agree to the terms and conditions.');
        return;
    }
    var user = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };

    document.getElementById("username").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("confirmPassword").value = "";
    agreeChecked.checked = false;

    var userData = localStorage.getItem("userData");
    if (!userData) {
        userData = [];
    } else {
        userData = JSON.parse(userData);
    }
    function saveUserData(user) {
        userData.push(user);
        localStorage.setItem("userData", JSON.stringify(userData));
    }
    saveUserData(user);
    window.location.reload();
    alert("Registration Successfull. Now Login");
    window.location.href = 'log.html';
});