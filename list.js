// const arr = [
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
//             "entertaiment"
//         ],
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
//             "entertaiment"
//         ],
//     }
// ]

// for (var i = 0; i < arr.length; i++) {
//     var obj = arr[i];
//     for (var key in obj) {
//         var value = obj[key];
//         document.getElement("td").innerHTML = arr[0].name
//     }
// }
var jsonData = localStorage.getItem("studentData");
console.log(jsonData)
var arr = [];
var jsonObject = JSON.parse(jsonData);
arr.push(jsonObject);
console.log(arr)

var tableBody = document.getElementById("student-table-body");
arr.forEach(function (student) {
    var row = document.createElement("tr");
    Object.values(student).forEach(function (value) {
        var cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });
    tableBody.appendChild(row);
});

