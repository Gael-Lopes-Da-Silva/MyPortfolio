const openMenu = document.querySelector("#show_menu");
const hideMenu = document.querySelector("#hide_menu");
const sideMenu = document.querySelector("#nav_menu");

function toggleMenu() {
  openMenu.addEventListener("click", function() {
    sideMenu.classList.add("active");
  })

  document.addEventListener("keydown", function(event) {
    if (event.key == " " || event.key == "ArrowRight")
    {
      sideMenu.classList.add("active");
    }
  })

  hideMenu.addEventListener("click", function() {
    sideMenu.classList.remove("active");
  })

  document.addEventListener("keydown", function(event) {
    if (event.key == "Escape" || event.key == "ArrowLeft")
    {
      sideMenu.classList.remove("active");
    }
  })
}

toggleMenu()
