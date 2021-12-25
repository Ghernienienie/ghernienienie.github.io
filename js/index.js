"use strict";

/*=============================
    Name: Ghernie (2128681)   
    Class: DISM/FT/1A/05      
    Module: ST0501            
    CA2                       
    File: index.js        
    Date Created: 4 Aug 2021 
    Date Submitted: 6 Aug 2021
===============================*/

//    index.html

//This function generates random quotes from the array into index.html about me section

//View Quotes

const QUOTES = [
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },
  {
    quote:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
    author: "Robert Louis Stevenson.",
  },
  {
    quote: "Life is trying things to see if they work.",
    author: "Ray Bradbury",
  },
  {
    quote:
      "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    author: "Colin Powell",
  },
  {
    quote: "I failed my way to success.",
    author: "Thomas Edison",
  },
];

showQuote();
setInterval("showQuote()", 6000);

function showQuote() {
  var randomQuote = Math.floor(Math.random() * QUOTES.length);
  document.getElementById("quote").innerHTML = QUOTES[randomQuote].quote;
  document.getElementById("author").innerHTML = QUOTES[randomQuote].author;
}
