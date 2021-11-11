const openMenu = document.querySelector("#show_menu")
const hideMenu = document.querySelector("#hide_menu")
const sideMenu = document.querySelector("#nav_menu")

openMenu.addEventListener("click", function() {
  sideMenu.classList.add("active")
})

hideMenu.addEventListener("click", function() {
  sideMenu.classList.remove("active")
})