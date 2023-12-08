/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

{
	const navigationMenu = document.querySelector(".navigation_menu");
	const showNavigationMenu = document.querySelector(".show_navigation_menu");
	const hideNavigationMenu = document.querySelector(".hide_navigation_menu");
	const navigationMenuButtons = navigationMenu.querySelectorAll("a");

	showNavigationMenu.addEventListener("click", function () {
		navigationMenu.classList.add("active");
		showNavigationMenu.setAttribute("tabindex", "-1");
		hideNavigationMenu.setAttribute("tabindex", "1");

		for (let i = 0; i < navigationMenuButtons.length; i++) {
			navigationMenuButtons[i].setAttribute("tabindex", "1");
		}
	});

	hideNavigationMenu.addEventListener("click", function () {
		navigationMenu.classList.remove("active");
		showNavigationMenu.setAttribute("tabindex", "1");
		hideNavigationMenu.setAttribute("tabindex", "-1");

		for (let i = 0; i < navigationMenuButtons.length; i++) {
			navigationMenuButtons[i].setAttribute("tabindex", "-1");
		}
	});

	document.addEventListener("keydown", function (event) {
		if (event.key == "Escape") {
			navigationMenu.classList.remove("active");
			showNavigationMenu.setAttribute("tabindex", "1");
			hideNavigationMenu.setAttribute("tabindex", "-1");

			for (let i = 0; i < navigationMenuButtons.length; i++) {
				navigationMenuButtons[i].setAttribute("tabindex", "-1");
			}
		}

		if (document.activeElement == showNavigationMenu && event.key == "Enter") {
			navigationMenu.classList.add("active");
			showNavigationMenu.setAttribute("tabindex", "-1");
			hideNavigationMenu.setAttribute("tabindex", "1");

			for (let i = 0; i < navigationMenuButtons.length; i++) {
				navigationMenuButtons[i].setAttribute("tabindex", "1");
			}
			navigationMenuButtons[0].focus();
		}

		if (document.activeElement == hideNavigationMenu && event.key == "Enter") {
			navigationMenu.classList.remove("active");
			showNavigationMenu.setAttribute("tabindex", "1");
			hideNavigationMenu.setAttribute("tabindex", "-1");

			for (let i = 0; i < navigationMenuButtons.length; i++) {
				navigationMenuButtons[i].setAttribute("tabindex", "-1");
			}
			showNavigationMenu.focus();
		}
	});
}


