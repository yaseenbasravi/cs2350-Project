"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: Yaseen
   Date:   5th April, 2024

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/










         
/* ================================================================= */

// function checkSolution() {
//    /* Set the initial solved state of the puzzle to true */
//    var solved = true;

//    /* Loop through the puzzle cells, exiting when an incorrect
//       cell is found, setting the solved variable to false */

//    for (var i = 0; i < allCells.length; i++) {
//       var cellColor = allCells[i].style.backgroundColor;
//       var cellClass = allCells[i].className;

//       /* A cell is incorrect if it is in the block class and is not black
//          or in the circle class and is not white */
//       if ( (cellClass == "blocks" && cellColor !== "black") || 
//            (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
//          solved = false;
//          break;
//       }
//    }

//    /* If solved is still true after the loop, display an alert box */
//    if (solved) alert("Congratulations! You solved the puzzle!");
// }

// function showSolution () {
//    for (var i = 0; i < allCells.length; i++) {
//       allCells[i].style.color = "";
//       allCells[i].style.backgroundColor = "";
//       allCells[i].style.borderRadius = "";
//    };   
// }

// function drawHitori(numbers, blocks, rating) {

//    /* Initial HTML String for the Hitori Puzzle */
//    var htmlString = "";

//    /* numbers is a multidimensional array containing the
//       Hitori numbers; blocks is a corresponding 
//       multidimensional array containing the location of the
//       blocks which are indicated by the # character.
//       Non-blocking cells are indicated by a blank character.
//   */

//    /* Create a Web table with the id, hitoriGrid, containing
//       the numeric values. Blocks cells have the class name,
//       blocks. Non-blocking cells have the class name, circles
//   */

//    var totalRows = numbers.length;
//    var totalCols = numbers[0].length;
//    htmlString = "<table id='hitoriGrid'>";
//    htmlString += "<caption>" + rating + "</caption>";
   

//    for (var i = 0; i < totalRows; i++) {
//       htmlString += "<tr>";

//       for (var j = 0; j < totalCols; j++) {
//          if (blocks[i][j] == "#") htmlString += "<td  class='blocks'>"
//          else htmlString += "<td class='circles'>";

//          htmlString += numbers[i][j];
//          htmlString +="</td>";
//       }

//       htmlString += "</tr>";
//    }

//    htmlString += "</table>";

//    return htmlString;
// }

"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Review Assignment

   Author: Yaseen
   Date:   5th April, 2024

   Global Variables
   ================
   
   allCells
      References the TD cells within the Hitori table grid.   
      
   Function List
   =============

   startUp()
      Run when the web page is loaded; displays puzzle 1
      and loads the event handlers for the web page buttons.
      
   setupPuzzle()
      Sets up a new puzzle, adding the event handlers for
      every puzzle cell.      

   switchPuzzle(e)
      Swaps one puzzle for another based on the button being clicked
      by the user. Confirms the change before swapping in the
      new puzzle.

   findErrors()
      Highlights the errors in the Hitori puzzle in a red font.
      
   showSolution()
      Shows the solution to the Hitori puzzle
    
   checkSolution()
      Checks the current user's puzzle to verify whether it contains
      the complete and correct solution.

   drawHitori(numbers, blocks, rating)
      Returns a text string of the HTML code to
      display a Hitori puzzle table based on the contents of
      the numbers, blocks, and rating parameters.
	
*/



// Global Variable
var allCells; // References the TD cells within the Hitori table grid.

// Run when the web page is loaded; displays puzzle 1
// and loads the event handlers for the web page buttons.
function startUp() {
   setupPuzzle(hitori1Numbers, hitori1Blocks, hitori1Rating);
   var puzzleButtons = document.getElementsByClassName('puzzles');
   for(var i = 0; i < puzzleButtons.length; i++) {
      puzzleButtons[i].onclick = switchPuzzle;
   }
   document.getElementById('solve').onclick = showSolution;
   document.getElementById('check').onclick = checkSolution;
}

// Sets up a new puzzle, adding the event handlers for every puzzle cell.
function setupPuzzle(numbers, blocks, rating) {
   var puzzleTable = document.getElementById("puzzle");
   puzzleTable.innerHTML = drawHitori(numbers, blocks, rating);

   allCells = document.querySelectorAll("#hitoriGrid td");
   for(var i = 0; i < allCells.length; i++) {
      allCells[i].onclick = toggleCell;
      // Set all cells to have white background color and no border radius
      allCells[i].style.backgroundColor = "white";
      allCells[i].style.borderRadius = "0";
   }
}

// Swaps one puzzle for another based on the button being clicked by the user.
// Confirms the change before swapping in the new puzzle.
function switchPuzzle(e) {
   var confirmation = confirm("You will lose all of your work on the puzzle! Continue?");
   if (confirmation) {
      var puzzleNumber = e.target.value; // Get the puzzle number from the button value
      // Add logic to swap puzzles based on the puzzle number
      console.log("Swapping to Puzzle " + puzzleNumber);
      switch(puzzleNumber)
      {
         case "Puzzle 1":
            setupPuzzle(hitori1Numbers, hitori1Blocks, hitori1Rating);
            console.log('case 1')
            break;
         case "Puzzle 2":
            setupPuzzle(hitori2Numbers, hitori2Blocks, hitori2Rating);
            console.log('case 2')
            break;
         case "Puzzle 3":
            setupPuzzle(hitori3Numbers, hitori3Blocks, hitori3Rating);
            console.log('case 3')
            break;
      }
   }
}


// Highlights the errors in the Hitori puzzle in a red font.
function findErrors() {
   for(var i = 0; i < allCells.length; i++) {
      var cellColor = allCells[i].style.backgroundColor;
      var cellClass = allCells[i].className;

      if((cellClass == "blocks" && cellColor !== "black") || 
         (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
         allCells[i].style.color = "red";
      }
   }
}

// Removes highlighting from all cells
function removeHighlighting() {
   for(var i = 0; i < allCells.length; i++) {
      allCells[i].style.color = "";
   }
}

// Shows the solution to the Hitori puzzle
function showSolution() {
   for(var i = 0; i < allCells.length; i++) {
      // Restore original color of cells along with box/circle shape
      allCells[i].style.color = "";
      allCells[i].style.backgroundColor = "";
      allCells[i].style.borderRadius = "";
   }
}

// Checks the current user's puzzle to verify whether it contains the complete and correct solution.
// function checkSolution() {
//    var solved = true;
//    for(var i = 0; i < allCells.length; i++) {
//       var cellColor = allCells[i].style.backgroundColor;
//       var cellClass = allCells[i].className;

//       if((cellClass == "blocks" && cellColor !== "white") || 
//          (cellClass == "circles" && cellColor !== "rgb(101, 101, 101)")) {
//          solved = false;
//          break;
//       }
//    }
//    if(solved) alert("Congratulations! You solved the puzzle!");
// }
function checkSolution() {
   for (var i = 0; i < allCells.length; i++) {
      if (allCells[i].classList.contains("blocks") && allCells[i].style.backgroundColor !== "white") {
         allCells[i].style.color = "red";
      }
   }
}

// Returns a text string of the HTML code to display a Hitori puzzle table based on the contents of the numbers, blocks, and rating parameters.
function drawHitori(numbers, blocks, rating) {
   var htmlString = "";
   var totalRows = numbers.length;
   var totalCols = numbers[0].length;
   htmlString = "<table id='hitoriGrid'>";
   htmlString += "<caption>" + rating + "</caption>";

   for(var i = 0; i < totalRows; i++) {
      htmlString += "<tr>";

      for(var j = 0; j < totalCols; j++) {
         if(blocks[i][j] == "#") htmlString += "<td class='blocks'>";
         else htmlString += "<td class='circles'>";
         htmlString += numbers[i][j];
         htmlString += "</td>";
      }

      htmlString += "</tr>";
   }

   htmlString += "</table>";
   return htmlString;
}

function toggleCell(e) {
   // Prevent default action of the event
   e.preventDefault();

   // Check if shift key is pressed
   var isShiftPressed = e.shiftKey;

   // Check if alt key is pressed
   var isAltPressed = e.altKey;

   // Toggle background color and border shape based on key pressed
   if (isShiftPressed) {
      // Change background to black and add circle border shape
      e.target.style.backgroundColor = "black";
      e.target.style.borderRadius = "50%";
   } else if (isAltPressed) {
      // Reset background to white and remove border shape
      e.target.style.backgroundColor = "white";
      e.target.style.borderRadius = "0";
   } else {
      // Toggle background color to grey and add circle border shape
      if (e.target.style.backgroundColor === "grey") {
         // If already grey, reset to default (white)
         e.target.style.backgroundColor = "white";
         e.target.style.borderRadius = "0";
      } else {
         e.target.style.backgroundColor = "grey";
         e.target.style.borderRadius = "50%";
      }
   }
}



// Run the startUp function when the web page is loaded
window.onload = startUp;
