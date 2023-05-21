document.getElementById("student-form").addEventListener("submit", function (event) {
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

    var maleRadio = document.getElementById("maleRadio");
    var femaleRadio = document.getElementById("femaleRadio");
    var otherRadio = document.getElementById("otherRadio");

    var selectedGender = "";

    if (maleRadio.checked) {
        selectedGender = maleRadio.value;
    } else if (femaleRadio.checked) {
        selectedGender = femaleRadio.value;
    } else if (otherRadio.checked) {
        selectedGender = otherRadio.value;
    }

    var marriedRadio = document.getElementById("marriedRadio");
    var unmarriedRadio = document.getElementById("unmarriedRadio");

    var selectedMarital = "";

    if (marriedRadio.checked) {
        selectedMarital = marriedRadio.value;
    } else if (unmarriedRadio.checked) {
        selectedMarital = unmarriedRadio.value;
    }

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
    function isValid(name) {
        var nameex = /^[a-zA-Z.\s]+$/;
        return nameex.test(name);
    }
    if (!isValid(name)) {
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
    if (!isValid2(city)) {
        alert("City field can only contain alphabetic characters and a dot (.)");
        return;
    }
    function isValid2(name) {
        var nameex = /^[a-zA-Z\s]+$/;
        return nameex.test(name);
    }
    if (country === "") {
        alert("Please fill in the Country field.");
        return;
    }
    if (!isValid2(country)) {
        alert("country field can only contain alphabetic characters and a dot (.)");
        return;
    }
    function isValid2(name) {
        var nameex = /^[a-zA-Z\s]+$/;
        return nameex.test(name);
    }
    if (parent === "") {
        alert("Please fill in the Parent field.");
        return;
    }
    if (!isValid(parent)) {
        alert("Parent field can only contain alphabetic characters and a dot (.)");
        return;
    }
    if (phone === "") {
        alert("Please fill in the Phone field.");
        return;
    }
    function isValidPhone(phone) {
        if (phone.length === 14 || phone.length === 11) {
            return true;
        }
        else if (/^[0-9+]+$/.test(phone)) {
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
    function isValidsid(sid) {
        if (/^[0-9]+$/.test(sid)) {
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

    if (selectedGender === "") {
        alert("Please select a gender");
        return
    }
    if (selectedMarital === "") {
        alert("Please select a maretial stuatus");
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
    if (extraCurriculum.length === 0) {
        alert("Please fill in the Extra Curriculum field.");
        return;
    }
    if (comment === "") {
        alert("Please fill in the Comment field.");
        return;
    }
    var student = {
        name: name,
        address: address,
        phone: phone,
        email: email,
        sid: sid,
        enrollDate: enrollDate,
        selectedGender: selectedGender,
        program: program,
        major: major,
        extraCurriculum: extraCurriculum
    };

    document.getElementById("user").value = "";
    document.getElementById("address").value = "";
    document.getElementById("city").value = "";
    document.getElementById("country").value = "";
    document.getElementById("parent").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("sid").value = "";
    document.getElementById("bdate").value = "";
    document.getElementById("endate").value = "";
    document.getElementById("maleRadio").checked = false;
    document.getElementById("femaleRadio").checked = false;
    document.getElementById("otherRadio").checked = false;
    document.getElementById("marriedRadio").checked = false;
    document.getElementById("unmarriedRadio").checked = false;
    document.getElementById("program").value = "";
    document.getElementById("major").value = "";
    document.getElementById("comment").value = "";
    document.querySelectorAll('input[type="checkbox"]').checked = false;

    var studentData = localStorage.getItem("studentData");
    if (!studentData) {
        studentData = [];
    } else {
        studentData = JSON.parse(studentData);
    }
    function saveStudentData(student) {
        studentData.push(student);
        localStorage.setItem("studentData", JSON.stringify(studentData));
    }
    saveStudentData(student);

    alert("Form submitted successfully!");
});
