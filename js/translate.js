/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

function translate() {
	this.init = function (language, attribute) {
		this.attribute = attribute;
		this.language = language;
	}

	this.process = function () {
		_self = this;
		let file = new XMLHttpRequest();

		file.open("GET", `./config/lang/${this.language}.json`, false);
		file.onreadystatechange = function () {
			if (file.readyState == 4 && (file.status === 200 || file.status === 0)) {
				let languageContent = JSON.parse(file.responseText);
				let elements = document.getElementsByTagName("*");

				for (let i = 0; i < elements.length; i++) {
					let element = elements[i];
					let key = element.getAttribute(_self.attribute);

					if (key != null) {
						element.innerHTML = languageContent[key];
					}
				}
			}
		}

		file.send();
	}
}

function toggleTranslation(language, attribute) {
	let translation = new translate();
	translation.init(language, attribute);
	translation.process();
}

function checkLanguage() {
	let cookies = document.cookie;

	if (cookies.includes("language")) {
		let cookiesList = {};

		cookies.split(';').forEach(function (element) {
			let [key, value] = element.split('=');
			cookiesList[key.trim()] = value;
		});

		toggleTranslation(cookiesList["language"], "ltag");
	} else {
		document.cookie = "language=en; expires=Fri, 31 Dec 9999 23:59:59 GMT";
		toggleTranslation("en", "ltag");
	}
} checkLanguage();
