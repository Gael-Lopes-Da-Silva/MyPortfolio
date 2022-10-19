const today = new Date();

function toggleAutoAge() {
    const birthday = new Date(2003, 6, 19);
    
    var age = today.getFullYear() - birthday.getFullYear();

    if (today.getMonth() + 1 < birthday.getMonth() || (today.getMonth() + 1 == birthday.getMonth() && today.getDate() < birthday.getDate())) {
        age--;
    }

    if (today.getDate() == birthday.getDate() && today.getMonth() + 1 == birthday.getMonth()) {
        // TODO: créer un evènement avec des gateaux
    } else {
        document.querySelector("#age").innerText = `${age}`;
    }
}

function toggleHollidaysEvents() {
    const easter = new Date(0, 4, 9);
    const halloween = new Date(0, 10, 31);
    const christmas = new Date(0, 12, 25);

    if ((today.getDate() > easter.getDate() - 5 && today.getDate() < easter.getDate() + 5) && today.getMonth() + 1 == easter.getMonth()) {
        document.querySelector("#easter").classList.add("active");
    }

    if ((today.getDate() > halloween.getDate() - 5 && today.getDate() < halloween.getDate() + 5) && today.getMonth() + 1 == halloween.getMonth()) {
        document.querySelector("#halloween").classList.add("active");
    }

    if ((today.getDate() > christmas.getDate() - 5 && today.getDate() < christmas.getDate() + 5) && today.getMonth() + 1 == christmas.getMonth()) {
        document.querySelector("#christmas").classList.add("active");
    }
}

toggleAutoAge();
toggleHollidaysEvents();
