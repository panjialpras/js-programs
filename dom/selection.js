// Khusus tag elemen yang punya id
let tittle = document.getElementById("judul");
tittle.style.color = "blue";
tittle.style.backgroundColor = "yellow";
tittle.innerHTML = "Panji";

// let p = document.getElementsByTagName("p");
// for (let i = 0; i < p.length; i++) {
//   p[i].style.backgroundColor = "gray";
// }

// Khusus tag elemen yang punya tag name
const h1 = document.getElementsByTagName("h1")[0];
h1.style.fontFamily = "Times New Roman";
h1.style.fontSize = "30px";

// Khusus tag elemen yang punya class
const p1 = document.getElementsByClassName("p1");
p1[0].innerHTML = "ubah ini jadi javascript";

const p4 = document.querySelector("#a p");
p4.style.color = "brown";
p4.style.fontSize = "20px";

const li2 = document.querySelector("section#a ul lu:nth-child(2)");
li2.style.backgroundColor = "magenta";

// const p = document.querySelector("p");
// p.innerHTML = "Ini diubah melalui javascript";

const p = document.querySelectorAll("p");
for (let i = 0; i < p.length; i++) p[i].style.backgroundColor("blue");
