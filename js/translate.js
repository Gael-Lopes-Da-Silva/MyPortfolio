function translate() {
    this.init = function(language, attribute) {
        this.attribute = attribute;
        this.language = language;
    }

    this.process = function() {
        _self = this;
        var file = new XMLHttpRequest();

        file.open("GET", `../config/lang/${this.language}.json`, false);
        file.onreadystatechange = function() {
            if (file.readyState == 4 && (file.status === 200 || file.status === 0)) {
                var languageContent = JSON.parse(file.responseText);
                var elements = document.getElementsByTagName("*");

                for (var i = 0; i < elements.length; i++) {
                    var element = elements[i];
                    var key = element.getAttribute(_self.attribute);

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
    var translation = new translate();
    translation.init(language, attribute);
    translation.process();
}

toggleTranslation('fr', 'ltag')
