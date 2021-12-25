"use strict";

/*=============================
    Name: Ghernie (2128681)   
    Class: DISM/FT/1A/05      
    Module: ST0501            
    CA2                       
    File: current.js        
    Date Created: 4 Aug 2021 
    Date Submitted: 6 Aug 2021
===============================*/

//    current.html

//Image Map - current.html

//Loop through the image maps for responsiveness
for (let i = 1; i <= 3; ++i) {
  var x = document.querySelector(`map[name="image-map-${i}"]`);

  var Ghernie = x.querySelector("area.Ghernie");
  Ghernie.addEventListener("mouseover", displayGhernie);
  Ghernie.addEventListener("mouseout", clearWho);

  var Beatrice = x.querySelector("area.Beatrice");
  Beatrice.addEventListener("mouseover", displayBeatrice);
  Beatrice.addEventListener("mouseout", clearWho);

  var Darren = x.querySelector("area.Darren");
  Darren.addEventListener("mouseover", displayDarren);
  Darren.addEventListener("mouseout", clearWho);

  var Dominique = x.querySelector("area.Dominique");
  Dominique.addEventListener("mouseover", displayDominique);
  Dominique.addEventListener("mouseout", clearWho);

  var HongYing = x.querySelector("area.Hong_Ying");
  HongYing.addEventListener("mouseover", displayHongYing);
  HongYing.addEventListener("mouseout", clearWho);

  var Vamsi = x.querySelector("area.Vamsi");
  Vamsi.addEventListener("mouseover", displayVamsi);
  Vamsi.addEventListener("mouseout", clearWho);
}

//Ghernie
function displayGhernie() {
  document.getElementById("showWho").textContent = "Ghernie";
}
//Beatrice
function displayBeatrice() {
  document.getElementById("showWho").textContent = "Beatrice";
}
//Darren
function displayDarren() {
  document.getElementById("showWho").textContent = "Darren";
}
//Dominique
function displayDominique() {
  document.getElementById("showWho").textContent = "Dominique";
}
//Hong Ying
function displayHongYing() {
  document.getElementById("showWho").textContent = "Hong Ying";
}
//Vamsi
function displayVamsi() {
  document.getElementById("showWho").textContent = "Vamsi";
}
//Clear
function clearWho() {
  document.getElementById("showWho").textContent = "";
}

//View Time Table

var timeTable = document.querySelector("table");
var tableCaption = timeTable.children[0];
var tableHeader = timeTable.children[1];
var tableBody = timeTable.children[2];
var remindToScroll = document.getElementById("remindScroll");
var scrollEnd = document.getElementById("scrollEnd");

remindToScroll.style.display = "none";
scrollEnd.style.display = "none";
tableHeader.style.display = "none";
tableBody.style.display = "none";

var toggled = false;
function viewTableToggle() {
  if (toggled) {
    toggled = false;
    tableHeader.style.display = "none";
    tableBody.style.display = "none";
    remindToScroll.style.display = "none";
    scrollEnd.style.display = "none";
    timeTable.parentNode.parentNode.style.background = "transparent";

    return;
  }
  if (!toggled) {
    toggled = true;
    timeTable.parentNode.parentNode.style.background = "rgb(54 58 53 / 43%)";
    tableHeader.style.display = "table-header-group";
    tableBody.style.display = "table-row-group";
    remindToScroll.innerHTML = `Scroll <i class="fas fa-angle-right"></i>`;
    remindToScroll.style.display = "block";
    scrollEnd.textContent = "End";
    scrollEnd.style.display = "block";
    return;
  }
}
