/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

{
	const languageMenu = document.querySelector(".language_menu");
	const showLanguageMenu = document.querySelector(".show_language_menu");
	const hideLanguageMenu = document.querySelector(".hide_language_menu");
	const languageMenuButtons = languageMenu.querySelectorAll("img");
	const english = document.querySelector(".language_english");
	const french = document.querySelector(".language_french");
	const japanese = document.querySelector(".language_japanese");
	const swedish = document.querySelector(".language_swedish");
	const chinese = document.querySelector(".language_chinese");
	const german = document.querySelector(".language_german");
	const spanish = document.querySelector(".language_spanish");
	const korean = document.querySelector(".language_korean");

	showLanguageMenu.addEventListener("click", () => {
		languageMenu.classList.add("active");
		showLanguageMenu.setAttribute("tabindex", "-1");
		hideLanguageMenu.setAttribute("tabindex", "1");

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "1");
		}
	});

	hideLanguageMenu.addEventListener("click", () => {
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	document.addEventListener("keydown", function (event) {
		if (event.key == "Escape") {
			languageMenu.classList.remove("active");
			showLanguageMenu.setAttribute("tabindex", "1");
			hideLanguageMenu.setAttribute("tabindex", "-1");

			for (let i = 0; i < languageMenuButtons.length; i++) {
				languageMenuButtons[i].setAttribute("tabindex", "-1");
			}
		}

		if (document.activeElement == showLanguageMenu && event.key == "Enter") {
			languageMenu.classList.add("active");
			showLanguageMenu.setAttribute("tabindex", "-1");
			hideLanguageMenu.setAttribute("tabindex", "1");

			for (let i = 0; i < languageMenuButtons.length; i++) {
				languageMenuButtons[i].setAttribute("tabindex", "1");
			}
			languageMenuButtons[0].focus();
		}
		else {
			for (let i = 0; i < languageMenuButtons.length; i++) {
				if (document.activeElement == languageMenuButtons[i] && event.key == "Enter") {
					languageMenuButtons[i].click();
				}
			}
		}

		if (document.activeElement == hideLanguageMenu && event.key == "Enter") {
			languageMenu.classList.remove("active");
			showLanguageMenu.setAttribute("tabindex", "1");
			hideLanguageMenu.setAttribute("tabindex", "-1");

			for (let i = 0; i < languageMenuButtons.length; i++) {
				languageMenuButtons[i].setAttribute("tabindex", "-1");
			}
			showLanguageMenu.focus();
		}
	});

	french.addEventListener("click", () => {
		toggleTranslation('french', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=french; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	english.addEventListener("click", () => {
		toggleTranslation('english', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=english; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	japanese.addEventListener("click", () => {
		toggleTranslation('japanese', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=japanese; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	swedish.addEventListener("click", () => {
		toggleTranslation('swedish', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=swedish; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	chinese.addEventListener("click", () => {
		toggleTranslation('chinese', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=chinese; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	german.addEventListener("click", () => {
		toggleTranslation('german', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=german; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	spanish.addEventListener("click", () => {
		toggleTranslation('spanish', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=spanish; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	korean.addEventListener("click", () => {
		toggleTranslation('korean', 'ltag');
		languageMenu.classList.remove("active");
		showLanguageMenu.setAttribute("tabindex", "1");
		hideLanguageMenu.setAttribute("tabindex", "-1");

		document.cookie = "language=korean; expires=Fri, 31 Dec 9999 23:59:59 GMT";

		for (let i = 0; i < languageMenuButtons.length; i++) {
			languageMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});
}