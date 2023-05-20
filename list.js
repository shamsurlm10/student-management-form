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

// Iterate over each object in the data array
for (var i = 0; i < data.length; i++) {

    var student = data[i];
    var row = document.createElement("tr");

    // Create and append cells to the row
    for (var key in student) {
        //   if (student.hasOwnProperty(key)) {
        var cell = document.createElement("td");
        cell.textContent = student[key];
        row.appendChild(cell);
        // }

        // Append the row to the table body
        tableBody.appendChild(row);
    }
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
}