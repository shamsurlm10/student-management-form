var data = JSON.parse(localStorage.getItem('userData'))
if (data) {
  document.getElementById("login-form").addEventListener('submit', function (event) {
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
    var validloginEmail = false;
    var validloginPassword = false;
    var user;

    for (var i = 0; i < data.length; i++) {
      user = data[i];
      if (user.email === email) {
        validloginEmail = true;
      }
      if (user.password === password) {
        validloginPassword = true;
      }
    }

    if (validloginEmail && validloginPassword) {
      var token = generateJWT(user);
      localStorage.setItem('jwt', token);
      localStorage.setItem('userName', user.name);
      window.location.href = 'index.html';
    } else if (!validloginEmail && !validloginPassword) {
      alert("Invalid email and password");
    } else if (!validloginEmail) {
      alert("Invalid email");
    } else {
      alert("Invalid password");
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
else {
  alert('No user found. Create a new user');
}