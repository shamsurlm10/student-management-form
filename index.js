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

    if (name === "" || address === "" || city === "" || country === "" || 
        parent === "" || phone === "" || email === "" || sid === "" ||
        birthDate === "" || enrollDate === "" || gender === "" || marital === "" ||
        program === "" || major === "") {
        alert("Please fill in all the fields.");
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
    
      function saveStudentData(student) {
        // Convert student object to JSON string
        var jsonData = JSON.stringify(student);
      
        // Create a new Blob object with the JSON data
        var blob = new Blob([jsonData], { type: "application/json" });
      
        // Create a temporary anchor element to trigger the download
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "student.json";
        a.click();
      }

});