// from data.js
var tableData = data;

// YOUR CODE HERE!
//the table body
var tbody = document.getElementById('ufo-table'); 

//Loops through the tableData objects 
for (var i = 0; i < tableData.length; i++) {
    //new row 

    //Adds all elements from the object in the new row
    var tr = "<tr><td>" + tableData[i].datetime + "</td>" + 
    "<td>" + tableData[i].city + "</td>" + 
    "<td>" + tableData[i].state + "</td>" + 
    "<td>" + tableData[i].country + "</td>" + 
    "<td>" + tableData[i].shape + "</td>" + 
    "<td>" + tableData[i].durationMinutes + "</td>" + 
    "<td>" + tableData[i].comments + "</td></tr>";

    //Adds the table row to the table body
    tbody.innerHTML += tr;
}


// Based off of: https://www.w3schools.com/howto/howto_js_filter_table.asp (Daddy you can play around/edit variable names)
function filterTable() {
    // Declare variables 
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("datetime");
    filter = input.value.toUpperCase();
    table = document.getElementById("ufo-table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
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