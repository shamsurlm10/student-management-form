var data = JSON.parse(localStorage.getItem('userData'))
if(data){
document.getElementById("login-form").addEventListener('submit', function(event){
    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (email === "") {
        alert("Please fill in the Email field.");
        return;
    }
    if (password === "") {
        alert("Please fill in the password field.");
        return;
    }
    var validlogin = false;
    for (var i = 0; i < data.length; i++) {
        var user = data[i];
        if(user.email === email && user.password ===password){
            var validlogin = true;
            user = data[i];
            break;
        }
    }
    if (validlogin) {
        var token = generateJWT(user);
        localStorage.setItem('jwt', token);
        localStorage.setItem('userName', user.name);
        window.location.href = 'index.html';
      } else {
        alert("Invalid email or password");
      }
})
function generateJWT(user) {
    var payload = {
      username: user.name
    };
    var encoded = btoa(JSON.stringify(payload));
    var token = encoded;
    return token;
  }
}
else{
    alert('No user found. Create a new user');
}