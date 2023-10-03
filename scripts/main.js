

// document.addEventListener("DOMContentLoaded", ()=>{const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello Wordl";});

// let myVariable = "Bob"; //modo nuovo per creare variabili
// var miaVariabile; //modi per creare variabili, visibile ovunque quindi problematico
// myVariable = 10;
// myVariable= [1,"Bob,", "Stebe"];
// console.log(myVariable[1]);

// let iceCream = "chocolate";
// if (iceCream === "chocolate") {
//   alert("Yay, I love chocolate ice cream!");
// } else {
//   alert("Awwww, but chocolate is my favorite…");
// }

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
  }

  multiply(4,5);
  
//   document.querySelector("html").addEventListener("click", function () {
//     alert("Ouch! Stop poking me!");
//   });


  const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
}; //cambia l'immagine se cliccata

let myButton = document.querySelector("button"); //accede al bottone
let myHeading = document.querySelector("h1"); //quando clicchiamo il bottone verrà cambiato h1

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }


  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  } //questo farà in modo che quando parte lo script non è stato registrato alcun nome

  myButton.onclick = () => {
    setUserName();
  };