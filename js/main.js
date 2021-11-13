const openMenu = document.querySelector("#show_menu");
const hideMenu = document.querySelector("#hide_menu");
const sideMenu = document.querySelector("#nav_menu");
const lightSwitch = document.querySelector("#switch_input");
const body = document.querySelector("body");
var isMenuOpen = false;
var isDarkModeToggle = false;

function toggleMenu() {
  openMenu.addEventListener("click", function() {
    sideMenu.classList.add("active");
    isMenuOpen = true;
  })

  hideMenu.addEventListener("click", function() {
    sideMenu.classList.remove("active");
    isMenuOpen = false;
  })
}

function toggleLight() {
  lightSwitch.addEventListener("click", function() {
    if(lightSwitch.checked == true) {
      body.classList.add("dark");
      isDarkModeToggle = true;
      if(isMenuOpen) {sideMenu.classList.remove("active");}
    } else {
      body.classList.remove("dark");
      isDarkModeToggle = false;
      if(isMenuOpen) {sideMenu.classList.remove("active");}
    }
  })
}

toggleMenu()
toggleLight()