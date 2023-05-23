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
        window.location.href = 'index.html';
      } else {
        alert("Invalid email or password");
      }
})
function generateJWT(user) {
    var payload = {
      // Include any necessary user information in the payload
      userId: user.id,
      username: user.username,
      // Add additional claims as needed
    };
  
    // Encode the payload as Base64
    var encodedPayload = btoa(JSON.stringify(payload));
  
    // Create the JWT token using a secret key (this is a simple example)
    var secretKey = 'your-secret-key';
    var token = secretKey + '.' + encodedPayload;
  
    return token;
  }
}
else{
    alert('No user found. Create a new user');
}