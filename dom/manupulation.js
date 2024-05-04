const tittle = document.getElementById("judul");
tittle.textContent = "Dataset";

const section = document.querySelector("section#a");
section.textContent = "Lorem ipsum";

const ran = document.querySelector("#judul");
ran.style.color = "blue";
ran.style.backgroundColor = "grey";

const judul = document.getElementsByTagName("h1")[0];
judul.setAttribute("name", "panji");

const paragraf1 = document.createElement("p");
const textparagraf1 = document.createTextNode("Coba paragraf 1");

paragraf1.appendChild(textparagraf1);
const sectionA = document.getElementById("a");

sectionA.appendChild(paragraf1);
