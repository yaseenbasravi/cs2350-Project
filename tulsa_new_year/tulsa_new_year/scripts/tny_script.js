"use strict";
/*
   Countdown Clock
   Author: Yaseen
   Date:   24 march, 2024

*/

//adding alert upon page load
window.alert("Welcome to tulsa")

setInterval(runClock,1000)

function runClock()
{
      //Fetching current date
      var currentDate = new Date();
      var dateStr = currentDate.toLocaleDateString()
      var timeStr = currentDate.toLocaleTimeString()

      //Calculating time until next year
      var newYear = new Date("January 1, 2024");
      var nextYear = currentDate.getFullYear()+1;
      newYear.setFullYear(nextYear)
      var daysLeft = (newYear - currentDate) / (1000*60*60*24)
      var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24
      var minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60
      var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60
      console.log(nextYear)
      console.log(daysLeft)

      document.getElementById("dateNow").innerHTML = dateStr+"<br/>"+timeStr;

      document.getElementById("days").textContent = Math.floor(daysLeft);
      document.getElementById("hrs").textContent = Math.floor(hrsLeft);
      document.getElementById("mins").textContent = Math.floor(minsLeft);
      document.getElementById("secs").textContent = Math.floor(secsLeft);
}
