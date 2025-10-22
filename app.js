const features = document.querySelector("#menu-1");
const featuresUp = document.querySelector("#up-1");
const dropdown01 = document.querySelector(".dropdown-1");
features.addEventListener("click", () => {
  if (dropdown01.style.visibility == "visible") {
    dropdown01.style.visibility = "hidden";
    featuresUp.setAttribute("src", "./images/icon-arrow-down.svg");
  } else {
    dropdown01.style.visibility = "visible";
    featuresUp.setAttribute("src", "./images/icon-arrow-up.svg");
  }
});

const features2 = document.querySelector("#menu-2");
const featuresUp2 = document.querySelector("#up-2");
const dropdown02 = document.querySelector(".dropdown-2");
features2.addEventListener("click", () => {
  if (dropdown02.style.visibility == "visible") {
    dropdown02.style.visibility = "hidden";
    featuresUp2.setAttribute("src", "./images/icon-arrow-down.svg");
  } else {
    dropdown02.style.visibility = "visible";
    featuresUp2.setAttribute("src", "./images/icon-arrow-up.svg");
  }
});

const menu = document.querySelector(".menu");
const nav = document.querySelector("#header-nav");
menu.addEventListener("click", () => {
  if (nav.style.display == "block") {
    nav.style.display = "none";
    menu.setAttribute("src", "./images/icon-menu.svg");
  } else {
    nav.style.display = "block";
    menu.setAttribute("src", "./images/icon-close-menu.svg");
  }
});


const features01 = document.querySelector(".menu-01");
const featuresUp01 = document.querySelector(".up-01");
const dropdown001 = document.querySelector(".dropdown-01");
features01.addEventListener("click", () => {
  if (dropdown001.style.display == "block") {
    dropdown001.style.display = "none";
    featuresUp01.setAttribute("src", "./images/icon-arrow-down.svg");
  } else {
    dropdown001.style.display = "block";
    featuresUp01.setAttribute("src", "./images/icon-arrow-up.svg");
  }
});


const features02 = document.querySelector(".menu-02");
const featuresUp02 = document.querySelector(".up-02");
const dropdown002 = document.querySelector(".dropdown-02");
features02.addEventListener("click", () => {
  if (dropdown002.style.display == "block") {
    dropdown002.style.display = "none";
    featuresUp02.setAttribute("src", "./images/icon-arrow-down.svg");
  } else {
    dropdown002.style.display = "block";
    featuresUp02.setAttribute("src", "./images/icon-arrow-up.svg");
  }
});



