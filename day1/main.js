//[#first]
const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

//[#Functions]
let myVariable = document.querySelector("h1");
alert("Helllo!");

function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}
console.log(multiply(24 * 1));

//[#Conditionals]
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}

//[#Events]
document.querySelector("html").addEventListener("click", () => {
  alert("Ouch! Stop poking me!");
});

//[#Adding an image changer]
const myImage = document.querySelector("img");

myImage.style.width = "300px";
myImage.style.height = "300px";

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/hungary.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
};

//[#Adding a personalized welcome message]
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
