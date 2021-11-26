const openMenu = document.querySelector("#show_menu");
const hideMenu = document.querySelector("#hide_menu");
const sideMenu = document.querySelector("#nav_menu");
const lightSwitch = document.querySelector("#switch_input");
const body = document.querySelector("body");
var isMenuOpen = false;

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

function togglesDarkMode() {
  lightSwitch.addEventListener("click", function() {
    if(lightSwitch.checked == true) {
      body.classList.add("dark");
      document.cookie = "isDarkModeToggle=true; max-age=864000000; path=/";
      if(isMenuOpen) {sideMenu.classList.remove("active");}
    } else {
      body.classList.remove("dark");
      document.cookie = "isDarkModeToggle=false; max-age=864000000; path=/";
      if(isMenuOpen) {sideMenu.classList.remove("active");}
    }
  })
}

function getCookieValue(name) {
  var re = new RegExp(name + "=([^;]+)");
  var value = re.exec(document.cookie);
  return (value != null) ? unescape(value[1]) : null;
}

function isDarkModeToggle() {
  if (getCookieValue("isDarkModeToggle") == "false"){
    body.classList.remove("dark");
  } else if (getCookieValue("isDarkModeToggle") == "true") {
    body.classList.add("dark");
    lightSwitch.checked = true;
  }
}

isDarkModeToggle()
togglesDarkMode()
toggleMenu()
