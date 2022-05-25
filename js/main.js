const openMenu = document.querySelector("#show_menu");
const hideMenu = document.querySelector("#hide_menu");
const sideMenu = document.querySelector("#nav_menu");

const menuButtons = sideMenu.querySelectorAll("a");

function toggleMenu() {
    openMenu.addEventListener("click", function () {
        sideMenu.classList.add("active");
        openMenu.setAttribute("tabindex", "-1");
        hideMenu.setAttribute("tabindex", "1");

        for (var i = 0; i < menuButtons.length; i++) {
            menuButtons[i].setAttribute("tabindex", "1");
        }
    })

    document.addEventListener("keydown", function (event) {
        if (event.key == " " || event.key == "ArrowRight") {
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

    hideMenu.addEventListener("click", function () {
        sideMenu.classList.remove("active");
        openMenu.setAttribute("tabindex", "1");
        hideMenu.setAttribute("tabindex", "-1");

        for (var i = 0; i < menuButtons.length; i++) {
            menuButtons[i].setAttribute("tabindex", "-1");
        }
    })

    document.addEventListener("keydown", function (event) {
        if (event.key == "Escape" || event.key == "ArrowLeft") {
            sideMenu.classList.remove("active");
            openMenu.setAttribute("tabindex", "1");
            hideMenu.setAttribute("tabindex", "-1");

            for (var i = 0; i < menuButtons.length; i++) {
                menuButtons[i].setAttribute("tabindex", "-1");
            }
        }
    })
}

toggleMenu()
