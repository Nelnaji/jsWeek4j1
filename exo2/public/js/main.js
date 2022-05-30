let body = document.querySelector('body');
let div = document.createElement('div');
let title = document.createElement('h1');
let list = document.createElement("ul");
let listItem1 = document.createElement('li');
let listItem2 = document.createElement('li');
let listItem3 = document.createElement('li');
let listItem4 = document.createElement('li');


let textTitle = document.createTextNode('A chien');
let textlist1 = document.createTextNode('berger Allemand a 60 +/-');
let textlist2 = document.createTextNode('Chihuahua a 15 +/-');
let textlist3 = document.createTextNode('Beagle a 36 +/-');
let textlist4 = document.createTextNode('Boxer a 60 +/-');


body.appendChild(div);
div.appendChild(title);
div.appendChild(list);
let listItemOne = list.appendChild(listItem1);
let listItemTwo = list.appendChild(listItem2);
let listItemThree = list.appendChild(listItem3);
let listItemFour = list.appendChild(listItem4);

title.appendChild(textTitle);

listItem1.appendChild(textlist1);
listItem2.appendChild(textlist2);
listItem3.appendChild(textlist3);
listItem4.appendChild(textlist4);