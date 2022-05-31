const sideMenu = document.querySelector(".menu");
const buttonOpenMenu = document.querySelector(".show_menu");
const buttonHideMenu = document.querySelector(".hide_menu");

const sideMenuButtons = sideMenu.querySelectorAll("a");

function toggleSideMenu() {
    buttonOpenMenu.addEventListener("click", function () {
        sideMenu.classList.add("active");
        buttonOpenMenu.setAttribute("tabindex", "-1");
        buttonHideMenu.setAttribute("tabindex", "1");

        for (var i = 0; i < sideMenuButtons.length; i++) {
            sideMenuButtons[i].setAttribute("tabindex", "1");
        }
    })

    buttonHideMenu.addEventListener("click", function () {
        sideMenu.classList.remove("active");
        buttonOpenMenu.setAttribute("tabindex", "1");
        buttonHideMenu.setAttribute("tabindex", "-1");

        for (var i = 0; i < sideMenuButtons.length; i++) {
            sideMenuButtons[i].setAttribute("tabindex", "-1");
        }
    })

    document.addEventListener("keydown", function (event) {
        if (event.key == " " || event.key == "ArrowRight") {
            sideMenu.classList.add("active");
            buttonOpenMenu.setAttribute("tabindex", "-1");
            buttonHideMenu.setAttribute("tabindex", "1");

            for (var i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "1");
            }
        }

        if (document.activeElement == buttonOpenMenu && event.key == "Enter") {
            sideMenu.classList.add("active");
            buttonOpenMenu.setAttribute("tabindex", "-1");
            buttonHideMenu.setAttribute("tabindex", "1");

            for (var i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "1");
            }
            sideMenuButtons[0].focus();
        }

        if (document.activeElement == buttonHideMenu && event.key == "Enter") {
            sideMenu.classList.remove("active");
            buttonOpenMenu.setAttribute("tabindex", "1");
            buttonHideMenu.setAttribute("tabindex", "-1");

            for (var i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "-1");
            }
        }

        if (event.key == "Escape" || event.key == "ArrowLeft") {
            sideMenu.classList.remove("active");
            buttonOpenMenu.setAttribute("tabindex", "1");
            buttonHideMenu.setAttribute("tabindex", "-1");

            for (var i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "-1");
            }
        }
    })
}

toggleSideMenu()
