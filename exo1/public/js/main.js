let div = document.createElement('div');
let body = document.querySelector('body');
let title = document.createElement('h1');
let subTitle = document.createElement("h2");
let input = document.createElement('input');
let btn = document.createElement("button");

let textTitle = document.createTextNode('Je suis un titre');
let textSubTitle = document.createTextNode('Je suis un sous-titre');
let textBtn = document.createTextNode('Acceptez');
let textTitle2 = document.createTextNode("Je suis un grand titre");

body.appendChild(div);
div.appendChild(title);
div.appendChild(subTitle);
div.appendChild(btn);
div.appendChild(input);

title.appendChild(textTitle);
subTitle.appendChild(textSubTitle);

btn.appendChild(textBtn);

title.innerHTML = "Je suis un Grand titre";