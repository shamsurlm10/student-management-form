
var data = localStorage.getItem("studentData");

var tableBody = document.getElementById("student-table-body");
console.log(data)
// Iterate over each object in the data array
data.forEach(function (student) {
    var row = document.createElement("tr");

    // Create and append cells to the row
    Object.keys(student).forEach(function (key) {
        var cell = document.createElement("td");
        cell.textContent = student[key];
        row.appendChild(cell);
    });

    // Append the row to the table body
    tableBody.appendChild(row);
});