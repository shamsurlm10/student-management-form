document.getElementById("student-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("user").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var parent = document.getElementById("parent").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var sid = document.getElementById("sid").value;
    var birthDate = document.getElementById("bdate").value;
    var enrollDate = document.getElementById("endate").value;
    var gender = document.getElementById("gender").value;
    var marital = document.getElementById("marital").value;
    var program = document.getElementById("program").value;
    var major = document.getElementById("major").value;
    
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var extraCurriculum = [];

    for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        extraCurriculum.push(checkboxes[i].value);
    }
}

    var comment = document.getElementById("comment").value;

    if (name === "") {
        alert("Please fill in the Name field.");
        return;
    }
    function isValid(name){
        var nameex = /^[a-zA-Z.\s]+$/;
        return nameex.test(name);
    }
    if (!isValid(name)){
        alert("Name field can only contain alphabetic characters and a dot (.)");
        return;
    }

    if (address === "") {
        alert("Please fill in the Address field.");
        return;
    }
    if (city === "") {
        alert("Please fill in the City field.");
        return;
    }
    if (!isValid2(city)){
        alert("City field can only contain alphabetic characters and a dot (.)");
        return;
    }
    function isValid2(name){
        var nameex = /^[a-zA-Z\s]+$/;
        return nameex.test(name);
    }
    if (country === "") {
        alert("Please fill in the Country field.");
        return;
    }
    if (!isValid2(country)){
        alert("country field can only contain alphabetic characters and a dot (.)");
        return;
    }
    function isValid2(name){
        var nameex = /^[a-zA-Z\s]+$/;
        return nameex.test(name);
    }
    if (parent === "") {
        alert("Please fill in the Parent field.");
        return;
    }
    if (!isValid(parent)){
        alert("Parent field can only contain alphabetic characters and a dot (.)");
        return;
    }
    if (phone === "") {
        alert("Please fill in the Phone field.");
        return;
    }
    function isValidPhone(phone){
        if(phone.length===14 || phone.length===11){
            return true;
        }
        else if(/^[0-9+]+$/.test(phone)){
            return true;
        }
    }
    if (!isValidPhone(phone)) {
        alert("Phone number should contain charecter between 0-9 a plus (+)");
        return;
    }   
    if (email === "") {
        alert("Please fill in the Email field.");
        return;
    }
    if (sid === "") {
        alert("Please fill in the SID field.");
        return;
    }
    if (!isValidsid(sid)) {
        alert("Sid should contain charecter between 0-9");
        return;
    }
    function isValidsid(sid){
        if(/^[0-9]+$/.test(sid)){
            return true;
        }
    }
    if (birthDate === "") {
        alert("Please fill in the Birth Date field.");
        return;
    }
    if (enrollDate === "") {
        alert("Please fill in the Enrollment Date field.");
        return;
    }
    if (gender === "") {
        alert("Please fill in the Gender field.");
        return;
    }
    if (marital === "") {
        alert("Please fill in the Marital Status field.");
        return;
    }
    if (program === "") {
        alert("Please fill in the Program field.");
        return;
    }
    if (major === "") {
        alert("Please fill in the Major field.");
        return;
    }
    if (extraCurriculum === "") {
        alert("Please fill in the Extra Curriculum field.");
        return;
    }
    if (extraCurriculum === "") {
        alert("Please fill in the Comment field.");
        return;
    }
    var student = {
        name: name,
        address: address,
        city: city,
        country: country,
        parent: parent,
        phone: phone,
        email: email,
        sid: sid,
        birthDate: birthDate,
        enrollDate: enrollDate,
        gender: gender,
        marital: marital,
        program: program,
        major: major,
        extraCurriculum: extraCurriculum,
        comment: comment
      };

      console.log(student)

      saveStudentData(student);

    //   document.getElementById("user").value="";
    //   document.getElementById("address").value="";
    //   document.getElementById("city").value="";
    //   document.getElementById("country").value="";
    //   document.getElementById("parent").value="";
    //   document.getElementById("phone").value="";
    //   document.getElementById("email").value="";
    //   document.getElementById("sid").value="";
    //   document.getElementById("bdate").value="";
    //   document.getElementById("endate").value="";
    //   document.getElementById("gender").checked=false;
    //   document.getElementById("marital").checked=false;
    //   document.getElementById("program").value="";
    //   document.getElementById("major").value="";
    //   document.getElementById("comment").value="";
    //   document.querySelectorAll('input[type="checkbox"]').checked=false;
    
      function saveStudentData(student) {
        // Convert student object to JSON string
        var jsonData = JSON.stringify(student);

        console.log(jsonData)
        console.log(student)
      
        // // Create a new Blob object with the JSON data
        // var blob = new Blob([jsonData], { type: "application/json" });
      
        // // Create a temporary anchor element to trigger the download
        // var a = document.createElement("a");
        // a.href = URL.createObjectURL(blob);
        // a.download = "student.json";
        // a.click();
      }
 
});