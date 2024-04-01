// arrays.js - Yaseen - March 26, 2024

// Part 1: Declare, Initialize and Display Arrays

// Declare and initialize arrays
var familyNames = ["Walter", "Sally", "Marcus", "Scott", "Carol", "John", "Julie"];
var relationships = ["Uncle", "Mother", "Father", "Brother", "Sister", "Cousin", "Cousin"];

// Create a table dynamically
var familyTable = "<table><tr><th>Name</th><th>Relationship</th></tr>";
for (var i = 0; i < familyNames.length; i++) {
    familyTable += "<tr><td>" + familyNames[i] + "</td><td>" + relationships[i] + "</td></tr>";
}
familyTable += "</table>";

// Display the table in the div with id="family"
document.getElementById("family").innerHTML = familyTable;

// Part 2: Select Items From an Array

// Declare an empty array
var colors = [];

// Add colors to the array using push method
colors.push("red", "green", "purple", "brown", "yellow", "pink", "blue", "orange");
// Add colors that start with p to an array
var pColors = [];
for (var i = 0; i < colors.length; i++) {
    if (colors[i][0].toLowerCase() === 'p') {
        pColors.push(colors[i]);
    }
}

// Add colors that do not start with b to an array
var nonBColors = [];
for (var i = 0; i < colors.length; i++) {
    if (colors[i][0].toLowerCase() !== 'b') {
        nonBColors.push(colors[i]);
    }
}

// Add colors that contain the letter n to an array using filter method
var filterColors = colors.filter(function(color) {
    return color.toLowerCase().includes('n');
});

// Generate unordered lists for each category of colors
function generateColorList(colors, containerId) {
    var colorList = "<ul>";
    for (var i = 0; i < colors.length; i++) {
        colorList += "<li style='background-color: " + colors[i] + ";'>" + colors[i] + "</li>";
    }
    colorList += "</ul>";
    document.getElementById(containerId).innerHTML = colorList;
}

// Display color lists in respective sections
generateColorList(colors, "allColors");
generateColorList(pColors, "pColors");
generateColorList(nonBColors, "nonBColors");
generateColorList(filterColors, "filterColors");


// Part 3: Sorting Arrays

// Two arrays
var stringArray = ["Hotel", "Alpha", "Zebra", "Tagno", "Tango"];
var numberArray = [7, -5, 18, 3, 12];

// Display the contents of the arrays in their original order
var twoArraysOriginal = "<p>String Array: " + stringArray.toString() + "</p>";
twoArraysOriginal += "<p>Number Array: " + numberArray.toString() + "</p>";

// Display the original arrays in the div with id="twoArrays"
document.getElementById("twoArrays").innerHTML = twoArraysOriginal;

// Three sorted arrays
// Sort the arrays
stringArray.sort();
numberArray.sort();

// Display the contents of the arrays in their sorted order
var sortedArrays = "<p>Sorted String Array: " + stringArray.toString() + "</p>";
sortedArrays += "<p>Sorted Number Array: " + numberArray.toString() + "</p>";

// Display the sorted arrays in the div with id="sortedArrays"
document.getElementById("sortedArrays").innerHTML = sortedArrays;

// A sorted number array
// Comparison function to sort numbers numerically
function compareNumbers(a, b) {
    return a - b;
}

// Sort the number array numerically
numberArray.sort(compareNumbers);

// Display the sorted number array
var sortedNumberArray = "<p>Sorted Number Array (Numerically): " + numberArray.toString() + "</p>";

// Display the sorted number array in the div with id="sortedNumberArray"
document.getElementById("sortedNumberArray").innerHTML = sortedNumberArray;

// Part 4: Add Dates to the Footer Section

// Declare a variable to store the last modified date
var lastModifiedDate = document.lastModified;

// Declare a variable to store the current date
var currentDate = new Date();

// Create h4 elements for last modified date and current date
var lastModifiedHeader = document.createElement("h4");
lastModifiedHeader.textContent = "Last Modified: " + lastModifiedDate;

var currentDateHeader = document.createElement("h4");
currentDateHeader.textContent = "Current Date: " + currentDate.toLocaleDateString()+","+currentDate.toLocaleTimeString();

// Display the h4 elements in the footer with id="dates"
var datesFooter = document.getElementById("dates");
datesFooter.appendChild(lastModifiedHeader);
datesFooter.appendChild(currentDateHeader);