"use strict";

/*

      Author: Yaseen
      Date:   25 march, 2024

   Filename:   lht_calendar.js  

   Function List:
   createCalendar(calDate)
      Creates the calendar table for the month specified in the
      calDate parameter. The current date is highlighted in 
      the table.

   calCaption(calDate)
      Writes the caption of the calendar table

   calWeekdayRow()
      Writes the title weekday rows in the calendar table

   daysInMonth(calDate)
      Returns the number of days in the month from calDate

   calDays(calDate)
      Writes the daily rows in the calendar table, highlighting calDate
	
*/
// Function to create the calendar
function createCalendar(calDate) {
   var calendarTable = document.createElement('table');
   calendarTable.id = "calendar_table"; // Adding the ID "calendar_table"
   calCaption(calDate, calendarTable);
   calWeekdayRow(calendarTable);
   calDays(calDate, calendarTable);
   document.querySelector('div#calendar').appendChild(calendarTable);
}

// Function to write the caption of the calendar table
function calCaption(calDate, table) {
   var monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
   ];
   var caption = monthNames[calDate.getMonth()] + " " + calDate.getFullYear();
   var captionElement = document.createElement('caption');
   captionElement.textContent = caption;
   captionElement.style.captionSide = "top";
   captionElement.style.textAlign = "center";
   captionElement.style.paddingBottom = "20px";
   captionElement.style.fontSize = "1.6em";
   captionElement.style.letterSpacing = "0.3em";
   table.appendChild(captionElement);
}

// Function to write the title weekday rows in the calendar table
function calWeekdayRow(table) {
   var weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
   var row = document.createElement('tr');
   row.classList.add('calendar_weekdays'); // Adding the class "calendar_weekdays"
   for (var i = 0; i < weekdays.length; i++) {
       var cell = document.createElement('th');
       cell.textContent = weekdays[i];
       row.appendChild(cell);
   }
   table.appendChild(row);
}

// Function to return the number of days in the month
function daysInMonth(calDate) {
   return new Date(calDate.getFullYear(), calDate.getMonth() + 1, 0).getDate();
}

// Function to write the daily rows in the calendar table, highlighting calDate
function calDays(calDate, table) {
   var firstDay = new Date(calDate.getFullYear(), calDate.getMonth(), 1).getDay();
   var totalDaysInMonth = daysInMonth(calDate);
   var date = 1;
   for (var i = 0; i < 6; i++) {
       var row = document.createElement('tr');
       row.classList.add('calendar_dates'); // Adding the class "calendar_dates"
       for (var j = 0; j < 7; j++) {
           var cell = document.createElement('td');
           if (i === 0 && j < firstDay) {
               // Empty cells before the first day of the month
               cell.textContent = "";
           } else if (date > totalDaysInMonth) {
               // Empty cells after the last day of the month
               cell.textContent = "";
           } else {
               cell.textContent = date;
               var eventHtml = dayEvent[date];
               if (eventHtml) {
                   var eventDiv = document.createElement('div');
                   eventDiv.innerHTML = eventHtml;
                   cell.appendChild(eventDiv);
               }
               if (calDate.getFullYear() === currentDate.getFullYear() && calDate.getMonth() === currentDate.getMonth() && date === currentDate.getDate()) {
                   cell.id = "calendar_today"; // Adding the ID "calendar_today"
               }
               date++;
           }
           row.appendChild(cell);
       }
       table.appendChild(row);
   }
}


// Call createCalendar function with the current date
var currentDate = new Date();
createCalendar(currentDate);
