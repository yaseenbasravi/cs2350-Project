"use strict";

/*

   Author: Yaseen
   Date:   6th April, 2024
   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   from buttons to allow the user to switch between web
   view and page view
   
*/

function setupstyles() {

   //Create <link> element for style sheet
   
   var pageStyle = document.createElement("link"); 
   pageStyle.setAttribute("href", "styles/bc_page.css"); 
   pageStyle.setAttribute("rel", "stylesheet"); 
   pageStyle.setAttribute("disabled", "disabled");
   
   //Append that link elemnet to the document <head> 
   document.head.appendChild(pageStyle); 
   pageStyle.disabled = true;
   
   //Insert buttons for the style switcher
   
   var buttonDIV = document.createElement("div"); 
   buttonDIV.setAttribute("id", "styleButtons");
   
   var webButton= document.createElement("input"); 
   webButton.setAttribute("type", "button");
   webButton.setAttribute("value", "web View");
   
   var pageButton = document.createElement("input"); pageButton.setAttribute("type", "button"); 
   pageButton.setAttribute("value", "Page View");
   
   buttonDIV.appendChild(webButton); buttonDIV.appendChild(pageButton);
   
   document.body.insertBefore(buttonDIV, document.body.firstChild)

   //Add our style rules to the embedded stylesheet

   document.styleSheets[document.styleSheets.length-1].insertRule(
   "div#styleButtons{\
   position: fixed; \ }",0);  

   document.styleSheets[document.styleSheets.length-1].insertRule( 
      "div#styleButtons input {\
       background-color:rgba(68,94,186,0.6);\
       border: 3px solid rgba(0,24,123,0.6);\
       border-radius: 50%;\
       cursor: pointer;\
       color: white;\
       display: inline-block;\
       font-size: 1.2em;\
       height: 60px;\
       argin: 5px 10px;\
       width: 100px;\
      }",1);
   
   document.styleSheets[document.styleSheets.length-1].insertRule( "@media print {\
   div#styleButtons{\
   display: none;\
   }",2);
   
   //Turn the Page View Style to off and on
   
   webButton.onclick = function() {    
   
   pageStyle.disabled = true; }
   
   pageButton.onclick = function()
   {

      pageStyle.disabled = false;
   }
   
}


// Call the setupStyles function when the window loads
window.addEventListener('load', setupstyles);
