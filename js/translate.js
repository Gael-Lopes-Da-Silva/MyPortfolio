function translate() {
    this.init = function(language, attribute) {
        this.attribute = attribute;
        this.language = language;
    }

    this.process = function() {
        _self = this;
        let file = new XMLHttpRequest();

        file.open("GET", `./../config/lang/${this.language}.json`, false);
        file.onreadystatechange = function() {
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

toggleTranslation('fr', 'ltag')
