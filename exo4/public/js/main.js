// Exo 3

let btn = document.createElement("button");
btn.innerText = "ajoutez un titre";

document.querySelector("body").appendChild(btn);

btn.addEventListener('click', function () {
    let h1 = document.createElement("h1");
    h1.innerText = "Je suis un titre"
    document.querySelector("body").appendChild(h1)
})


// Exo 4

let btn2 = document.createElement('button');
btn2.innerText = "ajouter un bouton";

document.querySelector("body").appendChild(btn2);

btn2.addEventListener("click", function () {
    let btn2 = document.createElement("button");
    btn2.innerText = "Exo 4";
    document.querySelector('body').appendChild(btn2);
})

// Exo 5

let btnP = document.createElement('button');
btnP.innerText = "Changer la couleur de texte du paragraphe"
document.querySelector('body').appendChild(btnP);
let paragraphe = document.createElement('p');
paragraphe.innerText = "Je suis un paragraphe de text ...";
document.querySelector('body').appendChild(paragraphe);

btnP.addEventListener('click', function () {
    paragraphe.style.color = "green";
})


//  Exo 6
let btn6 = document.createElement('button');
btn6.innerText = "Je lance une fonction"
document.querySelector('body').appendChild(btn6);
btn6.addEventListener("click", function () {
    let h2 = document.createElement('h2');
    h2.innerText = "Ce titre a été ajouter par le btn - Je lance une fonction -"
    document.querySelector("body").appendChild(h2);
    let btn6 = document.createElement('button');
    btn6.innerText = " Modifier le titre Exo 06";
    document.querySelector('body').appendChild(btn6);

    btn6.addEventListener("click", function () {
        h2.style.color = "red";
    })
})