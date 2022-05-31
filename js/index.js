const ageText = document.querySelector("#age");
const birthday = new Date(2003, 6, 19);
const today = new Date();

function toggleAutoAge() {
    var age = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() < birthday.getMonth() || (today.getMonth() == birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (today.getDate() == birthday.getDate() && today.getMonth() == birthday.getMonth()) {
        ageText.innerText = `🎂${age} years old🎂`;
    } else {
        ageText.innerText = `${age} years old`;
    }
}

toggleAutoAge();
