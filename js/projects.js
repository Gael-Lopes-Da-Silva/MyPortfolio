/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

const projectsContainer = document.getElementById("personnal");
const loadingInfos = document.getElementById("loading_infos");
const requestURL = "https://api.github.com/users/gael-lopes-da-silva/repos";

function loadRepositories() {
    fetch(requestURL).then(function(response) {
        if (!response.ok) throw new Error("unable to load github repositories");
        else return response.json();
    }).then(function(response) {
        projectsContainer.removeChild(loadingInfos);

        let index = 0;
        let personnalRow = document.createElement("div");
        personnalRow.classList.add("personnal_row");

        response.forEach(element => {
            if (index >= 2) {
                personnalRow = document.createElement("div");
                personnalRow.classList.add("personnal_row");
                index = 0;
            }

            let link = document.createElement("a");
            link.classList.add("repo");
            link.href = "https://github.com/" + element.full_name;
            link.target = "_black";

            let githubRepository = document.createElement("img");
            githubRepository.src = "https://github-readme-stats.vercel.app/api/pin/?username=" + element.owner.login + "&repo=" + element.name;
            githubRepository.alt = element.name;

            link.appendChild(githubRepository);
            personnalRow.appendChild(link);
            projectsContainer.appendChild(personnalRow);

            index++;
        });
    }).catch(function(error) {
        loadingInfos.innerHTML = error;
    });
}

loadRepositories();