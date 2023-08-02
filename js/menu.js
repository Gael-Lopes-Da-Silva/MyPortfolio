/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

const sideMenu = document.querySelector(".menu");
const buttonOpenMenu = document.querySelector(".show_menu");
const buttonHideMenu = document.querySelector(".hide_menu");

const languageMenu = document.querySelector(".language_menu");
const buttonOpenLanguageMenu = document.querySelector(".show_language_menu");
const buttonHideLanguageMenu = document.querySelector(".hide_language_menu");

function toggleSideMenu() {
    const sideMenuButtons = sideMenu.querySelectorAll("a");

    buttonOpenMenu.addEventListener("click", function () {
        sideMenu.classList.add("active");
        languageMenu.classList.remove("active");
        buttonOpenMenu.setAttribute("tabindex", "-1");
        buttonHideMenu.setAttribute("tabindex", "1");
        buttonOpenLanguageMenu.setAttribute("tabindex", "-1");

        for (let i = 0; i < sideMenuButtons.length; i++) {
            sideMenuButtons[i].setAttribute("tabindex", "1");
        }
    });

    buttonHideMenu.addEventListener("click", function () {
        sideMenu.classList.remove("active");
        buttonOpenMenu.setAttribute("tabindex", "1");
        buttonHideMenu.setAttribute("tabindex", "-1");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");

        for (let i = 0; i < sideMenuButtons.length; i++) {
            sideMenuButtons[i].setAttribute("tabindex", "-1");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key == "ArrowRight") {
            sideMenu.classList.add("active");
            languageMenu.classList.remove("active");
            buttonOpenMenu.setAttribute("tabindex", "-1");
            buttonHideMenu.setAttribute("tabindex", "1");
            buttonOpenLanguageMenu.setAttribute("tabindex", "-1");

            for (let i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "1");
            }
        }
        if (event.key == "Escape") {
            sideMenu.classList.remove("active");
            buttonOpenMenu.setAttribute("tabindex", "1");
            buttonHideMenu.setAttribute("tabindex", "-1");
            buttonOpenLanguageMenu.setAttribute("tabindex", "1");

            for (let i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "-1");
            }
        }

        if (document.activeElement == buttonOpenMenu && event.key == "Enter") {
            sideMenu.classList.add("active");
            languageMenu.classList.remove("active");
            buttonOpenMenu.setAttribute("tabindex", "-1");
            buttonHideMenu.setAttribute("tabindex", "1");
            buttonOpenLanguageMenu.setAttribute("tabindex", "-1");

            for (let i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "1");
            }
            sideMenuButtons[0].focus();
        }

        if (document.activeElement == buttonHideMenu && event.key == "Enter") {
            sideMenu.classList.remove("active");
            buttonOpenMenu.setAttribute("tabindex", "1");
            buttonHideMenu.setAttribute("tabindex", "-1");
            buttonOpenLanguageMenu.setAttribute("tabindex", "1");

            for (let i = 0; i < sideMenuButtons.length; i++) {
                sideMenuButtons[i].setAttribute("tabindex", "-1");
            }
        }
    });
}

function toggleLanguageMenu() {
    const languageButtons = languageMenu.querySelectorAll("img");
    const buttonEnglish = document.querySelector(".language_english");
    const buttonFrench = document.querySelector(".language_french");
    const buttonJapanese = document.querySelector(".language_japanese");
    const buttonSwedish = document.querySelector(".language_swedish");
    const buttonChinese = document.querySelector(".language_chinese");
    const buttonGerman = document.querySelector(".language_german");
    const buttonSpanish = document.querySelector(".language_spanish");
    
    buttonOpenLanguageMenu.addEventListener("click", () => {
        languageMenu.classList.add("active");
        sideMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "-1");
        buttonHideLanguageMenu.setAttribute("tabindex", "1");
        buttonOpenMenu.setAttribute("tabindex", "-1");

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "1");
        }
    });

    buttonHideLanguageMenu.addEventListener("click", () => {
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key == "ArrowLeft") {
            languageMenu.classList.add("active");
            sideMenu.classList.remove("active");
            buttonOpenLanguageMenu.setAttribute("tabindex", "-1");
            buttonHideLanguageMenu.setAttribute("tabindex", "1");
            buttonOpenMenu.setAttribute("tabindex", "-1");

            for (let i = 0; i < languageButtons.length; i++) {
                languageButtons[i].setAttribute("tabindex", "1");
            }
        }
        if (event.key == "Escape") {
            languageMenu.classList.remove("active");
            buttonOpenLanguageMenu.setAttribute("tabindex", "1");
            buttonHideLanguageMenu.setAttribute("tabindex", "-1");
            buttonOpenMenu.setAttribute("tabindex", "1");

            for (let i = 0; i < languageButtons.length; i++) {
                languageButtons[i].setAttribute("tabindex", "-1");
            }
        }

        if (document.activeElement == buttonOpenLanguageMenu && event.key == "Enter") {
            languageMenu.classList.add("active");
            sideMenu.classList.remove("active");
            buttonOpenLanguageMenu.setAttribute("tabindex", "-1");
            buttonHideLanguageMenu.setAttribute("tabindex", "1");
            buttonOpenMenu.setAttribute("tabindex", "-1");

            for (let i = 0; i < languageButtons.length; i++) {
                languageButtons[i].setAttribute("tabindex", "1");
            }
            languageButtons[0].focus();
        }
        else {
            for (let i = 0; i < languageButtons.length; i++) {
                if (document.activeElement == languageButtons[i] && event.key == "Enter") {
                    languageButtons[i].click();
                }
            }
        }

        if (document.activeElement == buttonHideLanguageMenu && event.key == "Enter") {
            languageMenu.classList.remove("active");
            buttonOpenLanguageMenu.setAttribute("tabindex", "1");
            buttonHideLanguageMenu.setAttribute("tabindex", "-1");
            buttonOpenMenu.setAttribute("tabindex", "1");

            for (let i = 0; i < languageButtons.length; i++) {
                languageButtons[i].setAttribute("tabindex", "-1");
            }
        }
    });

    buttonFrench.addEventListener("click", () => {
        toggleTranslation('fr', 'ltag');
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        document.cookie = "language=fr; expires=Fri, 31 Dec 9999 23:59:59 GMT";

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });

    buttonEnglish.addEventListener("click", () => {
        toggleTranslation('en', 'ltag');
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        document.cookie = "language=en; expires=Fri, 31 Dec 9999 23:59:59 GMT";

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });

    buttonJapanese.addEventListener("click", () => {
        toggleTranslation('jp', 'ltag');
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        document.cookie = "language=jp; expires=Fri, 31 Dec 9999 23:59:59 GMT";

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });

    buttonSwedish.addEventListener("click", () => {
        toggleTranslation('se', 'ltag');
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        document.cookie = "language=se; expires=Fri, 31 Dec 9999 23:59:59 GMT";

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });

    buttonChinese.addEventListener("click", () => {
        toggleTranslation('cn', 'ltag');
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        document.cookie = "language=cn; expires=Fri, 31 Dec 9999 23:59:59 GMT";

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });

    buttonGerman.addEventListener("click", () => {
        toggleTranslation('de', 'ltag');
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        document.cookie = "language=de; expires=Fri, 31 Dec 9999 23:59:59 GMT";

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });

    buttonSpanish.addEventListener("click", () => {
        toggleTranslation('ea', 'ltag');
        languageMenu.classList.remove("active");
        buttonOpenLanguageMenu.setAttribute("tabindex", "1");
        buttonHideLanguageMenu.setAttribute("tabindex", "-1");
        buttonOpenMenu.setAttribute("tabindex", "1");

        document.cookie = "language=ea; expires=Fri, 31 Dec 9999 23:59:59 GMT";

        for (let i = 0; i < languageButtons.length; i++) {
            languageButtons[i].setAttribute("tabindex", "-1");
        }
    });
}

toggleSideMenu();
toggleLanguageMenu();
