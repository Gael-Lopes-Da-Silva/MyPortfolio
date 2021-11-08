// fonctions //

function createCookie(nom, valeur, jours) {
    if (jours) {
        var date = new Date();
        date.setTime(date.getTime() + (jours * 24 * 60 * 60 * 1000));
        var expire = "; expire=" + date.toGMTString();
    } else { var expire = ""; }

    document.cookie = nom + "=" + valeur + expire + "; path=/";
}

function getCookieValue(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

function changeCookieValue() {
    createCookie("asAlreadyRead", "true")
}

function checkIfAsAlreadyRead() {
    if (document.cookie.length == 0) {
        createCookie("asAlreadyRead", "false", 30)
    } else if (Boolean(getCookieValue("asAlreadyRead")) == true) {
        window.location.href = "main/accueil.html";
    }
}

function setTitle(extra) {
    document.title = extra;
}


setTitle("Portfolio");
checkIfAsAlreadyRead();