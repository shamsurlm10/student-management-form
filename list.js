var data = JSON.parse(localStorage.getItem("studentData"));


var tableBody = document.getElementById("student-table-body");
var tableSearchBody = document.getElementById("student-table-search-body");

for (var i = 0; i < data.length; i++) {
    var student = data[i];
    var row = document.createElement("tr");

    // Create and append cells to the row
    for (var key in student) {
        if (student.hasOwnProperty(key) && key !== 'city' && key !== 'country' && key !== 'parent' && key !== 'birthDate' && key !== 'selectedMarital' && key !== 'comment') {
            var cell = document.createElement("td");
            cell.textContent = student[key];
            row.appendChild(cell);
        }
    }

    // Create update and delete buttons
    var updateButtonCell = document.createElement("td");
    var updateButton = document.createElement("button");
    updateButton.textContent = "Update";
    updateButton.addEventListener("click", function () {
        var row = this.parentNode.parentNode;
        var rowIndex = Array.from(tableBody.children).indexOf(row);

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
        var gender = data[rowIndex].selectedGender;

        var marriedRadio = document.getElementById("marriedRadio");
        var unmarriedRadio = document.getElementById("unmarriedRadio");
        var marital = data[rowIndex].selectedMarital;

        var program = document.getElementById("program");
        var major = document.getElementById("major");

        // var extraCurry = data[rowIndex].extraCurriculum;
        // console.log(extraCurry)
        var comment = document.getElementById("comment");

        name.value = data[rowIndex].name;
        address.value = data[rowIndex].address;
        city.value = data[rowIndex].city;
        country.value = data[rowIndex].country;
        parent.value = data[rowIndex].parent;
        phone.value = data[rowIndex].phone;
        email.value = data[rowIndex].email;
        sid.value = data[rowIndex].sid;
        birthDate.value = data[rowIndex].birthDate;
        enrollDate.value = data[rowIndex].enrollDate;
        program.value = data[rowIndex].program;
        major.value = data[rowIndex].major;
        comment.value = data[rowIndex].comment;


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
                selectedGender: selectedGender,
                selectedMarital: selectedMarital,
                program: program,
                major: major,
                extraCurriculum: extraCurriculum,
                comment: comment
            };
            // data.splice(rowIndex, 1);
            // data.splice(rowIndex, 1, student);
            var studentData = localStorage.getItem("studentData");
            if (!studentData) {
                studentData = [];
            } else {
                studentData = JSON.parse(studentData);
            }
            function saveStudentData(student) {
                studentData.splice(rowIndex, 1, student);
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
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        var row = this.parentNode.parentNode;
        var rowIndex = Array.from(tableBody.children).indexOf(row);
        $('#confirmationModal').modal('show');
        var deleteConfirmButton = document.getElementById('deleteConfirmButton');
        deleteConfirmButton.addEventListener("click", function () {
            data.splice(rowIndex, 1);
            localStorage.setItem("studentData", JSON.stringify(data));
            row.parentNode.removeChild(row);
            $('#confirmationModal').modal('hide');
        });
    });
    deleteButtonCell.appendChild(deleteButton);
    row.appendChild(deleteButtonCell);
    tableBody.appendChild(row);
}


function searchFunction() {
    // $("#student-table-body").remove();
    // input = document.getElementById("search");
    // filter = input.value;
    // var studentDataAlt = [];
    // for (var i = 0; i < data.length; i++) {
    //     var student = data[i];
    //     for (var key in student) {
    //         if (student.hasOwnProperty(key) && student[key].includes(filter)) {
    //             JSON.stringify(studentDataAlt.push(student));
    //         }
    //     }
    // }
    // console.log(studentDataAlt)

    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search");
    // sid = document.getElementById("sid");
    // sidFilter = sid.value;
    filter = input.value.toUpperCase();
    table = document.getElementById("student-table");
    tr = table.getElementsByTagName("tr");
    if (document.getElementById("filter").value === "name") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[0];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "address") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[1];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "phone") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[2];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "email") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[3];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "id") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[4];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "gender") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[6];
            if (td) {
                txtValue = td.textContent || td.innerText;
                console.log(txtValue)
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "program") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[7];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "major") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[8];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
    if (document.getElementById("filter").value === "extraCurry") {
        for (i = 0; i < tr.length; i++) {
            td = tr[i].getElementsByTagName("td")[9];
            if (td) {
                txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                } else {
                    tr[i].style.display = "none";
                }
            }
        }
    }
}