const today = new Date();

function toggleAgeCount() {
    const birthday = new Date(2003, 6, 19);

    let age = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() + 1 < birthday.getMonth() || (today.getMonth() + 1 == birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (today.getDate() == birthday.getDate() && today.getMonth() + 1 == birthday.getMonth()) {
        document.querySelector("#birthday").classList.add("active");
    } else {
        document.querySelector("#age").innerText = `${age}`;
    }
}

function toggleHollidaysCelebration() {
    const easter = new Date();
    easter.setDate(9);
    easter.setMonth(4 - 1);

    const halloween = new Date();
    halloween.setDate(31);
    halloween.setMonth(10 - 1);

    const christmas = new Date();
    christmas.setDate(25);
    christmas.setMonth(12 - 1);

    if ((today.getDate()+1 > easter.getDate() - 5 && today.getDate()+1 < easter.getDate() + 5) && today.getMonth()+1 == easter.getMonth()+1) {
        document.querySelector("#easter").classList.add("active");
    }

    if ((today.getDate()+1 > halloween.getDate() - 5 && today.getDate()+1 < halloween.getDate() + 5) && today.getMonth()+1 == halloween.getMonth()+1) {
        document.querySelector("#halloween").classList.add("active");
    }

    if ((today.getDate()+1 > christmas.getDate() - 5 && today.getDate()+1 < christmas.getDate() + 5) && today.getMonth()+1 == christmas.getMonth()+1) {
        document.querySelector("#christmas").classList.add("active");
    }
}

toggleAgeCount();
toggleHollidaysCelebration();
