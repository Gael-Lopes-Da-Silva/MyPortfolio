const openMenu = document.querySelector("#show_menu");
const hideMenu = document.querySelector("#hide_menu");
const sideMenu = document.querySelector("#nav_menu");

const menuButtons = sideMenu.querySelectorAll("a");

const resumeContainer = document.querySelector("#resume_container");
const resumeSection = document.querySelector("#resume_section");
const resumeFr = document.querySelector("#resume_fr");
const resumeGb = document.querySelector("#resume_gb");

const resumeFrButton = document.querySelector("#resume_fr_button");
const resumeGbButton = document.querySelector("#resume_gb_button");
const resumeFrReturn = document.querySelector("#resume_fr_return");
const resumeGbReturn = document.querySelector("#resume_gb_return");

function toggleMenu() {
  openMenu.addEventListener("click", function() {
    sideMenu.classList.add("active");
    openMenu.setAttribute("tabindex", "-1");
    hideMenu.setAttribute("tabindex", "1");
    
    for (var i = 0; i < menuButtons.length; i++) {
      menuButtons[i].setAttribute("tabindex", "1");
    }
  })

  document.addEventListener("keydown", function(event) {
    if (event.key == " " || event.key == "ArrowRight")
    {
      sideMenu.classList.add("active");
      openMenu.setAttribute("tabindex", "-1");
      hideMenu.setAttribute("tabindex", "1");
      
      for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].setAttribute("tabindex", "1");
      }
    }

    if (document.activeElement == openMenu && event.key == "Enter") {
      sideMenu.classList.add("active");
      openMenu.setAttribute("tabindex", "-1");
      hideMenu.setAttribute("tabindex", "1");
      
      for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].setAttribute("tabindex", "1");
      }
      menuButtons[0].focus();
    }

    if (document.activeElement == hideMenu && event.key == "Enter") {
      sideMenu.classList.remove("active");
      openMenu.setAttribute("tabindex", "1");
      hideMenu.setAttribute("tabindex", "-1");
      
      for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].setAttribute("tabindex", "-1");
      }
    }
  })

  hideMenu.addEventListener("click", function() {
    sideMenu.classList.remove("active");
    openMenu.setAttribute("tabindex", "1");
    hideMenu.setAttribute("tabindex", "-1");

    for (var i = 0; i < menuButtons.length; i++) {
      menuButtons[i].setAttribute("tabindex", "-1");
    }
  })

  document.addEventListener("keydown", function(event) {
    if (event.key == "Escape" || event.key == "ArrowLeft")
    {
      sideMenu.classList.remove("active");
      openMenu.setAttribute("tabindex", "1");
      hideMenu.setAttribute("tabindex", "-1");

      for (var i = 0; i < menuButtons.length; i++) {
        menuButtons[i].setAttribute("tabindex", "-1");
      }
    }
  })
}

function toggleResume() {
  resumeFrButton.addEventListener("click", function() {
    resumeSection.classList.add("hide");
    resumeContainer.classList.add("change");
    resumeFr.classList.add("display");
  })

  resumeFrReturn.addEventListener("click", function() {
    resumeSection.classList.remove("hide");
    resumeContainer.classList.remove("change");
    resumeFr.classList.remove("display");
  })

  resumeGbButton.addEventListener("click", function() {
    resumeSection.classList.add("hide");
    resumeContainer.classList.add("change");
    resumeGb.classList.add("display");
  })

  resumeGbReturn.addEventListener("click", function() {
    resumeSection.classList.remove("hide");
    resumeContainer.classList.remove("change");
    resumeGb.classList.remove("display");
  })

  document.addEventListener("keydown", function(event) {
    if (document.activeElement == resumeFrButton && event.key == "Enter") {
      resumeSection.classList.add("hide");
      resumeContainer.classList.add("change");
      resumeFr.classList.add("display");
    }

    if (document.activeElement == resumeFrReturn && event.key == "Enter") {
      resumeSection.classList.remove("hide");
      resumeContainer.classList.remove("change");
      resumeFr.classList.remove("display");
    }

    if (document.activeElement == resumeGbButton && event.key == "Enter") {
      resumeSection.classList.add("hide");
      resumeContainer.classList.add("change");
      resumeGb.classList.add("display");
    }

    if (document.activeElement == resumeGbReturn && event.key == "Enter") {
      resumeSection.classList.remove("hide");
      resumeContainer.classList.remove("change");
      resumeGb.classList.remove("display");
    }
  })
}

toggleMenu()
toggleResume()
