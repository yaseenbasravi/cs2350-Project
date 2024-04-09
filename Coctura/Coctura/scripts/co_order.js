"use strict";

/*

   Order Form Script
   
   Author: 
   Date:   
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

// Function to calculate the cost of the customer order
function calcOrder() {
   // Retrieve input values
   var modelPrice = parseFloat(document.getElementById("model").value);
   var qty = parseInt(document.getElementById("qty").value);
   var protectionCost = parseFloat(document.querySelector('input[name="protection"]:checked').value);
   
   // Calculate subtotal
   var subtotal = modelPrice * qty;
   
   // Calculate tax (assuming 5%)
   var tax = subtotal * 0.05;
   
   // Calculate total cost
   var totalCost = subtotal + tax + protectionCost;
   
   // Display calculated values
   document.getElementById("initialCost").value = formatUSACurrency(modelPrice);
   document.getElementById("subtotal").value = formatUSACurrency(subtotal);
   document.getElementById("salesTax").value = formatUSACurrency(tax);
   document.getElementById("protectionCost").value = formatUSACurrency(protectionCost);
   document.getElementById("totalCost").value = formatUSACurrency(totalCost);
}

// Function to format a numeric value with specified decimals
function formatNumber(val, decimals) {
   return val.toFixed(decimals);
}

// Function to format a value as U.S.A. currency
function formatUSACurrency(val) {
   return "$" + formatNumber(val, 2);
}

// Function to get the current date in proper format
function getCurrentDate() {
  var currentDate = new Date();
  var day = currentDate.getDate();
  var month = currentDate.getMonth() + 1;
  var year = currentDate.getFullYear();
  
  // Format day and month with leading zeros if necessary
  if (day < 10) {
      day = "0" + day;
  }
  if (month < 10) {
      month = "0" + month;
  }
  
  // Return the formatted date string
  return month + "/" + day + "/" + year;
}

// Function to display the current date in the order form
function displayCurrentDate() {
  var currentDate = getCurrentDate();
  document.getElementById("orderDate").value = currentDate;
}

// Call the displayCurrentDate function when the page is loaded
window.onload = function() {
  displayCurrentDate();
  
  // Add event listeners to input fields
  document.getElementById("model").addEventListener("change", calcOrder);
  document.getElementById("qty").addEventListener("change", calcOrder);
  var protectionRadios = document.querySelectorAll('input[name="protection"]');
  protectionRadios.forEach(function(radio) {
      radio.addEventListener("change", calcOrder);
  });
};