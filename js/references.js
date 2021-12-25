"use strict";

/*=============================
    Name: Ghernie (2128681)   
    Class: DISM/FT/1A/05      
    Module: ST0501            
    CA2                       
    File: references.js        
    Date Created: 4 Aug 2021 
    Date Submitted: 6 Aug 2021
===============================*/

////    references.html

//This function generates the reference list using a for loop according to the array length and its values

//Reference list

var type = [];
type[0] = "Image";
type[1] = "Image";
type[2] = "Image";
type[3] = "Image";
type[4] = "Image";
type[5] = "Image";
type[6] = "Image";
type[7] = "Image";
type[8] = "Image";
type[9] = "Image";
type[10] = "Image";

var pages = [];
pages[0] = "Me";
pages[1] = "Me";
pages[2] = "Me";
pages[3] = "Me";
pages[4] = "My Past Experience";
pages[5] = "My Current Experience";
pages[6] = "My Course and Career";
pages[7] = "My Course and Career";
pages[8] = "My Course and Career";
pages[9] = "My Course and Career";
pages[10] = "Feedback";

var description = [];
description[0] =
  "Harrison, J., 2020. Black flat screen, computer. [Accessed 31 July 2021]";
description[1] = "Masalar, M., 2017. Music Sheet. [Accessed 1 August 2021]";
description[2] = "Thought Catalog, 2017. Organised. [Accessed 1 August 2021]";
description[3] = "Reis, R., 2020. Traveller. [Accessed 1 August 2021]";
description[4] =
  "Woroniecki, J., 2020. Asphalt Highway. [Accessed 1 August 2021]";
description[5] = "Tyson, J., 2018. School Hopscotch. [Accessed 1 August 2021]";
description[6] =
  "Spiske, M., 2017. Data on Computer Screen. [Accessed 1 August 2021]";
description[7] =
  "HalGatewood.com, 2018. Website Design. [Accessed 1 August 2021]";
description[8] = "Sigmund, 2021. Cable. [Accessed 1 August 2021]";
description[9] =
  "Bughdaryan, S., 2021. Keyboard, Lock Key. [Accessed 1 August 2021]";
description[10] = "Redd, B., 2016. Papers. [Accessed 1 August 2021]";

var links = [];
links[0] = "https://unsplash.com/photos/UVMPVIRCF5w";
links[1] = "https://unsplash.com/photos/rPOmLGwai2w";
links[2] = "https://unsplash.com/photos/rPOmLGwai2w";
links[3] = "https://unsplash.com/photos/y0VUxw3Q6jI";
links[4] = "https://unsplash.com/photos/EiFis1ujQDE";
links[5] = "https://unsplash.com/photos/r9T0LZv8xWQ";
links[6] = "https://unsplash.com/photos/FXFz-sW0uwo";
links[7] = "https://unsplash.com/photos/tZc3vjPCk-Q";
links[8] = "https://unsplash.com/photos/EJe6LqEjHpA";
links[9] = "https://unsplash.com/photos/8admGA18lBs";
links[10] = "https://unsplash.com/photos/aJTiW00qqtI";

var htmlCode = `<table class="table table-hover table-striped"><thead><tr><th>Type</th><th>Description</th><th>Used at page:</th></tr></thead><tbody>`;

for (let i = 0; i <= 10; ++i) {
  htmlCode += `<tr><td><a href='${links[i]}'>${type[i]}</a></td><td>${description[i]}</td><td>${pages[i]}</td></tr>`;
}
htmlCode += `</tbody></table>`;

document.getElementById("list").innerHTML = htmlCode;
