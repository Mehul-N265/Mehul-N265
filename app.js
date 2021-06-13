const balloon = document.querySelector("#air__balloon");
const cloudOne = document.querySelector("#cloud__one");
const cloudTwo = document.querySelector("#cloud__two");
const cloudThree = document.querySelector("#cloud__three");
const cloudFour = document.querySelector("#cloud__four");
const cloudFive = document.querySelector("#cloud__five");
const js = document.querySelector("#js");
const html = document.querySelector("#html");
const css = document.querySelector("#css");
const scratch = document.querySelector("#scratch");
const h1 = document.querySelector("#flush__move");
//function to move elements
function move() {
  const scroller = window.scrollY;
  balloon.style.bottom = 10 + scroller * 0.1 + "%";

  cloudOne.style.bottom = 40 + scroller * 0.1 + "%";
  cloudOne.style.marginLeft = 50 + scroller * 0.11 + "%";
  //
  cloudTwo.style.bottom = 85 + scroller * 0.17 + "%";
  cloudTwo.style.marginLeft = 60 + scroller * 0.13 + "%";

  //
  cloudThree.style.bottom = 60 + scroller * 0.21 + "%";
  cloudThree.style.marginRight = 65 + scroller * 0.09 + "%";
  //
  cloudFour.style.bottom = 80 + scroller * 0.15 + "%";
  cloudFour.style.marginRight = 75 + scroller * 0.31 + "%";
  //
  cloudFive.style.bottom = 60 + scroller * 0.19 + "%";
  cloudFive.style.marginLeft = 20 + scroller * 0.16 + "%";

  js.style.marginRight = 70 + scroller * 1.5 + "%";
  html.style.marginRight = 55 + scroller * 1.1 + "%";
  css.style.marginRight = 40 + scroller * 0.8 + "%";
  scratch.style.marginRight = 25 + scroller * 0.5 + "%";
  flush__move.style.fontSize = 2.0 + scroller * 0.003 + "rem";
}
window.addEventListener("scroll", move);
