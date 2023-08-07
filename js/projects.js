/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

function loadRepositories() {
    const projectsPersonnal = document.getElementById("projects_personnal");
    const projectsContributed = document.getElementById("projects_contributed");
    const requestURL = "https://api.github.com/users/gael-lopes-da-silva/repos";

    fetch(requestURL).then(function(response) {
        if (!response.ok) throw new Error("unable to load github repositories");
        else return response.json();
    }).then(function(response) {
        for (const element of response) {
            var repository = document.createElement("a");
            repository.classList.add("repository");
            repository.target = "_blank";
            repository.href = element.html_url;

            var title_container = document.createElement("div");
            title_container.classList.add("repository_title_container");

            var title = document.createElement("p");
            title.classList.add("repository_title");
            title.textContent = element.name;

            var title_icon = document.createElement("span");
            title_icon.textContent = "📙";

            title_container.appendChild(title_icon);
            title_container.appendChild(title);

            var description = document.createElement("p");
            description.classList.add("repository_description");
            description.textContent = element.description;

            var badges = document.createElement("div");
            badges.classList.add("repository_badges");

            // https://badgen.net/
            var badges_stars = document.createElement("img");
            badges_stars.src = "https://badgen.net/github/stars/" + element.full_name;
            badges.appendChild(badges_stars);

            var badges_forks = document.createElement("img");
            badges_forks.src = "https://badgen.net/github/forks/" + element.full_name;
            badges.appendChild(badges_forks);

            var badges_watchers = document.createElement("img");
            badges_watchers.src = "https://badgen.net/github/watchers/" + element.full_name;
            badges.appendChild(badges_watchers);
            
            if (element.language != null) {
                var badges_language = document.createElement("img");
                badges_language.src = "https://badgen.net/badge/language/" + element.language;
                badges.appendChild(badges_language);
            }

            repository.appendChild(title_container);
            repository.appendChild(description);
            repository.appendChild(badges);

            if (element.fork == false) {
                projectsPersonnal.appendChild(repository);
            } else {
                projectsContributed.appendChild(repository);
            }
        }
    }).catch(function(error) {
        console.log(error);
    });
} loadRepositories();