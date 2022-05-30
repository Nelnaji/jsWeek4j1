let body = document.querySelector('body');
let container = document.createElement("div");
let title = document.createElement('h1');
let hr = document.createElement('hr');
body.appendChild(container);

title.innerText = "Le Dom - Exo: StyleGenerator";
title.style.backgroundColor = "cyan";
container.appendChild(title);
container.appendChild(hr);
hr.style.color = "purple";

// /////////// first row ////////// //

let divContainer = document.createElement('div');
divContainer.style.display = "flex";
divContainer.style.gap = "4px";
divContainer.style.alignItems = "center";
container.appendChild(divContainer);

// box colors
let dclr1 = document.createElement('div');
dclr1.style.backgroundColor = "lightGrey";
dclr1.style.padding = "10px"
dclr1.innerText = "W"
divContainer.appendChild(dclr1);

let dclr2 = document.createElement('div');
dclr2.style.backgroundColor = "red";
dclr2.style.padding = "10px"
dclr2.innerText = "R"
divContainer.appendChild(dclr2);

let dclr3 = document.createElement('div');
dclr3.style.backgroundColor = "green";
dclr3.style.padding = "10px"
dclr3.innerText = "G"
divContainer.appendChild(dclr3);

let dclr4 = document.createElement('div');
dclr4.style.backgroundColor = "purple";
dclr4.style.padding = "10px"
dclr4.innerText = "B"
divContainer.appendChild(dclr4);

// borders 


let dbox = document.createElement('div');
dbox.style.height = "20px";
dbox.style.width = "40px";
dbox.style.border = "3px solid black";
dbox.style.borderRadius = "5px";
divContainer.appendChild(dbox);


let dbox1 = document.createElement('div');
dbox1.style.height = "20px";
dbox1.style.width = "40px";
dbox1.style.border = "3px dashed black";
dbox1.style.borderRadius = "5px";
divContainer.appendChild(dbox1);

let dbox2 = document.createElement('div');
dbox2.style.height = "20px";
dbox2.style.width = "40px";
dbox2.style.border = "1px solid black";
dbox2.style.borderRadius = "5px";
divContainer.appendChild(dbox2);

// third part

let dbord = document.createElement('div');
dbord.style.padding = "8px 15px ";
dbord.style.backgroundColor = "lightGrey";
dbord.innerText = "top"
dbord.style.borderRadius = "2px";
divContainer.appendChild(dbord);


let dbord1 = document.createElement('div');
dbord1.style.padding = "8px 15px ";
dbord1.style.borderTop = "3px solid red";
dbord1.innerText = "top"
dbord1.style.borderRadius = "2px";
divContainer.appendChild(dbord1);

let dbord2 = document.createElement('div');
dbord2.style.padding = "8px 15px ";
dbord2.style.borderTop = "5px solid red";
dbord2.innerText = "top"
dbord2.style.borderRadius = "2px";
divContainer.appendChild(dbord2);

// //////////////// second row  ///////////////// //
let divContainer2 = document.createElement('div');


// //////////////// third row ////////////////// //
let divContainer3 = document.createElement('div');

// big box