let body = document.querySelector('body');
let container = document.createElement("div");
let title = document.createElement('h1');
let hr = document.createElement('hr');
body.appendChild(container);
body.style.width = "90%";
body.style.margin = "auto";

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
dclr1.innerText = "W";
dclr1.addEventListener('click', function () {
    bigBox.style.backgroundColor = "lightGrey";
});
divContainer.appendChild(dclr1);

let dclr2 = document.createElement('div');
dclr2.style.backgroundColor = "red";
dclr2.style.padding = "10px"
dclr2.innerText = "R"
dclr2.addEventListener('click', function () {
    bigBox.style.backgroundColor = "red";
});
divContainer.appendChild(dclr2);

let dclr3 = document.createElement('div');
dclr3.style.backgroundColor = "green";
dclr3.style.padding = "10px"
dclr3.innerText = "G"
dclr3.addEventListener('click', function () {
    bigBox.style.backgroundColor = "green";
});
divContainer.appendChild(dclr3);

let dclr4 = document.createElement('div');
dclr4.style.backgroundColor = "purple";
dclr4.style.padding = "10px"
dclr4.innerText = "B"
dclr4.addEventListener('click', function () {
    bigBox.style.backgroundColor = "purple";
});
divContainer.appendChild(dclr4);

// borders 


let dbox = document.createElement('div');
dbox.style.height = "20px";
dbox.style.width = "40px";
dbox.style.border = "3px solid black";
dbox.style.borderRadius = "5px";
dbox.addEventListener('click', function () {
    bigBox.style.border = "3px solid black";
});
divContainer.appendChild(dbox);


let dbox1 = document.createElement('div');
dbox1.style.height = "20px";
dbox1.style.width = "40px";
dbox1.style.border = "3px dashed black";
dbox1.style.borderRadius = "5px";
dbox1.addEventListener('click', function () {
    bigBox.style.border = "3px dashed black";
});
divContainer.appendChild(dbox1);

let dbox2 = document.createElement('div');
dbox2.style.height = "20px";
dbox2.style.width = "40px";
dbox2.style.border = "1px solid black";
dbox2.addEventListener('click', function () {
    bigBox.style.border = "1px solid black";
});
dbox2.style.borderRadius = "5px";
divContainer.appendChild(dbox2);

// third part

let dbord = document.createElement('div');
dbord.style.padding = "8px 15px ";
dbord.style.backgroundColor = "lightGrey";
dbord.innerText = "top"
dbord.style.borderRadius = "2px";
dbord.addEventListener('click', function () {
    bigBox.style.backgroundColor = "lightGrey";
});
divContainer.appendChild(dbord);


let dbord1 = document.createElement('div');
dbord1.style.padding = "8px 15px ";
dbord1.style.borderTop = "3px solid red";
dbord1.innerText = "top"
dbord1.style.borderRadius = "2px";
dbord1.addEventListener('click', function () {
    bigBox.style.borderTop = "3px solid red";
});
divContainer.appendChild(dbord1);

let dbord2 = document.createElement('div');
dbord2.style.padding = "8px 15px ";
dbord2.style.borderTop = "5px solid red";
dbord2.innerText = "top"
dbord2.addEventListener('click', function () {
    bigBox.style.borderTop = "5px solid red";
});
dbord2.style.borderRadius = "2px";
divContainer.appendChild(dbord2);

// //////////////// second row  ///////////////// //
let divContainer2 = document.createElement('div');
body.appendChild(divContainer2);
divContainer2.style.display = "flex";
divContainer2.style.marginTop = "2rem"
divContainer2.style.gap = "1rem"

let dboxsecond = document.createElement("button");
dboxsecond.style.backgroundColor = "black";
dboxsecond.style.height = "40px";
dboxsecond.style.width = "160px";
dboxsecond.style.border = "10px solid lightGrey";
dboxsecond.addEventListener('click', function () {
    bigBox.style.backgroundColor = "black";
    bigBox.style.border = "10px solid lightGrey";
});
divContainer2.appendChild(dboxsecond);

let dboxsecond2 = document.createElement('input');
dboxsecond2.style.height = "30px";
dboxsecond2.style.width = "45px";
dboxsecond2.style.border = "4px solid black"
dboxsecond2.addEventListener('click', function () {
    bigBox.style.border = "4px solid black";
});
divContainer2.appendChild(dboxsecond2);

let dboxsecond3 = document.createElement('input');
dboxsecond3.style.height = "30px";
dboxsecond3.style.width = "45px";
dboxsecond3.style.borderTop = "4px solid black"
dboxsecond3.addEventListener('click', function () {
    bigBox.style.borderTop = "4px solid black";
});
divContainer2.appendChild(dboxsecond3)

let dboxsecond4 = document.createElement('input');
dboxsecond4.style.height = "30px";
dboxsecond4.style.width = "45px";
dboxsecond4.style.borderRight = "4px solid black"
dboxsecond4.addEventListener('click', function () {
    bigBox.style.borderRight = "4px solid black";
});
divContainer2.appendChild(dboxsecond4)

let dboxsecond5 = document.createElement('input');
dboxsecond5.style.height = "30px";
dboxsecond5.style.width = "45px";
dboxsecond5.style.borderBottom = "4px solid black"
dboxsecond5.addEventListener('click', function () {
    bigBox.style.borderBottom = "4px solid black";
});
divContainer2.appendChild(dboxsecond5)

let dboxsecond6 = document.createElement('input');
dboxsecond6.style.height = "30px";
dboxsecond6.style.width = "45px";
dboxsecond6.style.borderLeft = "4px solid black"
dboxsecond6.addEventListener('click', function () {
    bigBox.style.borderLeft = "4px solid black";
});
divContainer2.appendChild(dboxsecond6)



// //////////////// third row ////////////////// //
let divContainer3 = document.createElement('div');
divContainer3.style.marginTop = "2rem"
divContainer3.style.display = "flex"
divContainer3.style.gap = "1rem"
body.appendChild(divContainer3);


let dboxthird = document.createElement('input');
dboxthird.style.height = "30px";
dboxthird.style.width = "45px";
dboxthird.style.borderRadius = "10px";
dboxthird.addEventListener('click', function () {
    bigBox.style.borderRadius = "10px";
});
divContainer3.appendChild(dboxthird)


let dboxthird1 = document.createElement('input');
dboxthird1.style.height = "30px";
dboxthird1.style.width = "45px";
dboxthird1.style.borderRadius = "10px 0 0 0 ";
dboxthird1.addEventListener('click', function () {
    bigBox.style.borderRadius = "10px 0 0 0";
});
divContainer3.appendChild(dboxthird1)


let dboxthird2 = document.createElement('input');
dboxthird2.style.height = "30px";
dboxthird2.style.width = "45px";
dboxthird2.style.borderRadius = "0 10px 0 0";
dboxthird2.addEventListener('click', function () {
    bigBox.style.borderRadius = "0 10px 0 0";
});
divContainer3.appendChild(dboxthird2)


let dboxthird3 = document.createElement('input');
dboxthird3.style.height = "30px";
dboxthird3.style.width = "45px";
dboxthird3.style.borderRadius = "0 0 10px 0";
dboxthird3.addEventListener('click', function () {
    bigBox.style.borderRadius = "0 0 10px 0";
});
divContainer3.appendChild(dboxthird3)


let dboxthird4 = document.createElement('input');
dboxthird4.style.height = "30px";
dboxthird4.style.width = "45px";
dboxthird4.style.borderRadius = "0 0 0 10px";
dboxthird4.addEventListener('click', function () {
    bigBox.style.borderRadius = "0 0 0 10px";
});
divContainer3.appendChild(dboxthird4)


// big box

let bigBox = document.createElement('input');
bigBox.style.marginTop = "2rem";
bigBox.style.height = "10rem";
bigBox.style.width = "20rem";
body.appendChild(bigBox);