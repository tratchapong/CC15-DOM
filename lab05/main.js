let mySidenav = document.querySelector("#mySidenav");
let closeBtn = document.querySelector(".closebtn");
let openBtn = document.querySelector("#main > span");

closeBtn.addEventListener("click", closeNav);
openBtn.addEventListener("click", openNav);

function openNav() {
    document.querySelector("#mySidenav").style.width = "250px";
    document.querySelector("#main").style.marginLeft = "250px";
  }

  function closeNav() {
    document.querySelector("#mySidenav").style.width = "0";
    document.querySelector("#main").style.marginLeft = "0";
  }

