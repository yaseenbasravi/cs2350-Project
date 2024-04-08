"use strict";

/*

  Author: Yaseen
  Date:   1st april, 2024 

   Global Variables
   ================
   
   puzzleCells
      References the TD cells within the Hanjie table grid.
   
   cellBackground
      Stores the current background color of the puzzle
      cells during the mouseover event.
      
      
   Function List
   =============

   init()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   swapPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   setBackground(e)
      Sets the background color of the puzzle cells during the mousedown
      event

   extendBackground(e)
      Extends the background color of the original puzzle cell during
      the mouse enter event.
      
   endBackground()
      Ends the action of extending the cell backgrounds in response to the
      mouseup event.

   drawPuzzle(hint, rating, puzzle)
      Returns a text string of the HTML code to
      display a hanjie Web table based on the contents of
      multi-dimensional array, puzzle.
	
*/
// Global Variables
var puzzleCells; // References the TD cells within the Hanjie table grid.
var cellBackground; // Stores the current background color of the puzzle cells during the mouseover event.
var curosrType;
// Function List

// Run when the web page is loaded; displays puzzle 1 and loads the event handlers for the web page buttons.
function init() {
   var puzzleTable = document.getElementById("puzzle");
   puzzleTable.innerHTML = drawPuzzle(puzzle1Hint,puzzle1Rating ,puzzle1);
   
   var puzzleButtons = document.getElementsByClassName('puzzles');
   for(var i=0;i<puzzleButtons.length;i++)
   {
      puzzleButtons[i].onclick = swapPuzzle;      
   }
   setupPuzzle();
    // Add event listener for mouseup event to end extending background
    document.addEventListener("mouseup", endBackground);
    document.getElementById("solve").addEventListener("click", function() {
      // Remove background colors from all puzzle cells
      for (var i = 0; i < puzzleCells.length; i++) {
          puzzleCells[i].style.backgroundColor = "";
      }
  });


  
}

// Sets up a new puzzle, adding the event handlers for every puzzle cell.
function setupPuzzle() {
   
   // Get all the puzzle cells
   puzzleCells = document.querySelectorAll("#puzzle td");
   var filled = document.querySelectorAll("#puzzle td.filled");
   var empty = document.querySelectorAll("#puzzle td.empty");


   for(var i=0;i<puzzleCells.length;i++)
   {
      puzzleCells[i].style.backgroundColor = "gold";
      puzzleCells[i].onmousedown = setBackground;
      curosrType = "url(images/jpf_pencil.png),pointer";
      puzzleCells[i].style.cursor = curosrType;
   }

   document.getElementById("peek").addEventListener("click", function(){
      console.log(filled)
      console.log(empty)
      //display incorrect white cells
      for(var i=0; i< filled.length;i++)
      {
         console.log(filled[i].style.backgroundColor)
         if(filled[i].style.backgroundColor == "rgb(255,255,255)")
         {
            filled[i].style.backgroundColor = "rgb(255,211,211)";
         }
      }

      //display incorrect empty cells
      for(var i=0; i< empty.length;i++)
      {
         console.log(empty[i].style.backgroundColor)
         if(empty[i].style.backgroundColor == "rgb(101,101,101)")
         {
            console.log('inside if')
            empty[i].style.backgroundColor = "rgb(255,101,101)";
         }
      }
   });
   
}

// Swaps one puzzle for another based on the button being clicked by the user.
// Confirms the change before swapping in the new puzzle.
function swapPuzzle(e) {
   var puzzleTable = document.getElementById("puzzle");
   
   var puzzleNumber = e.target.value; // Get the puzzle number from the button value
   // Add logic to swap puzzles based on the puzzle number
   console.log("Swapping to Puzzle " + puzzleNumber);
   switch(puzzleNumber)
   {
      case "Puzzle 1":
         puzzleTable.innerHTML = drawPuzzle(puzzle1Hint,puzzle1Rating ,puzzle1);
         break;
      case "Puzzle 2":
         puzzleTable.innerHTML = drawPuzzle(puzzle2Hint,puzzle2Rating ,puzzle2);
         break;
      case "Puzzle 3":
         puzzleTable.innerHTML = drawPuzzle(puzzle3Hint,puzzle3Rating ,puzzle3);
         break;
   }
   setupPuzzle();
}

// Sets the background color of the puzzle cells during the mousedown event
function setBackground(e) {
   event.preventDefault();
   
   cellBackground = e.target.style.backgroundColor; // Store the current background color
   if(event.shiftKey)
   {
      e.target.style.backgroundColor = "rgb(233,207,29)"; // Set the background color to black
      curosrType = "url(images/jpf_eraser.png),pointer"
   }
   else if(event.altKey)
   {
      e.target.style.backgroundColor = "rgb(255,255,255)"; // Set the background color to black
      curosrType = "url(images/cross.png),crosshair"
   }
   else
   {
      e.target.style.backgroundColor = "rgb(101,101,101)"; // Set the background color to black
      curosrType = "url(images/jpf_pencil.png),pointer"
   }
   
   
   for(var i=0;i<puzzleCells.length;i++)
   {
      puzzleCells[i].addEventListener("mouseenter",extendBackground)
      puzzleCells[i].style.cursor = curosrType;
   }
}

// Extends the background color of the original puzzle cell during the mouse enter event
function extendBackground(e) {
    e.target.style.backgroundColor = "rgb(101,101,101)"; // Set the background color to black
}

// Ends the action of extending the cell backgrounds in response to the mouseup event
function endBackground() {
   // Restore the original background color of the puzzle cells
   for (var i = 0; i < puzzleCells.length; i++) {
      puzzleCells[i].removeEventListener("mouseenter",extendBackground)
   }
}

// Run the init function when the web page is loaded
window.onload = init;





         
/* ================================================================= */

function drawPuzzle(hint, rating, puzzle) {
   
   /* Initial HTML string for the Hanjie Puzzle */
   var htmlString = "";

   /* puzzle is a multidimensional array containing the
      Hanjie puzzle layout. Marked cells are indicated by
      the # character. Empty cells are indicated by an
      empty text string. First, determine the number of rows
      and columns in the puzzle */

   var totalRows = puzzle.length;
   var totalCols = puzzle[0].length;

   /* Loop through the rows to create the rowCount array
      containing the totals for each row in the puzzle */

   var rowCount = [];
   var spaceCount;
   for (var i = 0; i < totalRows; i++) {
      rowCount[i]="";
      spaceCount = 0;

      for (var j = 0; j < totalCols; j++) {
         if (puzzle[i][j] === "#") {
            spaceCount++;
            if (j === totalCols-1) {
               rowCount[i] += spaceCount + "&nbsp;&nbsp;";
            }
         } else {
            if (spaceCount > 0) {
               rowCount[i] += spaceCount + "&nbsp;&nbsp;";
               spaceCount = 0;
            } 
         }    
      }

   }

   /* Loop through the columns to create the colCount array
      containing the totals for each column in the puzzle */

   var colCount = [];
   for (var j = 0; j < totalCols; j++) {
      colCount[j]="";
      spaceCount = 0;

      for (var i = 0; i < totalRows; i++) {
         if (puzzle[i][j] === "#") {
            spaceCount++;
            if (i === totalRows-1) {
               colCount[j] += spaceCount + "<br />";
            }
         } else {
            if (spaceCount > 0) {
               colCount[j] += spaceCount + "<br />";
               spaceCount = 0;
            } 
         }    
      }

   }

   /* Create a Web table with the id, hanjieGrid, containing
      headers with the row and column totals.
      Each marked cell has the class name, marked; each
      empty cell has the class name, empty */

   htmlString = "<table id='hanjieGrid'>";
   htmlString += "<caption>" + hint + " (" + rating + ")</caption>";
   htmlString += "<tr><th></th>";

   for (var j = 0; j < totalCols; j++) {
      htmlString += "<th class='cols'>" + colCount[j] + "</th>";
   }
   htmlString += "</tr>";

   for (var i = 0; i < totalRows; i++) {
      htmlString += "<tr><th class='rows'>&nbsp;" + rowCount[i]+"</th>";

      for (var j = 0; j<totalCols; j++) {
         if (puzzle[i][j] === "#") {
            htmlString += "<td  class='filled'></td>";
         }
         else {
            htmlString += "<td class='empty'></td>";
         }
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";

   return htmlString;
}