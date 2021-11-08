// fonctions //
function getCurrentFileName() {
    var path = window.location.pathname;
    var file = path.split("/").pop();
    return fileName = file.split(".").shift();
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

activated = false
function menuButtonScript(x) {
    x.classList.toggle("change");

    if (activated == false) {
        document.getElementsByClassName("droite")[0].style.display = "none";
        document.getElementsByClassName("gauche")[0].style.display = "block";
        document.getElementsByClassName("gauche")[0].style.width = "100%";
        activated = true
    } else {
        document.getElementsByClassName("gauche")[0].style.display = "none";
        document.getElementsByClassName("droite")[0].style.display = "block";
        document.getElementsByClassName("gauche")[0].style.width = "320px";
        activated = false
    }

}

function setTitle(extra) {
    document.title = capitalizeFirstLetter(getCurrentFileName()) + " - " + extra;
}

setTitle("Mon Site");