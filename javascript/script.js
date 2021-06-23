var learnMoreBtn = document.getElementById("learn-more-btn"),
  aboutMe = document.getElementById("about-section"),
  header = document.getElementById("home-header"),
  navbar = document.getElementById("navbar"),
  prevScrollPos = window.pageYOffset,
  pongDropBtn = document.getElementById("pong-drop-btn"),
  pongContent = document.getElementById("pong-dropdown"),
  dataDropBtn = document.getElementById("data-drop-btn"),
  dataContent = document.getElementById("data-dropdown"),
  fightDropBtn = document.getElementById("fight-drop-btn"),
  fightContent = document.getElementById("fight-dropdown"),
  portfolioDropBtn = document.getElementById("portfolio-drop-btn"),
  portfolioContent = document.getElementById("portfolio-dropdown"),
  pongArrow = document.getElementById("pong-arrow"),
  dataArrow = document.getElementById("data-arrow"),
  fightArrow = document.getElementById("fight-arrow"),
  portfolioArrow = document.getElementById("portfolio-arrow");

function moveDownFunction() {
  window.scrollTo(0, header.clientHeight);
}

pongContent.style.top = "-160px";
dataContent.style.top = "-160px";
fightContent.style.top = "-160px";
portfolioContent.style.top = "-160px";

function pongDropdownFunction() {
  if (pongContent.style.top == "-160px") {
    pongContent.style.top = "0px";
    pongContent.style.zIndex = "0";
    pongContent.style.height = "200px";
    pongArrow.style.transform = "rotate(225deg)";
  } else {
    pongContent.style.zIndex = "-2";
    pongContent.style.top = "-160px";
    pongContent.style.height = "0px";
    pongArrow.style.transform = "rotate(45deg)";
  }
}

function dataDropdownFunction() {
  if (dataContent.style.top == "-160px") {
    dataContent.style.top = "0px";
    dataContent.style.zIndex = "0";
    dataContent.style.height = "200px";
    dataArrow.style.transform = "rotate(225deg)";
  } else {
    dataContent.style.zIndex = "-2";
    dataContent.style.top = "-160px";
    dataContent.style.height = "0px";
    dataArrow.style.transform = "rotate(45deg)";
  }
}

function fightDropdownFunction() {
  if (fightContent.style.top == "-160px") {
    fightContent.style.top = "0px";
    fightContent.style.zIndex = "0";
    fightContent.style.height = "200px";
    fightArrow.style.transform = "rotate(225deg)";
  } else {
    fightContent.style.zIndex = "-2";
    fightContent.style.top = "-160px";
    fightContent.style.height = "0px";
    fightArrow.style.transform = "rotate(45deg)";
  }
}

function portfolioDropdownFunction() {
  if (portfolioContent.style.top == "-160px") {
    portfolioContent.style.top = "0px";
    portfolioContent.style.zIndex = "0";
    portfolioContent.style.height = "200px";
    portfolioArrow.style.transform = "rotate(225deg)";
  } else {
    portfolioContent.style.zIndex = "-2";
    portfolioContent.style.top = "-160px";
    portfolioContent.style.height = "0px";
    portfolioArrow.style.transform = "rotate(45deg)";
  }
}

learnMoreBtn.addEventListener("click", moveDownFunction);
pongDropBtn.addEventListener("click", pongDropdownFunction);
dataDropBtn.addEventListener("click", dataDropdownFunction);
fightDropBtn.addEventListener("click", fightDropdownFunction);
portfolioDropBtn.addEventListener("click", portfolioDropdownFunction);

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-53px";
  }
  prevScrollPos = currentScrollPos;
};
