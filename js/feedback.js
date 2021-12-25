"use strict";

/*=============================
    Name: Ghernie (2128681)   
    Class: DISM/FT/1A/05      
    Module: ST0501            
    CA2                       
    File: feedback.js        
    Date Created: 4 Aug 2021 
    Date Submitted: 6 Aug 2021
===============================*/

//    feedback.html

//Occupation check

var others = document.getElementById("others");

var occupation = document.getElementById("occupation");

occupation.addEventListener("change", function () {
  var selectedOccupation = getOccupation();
  if (selectedOccupation === "Others") {
    console.log("Yes");
    others.classList.remove("d-none");
    others.classList.add("d-block");
  } else if (selectedOccupation !== "Others") {
    console.log("No");
    others.classList.remove("d-block");
    others.classList.add("d-none");
  }
});

function getOccupation() {
  var input = occupation.value;
  return input;
}

//Check email

var checkedEmail = document.getElementById("checkEmail");

checkedEmail.addEventListener("change", function () {
  if (this.checked) {
    console.log("Checkbox is checked..");
    var emailInput = document.getElementById("email");
    emailInput.setAttribute("required", ""); //Require if checked
    emailInput.removeAttribute("disabled"); //Enable if checked
  } else {
    console.log("Checkbox is not checked..");
    var emailInput = document.getElementById("email");
    emailInput.setAttribute("disabled", "");
    emailInput.removeAttribute("required"); //Remove require if checked
  }
});

//Interest Level (Slider)

var slider = document.getElementById("interestLevel");
var output = document.getElementById("interestValue");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
};

//Validate Form

validateForm();

function validateForm() {
  window.addEventListener(
    "load",
    function () {
      // Fetch all the forms we want to apply custom Bootstrap validation styles to
      var forms = document.getElementsByClassName("needs-validation");
      // Loop over them and prevent submission
      var validation = Array.prototype.filter.call(forms, function (form) {
        form.addEventListener(
          "submit",
          function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
}
