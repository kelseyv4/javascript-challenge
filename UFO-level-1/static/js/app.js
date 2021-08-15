
// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
//      appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment at the very least.
// Use a date form in your HTML document and write JavaScript code that will listen for events and 
//      search through the date/time column to find rows that match user input.
// from data.js
var tableData = data;
console.log(tableData)

// YOUR CODE HERE!
var tbody = d3.select("tbody");

// begin function to create the table.
function createTable (data) {
    tbody.html("");
    data.forEach(( row ) => {
        var datarow = tbody.append("tr");
        Object.values(row).forEach(( value ) => {
            var cell = datarow.append("td");
            cell.text(value)
        })
    })
}
// Call the function to display data in the HTML 
createTable(tableData);

// Create a function to filter the javascript file when the search date button is pressed ; searching on the date/time values

function searchTable () {
    var date = d3.select("#datetime").property("value");
    if (date)  {
        var filterdata = tableData.filter(row => row.datetime === date);
    } 
    console.log(filterdata);
    createTable(filterdata);
}

// Call the function to run the filter when the search button is clicked by the user
d3.selectAll("#filter-btn").on("click", searchTable);