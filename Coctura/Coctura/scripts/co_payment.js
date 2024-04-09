"use strict";

/*

   Payment Form Script
   
   Author: 
   Date:   
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load",function(){
   var formData = location.search.slice(1)
   formData = formData.replace(/\+/g," ")
   formData = decodeURIComponent(formData)
   var formField = formData.split(/[&=]/g)

   this.document.forms.order.elements.orderDate.value = formField[1]
   this.document.forms.order.elements.modelName.value = formField[5]
   this.document.forms.order.elements.qty.value = formField[7]
   this.document.forms.order.elements.initialCost.value = formField[9]
   this.document.forms.order.elements.protectionName.value = formField[13]
   this.document.forms.order.elements.protectionCost.value = formField[15]
   this.document.forms.order.elements.subtotal.value = formField[17]
   this.document.forms.order.elements.salesTax.value = formField[19]
   this.document.forms.order.elements.totalCost.value = formField[21]
})


// Function to run validation tests when the submit button is clicked
function runSubmit() {
   // Validate form fields before submitting
   if (!validateCVC() || !validateMonth() || !validateYear() || !validateNumber() || !validateCredit() || !validateName()) {
      // If any validation fails, prevent form submission
      alert("Please correct the errors before submitting.");
      return false;
   }

   // If all validations pass, submit the form
   alert("Submitted Order Data");
   return true;
}

// Function to validate the credit card CVC number
function validateCVC() {
   var cvcField = document.getElementById("cvc");
   var cvcValue = cvcField.value;

   // Check if CVC is empty or not a number
   if (cvcValue === "" || isNaN(cvcValue)) {
      cvcField.setCustomValidity("Please enter a valid CVC.");
      return false;
   }

   // Check if CVC length is valid
   if (cvcValue.length !== 3 && cvcValue.length !== 4) {
      cvcField.setCustomValidity("CVC must be 3 or 4 digits.");
      return false;
   }

   // CVC is valid
   cvcField.setCustomValidity("");
   return true;
}

// Function to validate the expiration month of the credit card
function validateMonth() {
   var monthField = document.getElementById("expMonth");
   var monthValue = monthField.value;

   // Check if month is not selected
   if (monthValue == "mm" || monthValue == "")  {
      monthField.setCustomValidity("Please select a month.");
      return false;
   }

   // Month is valid
   monthField.setCustomValidity("");
   return true;
}

// Function to validate the expiration year of the credit card
function validateYear() {
   var yearField = document.getElementById("expYear");
   var yearValue = yearField.value;

   // Check if year is not selected
   if (yearValue == "yy" || yearValue == "") {
      yearField.setCustomValidity("Please select a year.");
      return false;
   }

   // Year is valid
   yearField.setCustomValidity("");
   return true;
}


// Function to validate the card number
// Function to validate the card number using the Luhn algorithm
function validateNumber() {
   var cardNumber = document.getElementById("cardNumber").value;

   // Remove non-digit characters
   cardNumber = cardNumber.replace(/\D/g, '');

   // Check if the card number is empty or not a valid length
   if (cardNumber === "" || cardNumber.length < 13 || cardNumber.length > 19) {
      document.getElementById("cardNumber").setCustomValidity("Please enter a valid credit card number.");
      return false;
   }

   // Perform Luhn algorithm validation
   var sum = 0;
   var doubleUp = false;
   for (var i = cardNumber.length - 1; i >= 0; i--) {
      var digit = parseInt(cardNumber.charAt(i), 10);
      if (doubleUp) {
         digit *= 2;
         if (digit > 9) {
            digit -= 9;
         }
      }
      sum += digit;
      doubleUp = !doubleUp;
   }
   if (sum % 10 !== 0) {
      document.getElementById("cardNumber").setCustomValidity("Invalid credit card number.");
      return false;
   }

   // Card number is valid
   document.getElementById("cardNumber").setCustomValidity("");
   return true;
}

// Function to validate the name on the credit card
function validateName() {
   var cardNameField = document.getElementById("cardName");
   var cardNameValue = cardNameField.value;

   // Check if name is empty
   if (cardNameValue === "") {
      cardNameField.setCustomValidity("Please enter the name on the card.");
      return false;
   }

   // Name is valid
   cardNameField.setCustomValidity("");
   return true;
}

// Function to sum the digits characters in a text string
function sumDigits(numStr) {
   // Add logic to sum digits
}

// Function to check if the given number satisfies the Luhn Algorithm
function luhn(idNum) {
   // Add Luhn Algorithm validation logic
}