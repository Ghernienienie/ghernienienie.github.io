"use strict";

/*=============================
    Name: Ghernie (2128681)   
    Class: DISM/FT/1A/05      
    Module: ST0501            
    CA2                       
    File: course.js        
    Date Created: 4 Aug 2021 
    Date Submitted: 6 Aug 2021
===============================*/

//    course_and_career.html

//Enable bootstrap tooltip

//Red hat hackers definition (tooltip)
$(function () {
  $('[data-toggle="tooltip"]').tooltip({
    placement: "top",
    html: true,
  });
});

//Function to show a digital clock 

runClock();
setInterval("runClock()", 1000);

showHackers();
setInterval("showHackers()", 1000);

clearHackers();
setInterval("clearHackers()", 6000);

function runClock() {
  var thisDay = new Date();
  var thisTime = thisDay.toLocaleTimeString();
  var displayTime = document.getElementById("time");
  displayTime.textContent = thisTime;
}


//This function generators icons that decrease in size according to counter value

var counter = 6;

function clearHackers() {
  var hackers = document.getElementById("hackers");
  hackers.innerHTML = `<i class="fas fa-user-secret fa-6x">`;
  counter = 6;
}

function showHackers() {
  var hackers = document.getElementById("hackers");
  --counter;
  hackers.innerHTML += `<i class="fas fa-user-secret fa-${counter}x">`;
}
