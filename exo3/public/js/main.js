let body = document.querySelector("body");
let div = document.createElement("div");
let btn = document.createElement("button");

let btn2 = document.createElement("button");

body.appendChild(div);
div.appendChild(btn);
btn.innerText = "je suis un bouton";

btn.addEventListener("click", function () {
    btn.innerText = "j'ai été cliqué"
})
counter = 1
div.appendChild(btn2);

btn2.innerText = "Je suis un bouton qui compte";

btn2.addEventListener("click", function () {

    btn2.innerText = `J'ai été cliqué ${counter} fois`
    counter++
})