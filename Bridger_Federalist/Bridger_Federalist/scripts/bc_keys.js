"use strict";

/*

   Author: Yaseen
   Date:   7th april

   Filename: bc_keys.js

   Functions
   =========
   
   findKeyWords()
      Locate the keywords in the article indicated by the <dfn> tag
      and add those keywords in alphabetical order to a keyword box.
      
   makeKeyStyles()
      Create an embedded style sheet for the keyword box.

      
   replaceWS(textStr)
      Replaces occurences of one or more consecutive white space
      characters with the "_" character.

*/

/*Supplied Functions*/

function replaceWS(textStr) {
   var revText = textStr.replace(/\s+/g,"_");
   return revText;
}

// Function to find keywords in the article and add them to a keyword box
function findKeyWords() {
   var dfnTags = document.getElementsByTagName('dfn'); // Get all <dfn> tags
   var keywords = []; // Array to store keywords
   
   // Loop through each <dfn> tag
   for (var i = 0; i < dfnTags.length; i++) {
      keywords.push(dfnTags[i].textContent); // Add the text content of the <dfn> tag to the keywords array
   }
   
   // Sort the keywords alphabetically
   keywords.sort();
   
   // Get the keyword box element
   var keywordBox = document.getElementById('keywords');
   
   // Clear any existing content in the keyword box
   keywordBox.innerHTML = '';
   var mainHeading = document.createElement('h1');
   mainHeading.textContent = "Keyword List";
   keywordBox.appendChild(mainHeading);
   // Create an unordered list element to hold the keywords
   var keywordList = document.createElement('ul');
   
   // Loop through the sorted keywords array
   for (var j = 0; j < keywords.length; j++) {
      // Create list item elements for each keyword and append them to the keyword list
      var listItem = document.createElement('li');
      listItem.textContent = keywords[j];
      keywordList.appendChild(listItem);
   }
   
   // Append the keyword list to the keyword box
   keywordBox.appendChild(keywordList);
}

// Function to create an embedded style sheet for the keyword box
function makeKeyStyles() {
   // Create a style element
   var styleElement = document.createElement('style');
   
   // Set the style element's type attribute
   styleElement.type = 'text/css';
   
   // Define the CSS rules for the keyword box
   var styles = `
      aside#keywords {
         float: right;
         width: 320px;
         margin: 28px 15px 20px 20px;
         border: 4px solid rgb(101, 101, 101);
         padding: 10px;
      }
      
      aside#keywords h1 {
         font-size: 2em;
         margin: 5px;
         text-align: center;
      }
      
      aside#keywords ul {
         margin-left: 20px;
         font-size: 1.2em;
      }
      
      aside#keywords ul li {
         line-height: 1.5em;
      }
      
      aside#keywords ul li a {
         text-decoration: none;
         color: rgb(101, 101, 101);
      }
   `;
   
   // Append the CSS rules to the style element
   styleElement.appendChild(document.createTextNode(styles));
   
   // Append the style element to the document's head
   document.head.appendChild(styleElement);
}

// Call the functions when the window is fully loaded
window.addEventListener('load', function() {
   findKeyWords();
   makeKeyStyles();
});
