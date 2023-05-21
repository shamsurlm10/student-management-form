var data = JSON.parse(localStorage.getItem("studentData"));

// var data1 = { "student": "" }
// data1.student = data


// var tableBody = document.getElementById("student-table-body");
// console.log(data)
// // Iterate over each object in the data array
// data.forEach(function (student) {
//     var row = document.createElement("tr");

//     // Create and append cells to the row
//     Object.keys(student).forEach(function (key) {
//         var cell = document.createElement("td");
//         cell.textContent = student[key];
//         row.appendChild(cell);
//     });

//     // Append the row to the table body
//     tableBody.appendChild(row);
// });

// Assuming you have the JSON array stored in a variable called 'data'
// var data = [
//     {
//         "name": "Md Shamsur Rahman",
//         "address": "Demra",
//         "phone": "01872228989",
//         "email": "shamur.works@gmail.com",
//         "sid": "201",
//         "enrollDate": "2023-05-15",
//         "program": "Under-graduation",
//         "major": "Computer Science",
//         "extraCurriculum": [
//             "sports",
//             "entertainment"
//         ]
//     },
//     {
//         "name": "Md Farhan Chawdhury",
//         "address": "Magbazar",
//         "phone": "01872545459",
//         "email": "farhan.works@gmail.com",
//         "sid": "202",
//         "enrollDate": "2023-05-15",
//         "program": "Under-graduation",
//         "major": "Computer Science",
//         "extraCurriculum": [
//             "sports",
//             "entertainment"
//         ]
//     }
// ];


// if (student.search(filter)==-1) {
//     alert("Not Found!!")
// }
// else{
//     var cell = document.createElement("td");
//     cell.textContent = student[key];
//     row.appendChild(cell);
//     tableBody.appendChild(row);
// }

var tableBody = document.getElementById("student-table-body");
var tableSearchBody = document.getElementById("student-table-search-body");

for (var i = 0; i < data.length; i++) {
    var student = data[i];
    var row = document.createElement("tr");

    // Create and append cells to the row
    for (var key in student) {
        if (student.hasOwnProperty(key)) {
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
        var phone = document.getElementById("phone");
        var email = document.getElementById("email");
        var sid = document.getElementById("sid");
        var enrollDate = document.getElementById("endate");
        var program = document.getElementById("program");
        var major = document.getElementById("major");


        name.value = data[rowIndex].name;
        address.value = data[rowIndex].address;
        phone.value = data[rowIndex].phone;
        email.value = data[rowIndex].email;
        sid.value = data[rowIndex].sid;
        enrollDate.value = data[rowIndex].enrollDate;
        program.value = data[rowIndex].program;
        major.value = data[rowIndex].major;


        $('#updateModal').modal('show');
        var updateConfirmButton = document.getElementById('updateConfirmButton');
        updateConfirmButton.addEventListener("click", function () {
            $('#updateConfirmButton').modal('hide');
                var name = document.getElementById("user").value;
                var address = document.getElementById("address").value;
                var phone = document.getElementById("phone").value;
                var email = document.getElementById("email").value;
                var sid = document.getElementById("sid").value;
                var enrollDate = document.getElementById("endate").value;
                var program = document.getElementById("program").value;
                var major = document.getElementById("major").value;

                var student = {
                    name: name,
                    address: address,
                    phone: phone,
                    email: email,
                    sid: sid,
                    enrollDate: enrollDate,
                    program: program,
                    major: major,
                };
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

// deleteButton.addEventListener("click", function () {
//     // Find the parent row and remove it
//     var row = this.parentNode.parentNode;
//     row.parentNode.removeChild(row);

//     // Find the index of the deleted row in the data array
//     var rowIndex = Array.from(tableBody.children).indexOf(row);

//     // Show the confirmation modal
//     $('#confirmationModal').modal('show');

//     // Handle the confirmation in the modal
//     var deleteConfirmButton = document.getElementById('deleteConfirmButton');
//     deleteConfirmButton.addEventListener("click", function () {
//         // Remove the corresponding object from the data array
//         data.splice(rowIndex, 1);

//         // Update the localStorage with the updated data
//         localStorage.setItem("studentData", JSON.stringify(data));

//         // Close the modal
//         $('#confirmationModal').modal('hide');
//     });
// });



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
// var data = JSON.parse(localStorage.getItem("studentData"));
// var tableBody = document.getElementById("student-table-body");
// var itemsPerPage = 4; // Number of items to display per page
// var currentPage = 1; // Current page

// function displayTable(page) {
//   tableBody.innerHTML = ""; // Clear the table body

//   var startIndex = (page - 1) * itemsPerPage; // Calculate the starting index
//   var endIndex = startIndex + itemsPerPage; // Calculate the ending index

//   // Iterate over each object in the data array within the current page range
//   for (var i = startIndex; i < endIndex && i < data.length; i++) {
//     var student = data[i];
//     var row = document.createElement("tr");

//     // Create and append cells to the row
//     for (var key in student) {
//       if (student.hasOwnProperty(key)) {
//         var cell = document.createElement("td");
//         cell.textContent = student[key];
//         row.appendChild(cell);
//       }
//     }

//     // Append the row to the table body
//     tableBody.appendChild(row);
//   }
// }

// function updatePagination() {
//   var paginationContainer = document.getElementById("pagination-container");
//   paginationContainer.innerHTML = ""; // Clear the pagination container

//   var totalPages = Math.ceil(data.length / itemsPerPage);

//   // Create the previous page link
//   var prevLink = document.createElement("a");
//   prevLink.href = "#";
//   prevLink.textContent = "«";
//   prevLink.addEventListener("click", function () {
//     if (currentPage > 1) {
//       currentPage--;
//       displayTable(currentPage);
//       updatePagination();
//     }
//   });
//   paginationContainer.appendChild(prevLink);

//   // Create the page links
//   for (var i = 1; i <= totalPages; i++) {
//     var pageLink = document.createElement("a");
//     pageLink.href = "#";
//     pageLink.textContent = i;
//     if (i === currentPage) {
//       pageLink.classList.add("active");
//     }
//     pageLink.addEventListener("click", function () {
//       var pageNumber = parseInt(this.textContent);
//       currentPage = pageNumber;
//       displayTable(currentPage);
//       updatePagination();
//     });
//     paginationContainer.appendChild(pageLink);
//   }

//   // Create the next page link
//   var nextLink = document.createElement("a");
//   nextLink.href = "#";
//   nextLink.textContent = "»";
//   nextLink.addEventListener("click", function () {
//     if (currentPage < totalPages) {
//       currentPage++;
//       displayTable(currentPage);
//       updatePagination();
//     }
//   });
//   paginationContainer.appendChild(nextLink);
// }

// // Initial display
// displayTable(currentPage);
// updatePagination();