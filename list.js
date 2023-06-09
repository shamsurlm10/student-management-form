document.getElementById("logout").addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.removeItem("jwt");
    localStorage.removeItem("userName");
    window.location.href = "log.html";
});
var token = localStorage.getItem('jwt');
var userNameId = localStorage.getItem('userName');

if (token) {
    var data = JSON.parse(localStorage.getItem("studentData"));
    var tableBody = document.getElementById("student-table-body");
    var tableSearchBody = document.getElementById("student-table-search-body");

    // Call the initialization function when the page loads
    window.onload = function () {
        data = JSON.parse(localStorage.getItem("studentData")); // Update the 'data' variable
        initializeStudentTable();
    };
    // }
    var rowsPerPage = 4;
    var currentPage = 1;

    // Function to display the rows for the current page
    function displayRowsForPage(pageNumber, data) {
        var start = (pageNumber - 1) * rowsPerPage;
        var end = start + rowsPerPage;
        // Filter data according to username
        data = data.filter(student=>student.id === userNameId)
        var rowsToDisplay = data.slice(start, end);
        tableBody.innerHTML = "";
        for (var i = 0; i < rowsToDisplay.length; i++) {
            var student = rowsToDisplay[i];
            var row = document.createElement("tr");
            for (var key in student) {
                if (student.hasOwnProperty(key) && key!=='id' && key !== 'city' && key !== 'country' && key !== 'parent' && key !== 'birthDate' && key !== 'selectedMarital' && key !== 'comment') {
                    var cell = document.createElement("td");
                    cell.textContent = student[key];
                    row.appendChild(cell);
                }
            }
            // Create update and delete buttons
            var updateButtonCell = document.createElement("td");
            var updateButton = document.createElement("button");
            updateButton.classList.add('btn', 'btn-success');
            updateButton.style.padding ='5px'
            updateButton.textContent = "Update";
            updateButton.addEventListener("click", function () {
                var row = this.parentNode.parentNode;
                var rowIndex = Array.from(tableBody.children).indexOf(row);
                console.log(rowIndex)
                var adjustedIndex = rowIndex + (currentPage - 1) * rowsPerPage;
                console.log(adjustedIndex)
                var name = document.getElementById("user");
                var address = document.getElementById("address");
                var city = document.getElementById("city");
                var country = document.getElementById("country");
                var parent = document.getElementById("parent");
                var phone = document.getElementById("phone");
                var email = document.getElementById("email");
                var sid = document.getElementById("sid");
                var birthDate = document.getElementById("bdate");
                var enrollDate = document.getElementById("endate");

                var maleRadio = document.getElementById("maleRadio");
                var femaleRadio = document.getElementById("femaleRadio");
                var otherRadio = document.getElementById("otherRadio");
                var gender = data[adjustedIndex].selectedGender;

                var marriedRadio = document.getElementById("marriedRadio");
                var unmarriedRadio = document.getElementById("unmarriedRadio");
                var marital = data[adjustedIndex].selectedMarital;

                var program = document.getElementById("program");
                var major = document.getElementById("major");

                var extraCurry = data[adjustedIndex].extraCurriculum;
                for (var i = 0; i < extraCurry.length; i++) {
                    if (document.getElementById("sports").value === extraCurry[i]) {
                        document.getElementById("sports").checked = true;
                    }
                    if (document.getElementById("art").value === extraCurry[i]) {
                        document.getElementById("art").checked = true;
                    }
                    if (document.getElementById("enter").value === extraCurry[i]) {
                        document.getElementById("enter").checked = true;
                    }
                }
                var comment = document.getElementById("comment");

                name.value = data[adjustedIndex].name;
                address.value = data[adjustedIndex].address;
                city.value = data[adjustedIndex].city;
                country.value = data[adjustedIndex].country;
                parent.value = data[adjustedIndex].parent;
                phone.value = data[adjustedIndex].phone;
                email.value = data[adjustedIndex].email;
                sid.value = data[adjustedIndex].sid;
                birthDate.value = data[adjustedIndex].birthDate;
                enrollDate.value = data[adjustedIndex].enrollDate;
                program.value = data[adjustedIndex].program;
                major.value = data[adjustedIndex].major;
                comment.value = data[adjustedIndex].comment;

                if (gender === "Male") {
                    maleRadio.checked = true;
                }
                else if (gender === "Female") {
                    femaleRadio.checked = true;
                }
                else if (gender === "Other") {
                    otherRadio.checked = true;
                }

                if (marital === "Married") {
                    marriedRadio.checked = true;
                }
                else if (marital === "Unmarried") {
                    unmarriedRadio.checked = true;
                }
                // if(extraCurry.length){

                // }
                $('#updateModal').modal('show');
                var updateConfirmButton = document.getElementById('updateConfirmButton');
                updateConfirmButton.addEventListener("click", function () {
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
                        var nameEx = /^[a-zA-Z.\s]+$/;
                        return nameEx.test(name);
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
                        var nameEx = /^[a-zA-Z\s]+$/;
                        return nameEx.test(name);
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
                        var nameEx = /^[a-zA-Z\s]+$/;
                        return nameEx.test(name);
                    }
                    if (parent === "") {
                        alert("Please fill in the Parent field.");
                        return;
                    }
                    if (!isValid(parent)) {
                        alert("Parent field can only contain alphabetic character and a dot (.)");
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
                        alert("Phone number should contain character between 0-9 a plus (+)");
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
                    if (!isValidSid(sid)) {
                        alert("Sid should contain character between 0-9");
                        return;
                    }
                    function isValidSid(sid) {
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
                        alert("Please select a marital status");
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
                        id: userNameId,
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
                        selectedGender: selectedGender,
                        selectedMarital: selectedMarital,
                        program: program,
                        major: major,
                        extraCurriculum: extraCurriculum,
                        comment: comment
                    };
                    var studentData = localStorage.getItem("studentData");
                    if (!studentData) {
                        studentData = [];
                    } else {
                        studentData = JSON.parse(studentData);
                    }
                    function saveStudentData(student) {
                        studentData=studentData.map(std=>{
                            if(std.email === email){
                                return student
                            }
                            else{
                                return std
                            }
                        })
                        localStorage.setItem("studentData", JSON.stringify(studentData));
                    }

                    saveStudentData(student);

                    window.location.reload();

                    $('#updateModal').modal('hide');
                });
            });
            updateButtonCell.appendChild(updateButton);
            row.appendChild(updateButtonCell);


            var deleteButtonCell = document.createElement("td");
            var deleteButton = document.createElement("button");
            deleteButton.classList.add('btn', 'btn-danger');
            deleteButton.style.padding ='5px'
            deleteButton.textContent = "Delete";
            deleteButton.addEventListener("click", function () {
                var row = this.parentNode.parentNode;
                var rowIndex = Array.from(tableBody.children).indexOf(row);
                var adjustedIndex = rowIndex + (currentPage - 1) * rowsPerPage;
                $('#confirmationModal').modal('show');
                var deleteConfirmButton = document.getElementById('deleteConfirmButton');
                deleteConfirmButton.addEventListener("click", function () {
                    data.splice(adjustedIndex, 1);
                    localStorage.setItem("studentData", JSON.stringify(data));
                    row.parentNode.removeChild(row);
                    window.location.reload();
                    $('#confirmationModal').modal('hide');
                });
            });

            deleteButtonCell.appendChild(deleteButton);
            row.appendChild(deleteButtonCell);
            tableBody.appendChild(row);
        }
        // Add the rows to the table body
    }

    // Function to generate the pagination buttons
    function generatePaginationButtons(data) {
        var totalPages = Math.ceil(data.length / rowsPerPage);
        var paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (var i = 1; i <= totalPages; i++) {
            var button = document.createElement('button');
            button.style.margin = '5px'
            button.classList.add('btn', 'btn-secondary');
            button.innerHTML = i;
            button.addEventListener('click', function (event) {
                var pageNumber = parseInt(event.target.innerHTML);
                currentPage = pageNumber;
                displayRowsForPage(currentPage, data);
            });
            paginationContainer.appendChild(button);
        }
    }

    // Function to initialize the student table and pagination
    function initializeStudentTable() {
        generatePaginationButtons(data);
        displayRowsForPage(currentPage, data);
    }

    document.getElementById("advanceSearch").addEventListener('click', function () {
        var majorSearch = document.getElementById("searchMajor").value;
        var programSearch = document.getElementById("searchProgram").value;
    
        var maleRadio = document.getElementById("searchMaleRadio");
        var femaleRadio = document.getElementById("searchFemaleRadio");
        var otherRadio = document.getElementById("searchOtherRadio");
    
        var selectedGenderFilter = "";
    
        if (maleRadio.checked) {
            selectedGenderFilter = maleRadio.value;
        } else if (femaleRadio.checked) {
            selectedGenderFilter = femaleRadio.value;
        } else if (otherRadio.checked) {
            selectedGenderFilter = otherRadio.value;
        }
    
        var searchId = document.getElementById("searchId").value;
        var searchUser = document.getElementById("searchUser").value;
    
        var filteredData = data.filter(function (student) {
            if (majorSearch && student.major.toLowerCase().indexOf(majorSearch.toLowerCase()) === -1) {
                return false;
            }
            if (programSearch && student.program.toLowerCase().indexOf(programSearch.toLowerCase()) === -1) {
                return false;
            }
            if (selectedGenderFilter && student.selectedGender !== selectedGenderFilter) {
                return false;
            }
            if (searchId && student.sid.toLowerCase().indexOf(searchId.toLowerCase()) === -1) {
                return false;
            }
            if (searchUser && student.name.toLowerCase().indexOf(searchUser.toLowerCase()) === -1) {
                return false;
            }
            return true;
        });
    
        generatePaginationButtons(filteredData);
        displayRowsForPage(1, filteredData);
    
        maleRadio.checked = false;
        femaleRadio.checked = false;
        otherRadio.checked = false;
    });
    

    document.getElementById("cancel").addEventListener('click', function () {
        window.location.reload();
    });
}
else {
    window.location.href = 'log.html';
}