let par1 = document.querySelector("#par1");
let par2 = document.querySelector("#par2");
let bod = document.querySelector("#bod");

const x = document.addEventListener("keydown", (e) => {
  par1.innerText = "You Pressed " + e.key;

  let renk1 = Math.floor(Math.random() * 255);
  let renk2 = Math.floor(Math.random() * 255);
  let renk3 = Math.floor(Math.random() * 255);

  let renkler = `rgb(${renk1},${renk2},${renk3})`;

  bod.style.backgroundColor = renkler;

  par2.innerText = "Ascii Kod = " + e.keyCode;
});

let div = document.querySelector("div");


console.log(div);
