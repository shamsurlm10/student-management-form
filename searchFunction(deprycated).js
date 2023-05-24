function searchFunction() {
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

    var rowsPerPage = 4;
    var currentPage = 1;

    // Function to display the rows for the current page
    function displayRowsForPage(pageNumber, rows) {
        var startIndex = (pageNumber - 1) * rowsPerPage;
        var endIndex = startIndex + rowsPerPage;

        var rowsToDisplay = rows.slice(startIndex, endIndex);
        tableBody.innerHTML = '';

        // Add the rows to the table body
        rowsToDisplay.forEach(function (row) {
            tableBody.appendChild(row);
        });
    }

    // Function to generate the pagination buttons
    function generatePaginationButtons(rows) {
        var totalPages = Math.ceil(rows.length / rowsPerPage);
        var paginationContainer = document.getElementById('pagination-container');
        paginationContainer.innerHTML = '';

        for (var i = 1; i <= totalPages; i++) {
            var button = document.createElement('button');
            button.innerHTML = i;
            button.addEventListener('click', function (event) {
                var pageNumber = parseInt(event.target.innerHTML);
                currentPage = pageNumber;
                displayRowsForPage(currentPage, rows);
            });
            paginationContainer.appendChild(button);
        }
    }

    //Function to initialize the student table and pagination
    function initializeStudentTable() {
        var rows = Array.from(document.getElementById('student-table-body').getElementsByTagName('tr'));
        generatePaginationButtons(rows);
        displayRowsForPage(currentPage, rows);
    }

}

    // Show and Hide Advance Search
    // function showSearchDiv() {
    //     document.getElementById('searchDiv').style.display = "block";
    //     document.getElementById('showButton').style.display = "none";
    // }

    // function closeSearchDiv() {
    //     document.getElementById('searchDiv').style.display = "none";
    //     document.getElementById('showButton').style.display = "block";
    // }