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

function toggleLight() {
  lightSwitch.addEventListener("click", function() {
    if(lightSwitch.checked == true) {
      body.classList.add("dark");
      createCookie("isDarkModeToggle", "true")
      if(isMenuOpen) {sideMenu.classList.remove("active");}
    } else {
      body.classList.remove("dark");
      createCookie("isDarkModeToggle", "false")
      if(isMenuOpen) {sideMenu.classList.remove("active");}
    }
  })
}

function createCookie(name, value, days) {
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      var expire = "; expire=" + date.toGMTString();
  } else {var expire = ""}

  document.cookie = name + "=" + value + expire + "; path=/";
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
toggleLight()
toggleMenu()