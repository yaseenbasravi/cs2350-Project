"use strict";

/*

   Author: Yaseen
   Date:   6th April, 2024  

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the items list are based on the element names
      specified in the headings array


*/

function makeOutline() {
    var outline = document.getElementById('outline');
    
    var source = document.getElementById('doc');

    var mainHeading = document.createElement('h1');
    var outlineList = document.createElement('ol');
    var headingText = document.createTextNode('Outline');

    mainHeading.appendChild(headingText);
    outline.appendChild(mainHeading);
    outline.appendChild(outlineList);

    createList(source,outlineList);

}

function createList(source, outlineList) {

   var headings = ["H1","H2","H3","H4"];
   var prevLevel = 0;
   var headNum = 0;
   // Loop through each heading type
   for(var n= source.firstChild; n!== null;n = n.nextSibling)
   {
      var headLevel = headings.indexOf(n.nodeName);     
      if(headLevel !== -1)
      {
         
         headNum++;
         if(n.hasAttribute('id') === false)
         {
            n.setAttribute('id','head'+headNum);
         }

         var listElem = document.createElement('li');
         var listLink = document.createElement('a');
         listLink.innerHTML  = n.innerHTML;
         listLink.setAttribute('href','#'+n.id);
         listElem.appendChild(listLink);


         if(headLevel === prevLevel)
         {
            outlineList.appendChild(listElem);
         }
         else if(headLevel > prevLevel)
         {
            var nestedList = document.createElement('ol');
            nestedList.appendChild(listElem);
            outlineList.lastChild.appendChild(nestedList);
            outlineList = nestedList;
         }
         else
         {
            var level = prevLevel - headLevel;
            for(var i = 1;i<= level;i++)
            {
               outlineList = outlineList.parentNode.parentNode;
            }
            outlineList.appendChild(listElem);
         }
         prevLevel = headLevel;
      }
   }
}


window.addEventListener("load", makeOutline);
