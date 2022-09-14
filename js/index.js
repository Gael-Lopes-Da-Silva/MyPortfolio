const ageText = document.querySelector("#age");
const birthday = new Date(2003, 6, 19);
const today = new Date();

function toggleAutoAge() {
    var age = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth()+1 < birthday.getMonth() || (today.getMonth()+1 == birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (today.getDate() == birthday.getDate() && today.getMonth()+1 == birthday.getMonth()) {
        ageText.innerText = `🎂${age} years old🎂`;
    } else {
        ageText.innerText = `${age} years old`;
    }
}

const easterEvent = document.querySelector("#easter");
const easter = new Date(0, 4, 9);
const halloweenEvent = document.querySelector("#halloween");
const halloween = new Date(0, 10, 31);
const christmasEvent = document.querySelector("#christmas");
const christmas = new Date(0, 12, 25);

function toggleHollidaysEvents() {
    if ((today.getDate() > easter.getDate()-5 && today.getDate() < easter.getDate()+5) && today.getMonth()+1 == easter.getMonth()) {
        easterEvent.classList.add("active");
    }
    
    if ((today.getDate() > halloween.getDate()-5 && today.getDate() < halloween.getDate()+5) && today.getMonth()+1 == halloween.getMonth()) {
        halloweenEvent.classList.add("active");
    }

    if ((today.getDate() > christmas.getDate()-5 && today.getDate() < christmas.getDate()+5) && today.getMonth()+1 == christmas.getMonth()) {
        christmasEvent.classList.add("active");
    }
}

toggleAutoAge();
toggleHollidaysEvents();
