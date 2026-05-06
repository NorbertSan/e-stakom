// year
document.getElementById("yr").textContent = new Date().getFullYear();

// circuit background
fetch("assets/circuit.svg")
  .then((r) => r.text())
  .then((svg) => {
    document.getElementById("circuit-container").innerHTML = svg;
  });

// hamburger
const burger = document.getElementById("burger");
const menu = document.getElementById("mobile-menu");

function openMenu() {
  burger.classList.add("open");
  menu.classList.add("open");
  burger.setAttribute("aria-expanded", "true");
}
function closeMenu() {
  burger.classList.remove("open");
  menu.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

burger.addEventListener("click", function (e) {
  e.stopPropagation();
  menu.classList.contains("open") ? closeMenu() : openMenu();
});

// close on any link inside sheet
menu.querySelectorAll("a").forEach(function (a) {
  a.addEventListener("click", closeMenu);
});

// close on outside click
document.addEventListener("click", function (e) {
  if (menu.classList.contains("open") && !menu.contains(e.target)) {
    closeMenu();
  }
});

// close on Escape
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeMenu();
});
