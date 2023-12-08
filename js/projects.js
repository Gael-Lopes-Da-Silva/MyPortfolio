/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

{
	const projectsPersonnal = document.getElementById("projects_personnal");
	const requestURL = "https://api.github.com/users/gael-lopes-da-silva/repos";

	fetch(requestURL)
		.then(function (response) {
			if (!response.ok) throw new Error("unable to load github repositories");
			else return response.json();
		})
		.then(function (response) {
			for (const element of response) {
				if (element.fork == true) continue;

				let repository = document.createElement("a");
				repository.classList.add("repository");
				repository.target = "_blank";
				repository.href = element.html_url;

				let title_container = document.createElement("div");
				title_container.classList.add("repository_title_container");

				let title_icon = document.createElement("img");
				title_icon.classList.add("repository_icon");
				title_icon.src = "img/icons/repo.svg";
				title_icon.alt = "";

				let title = document.createElement("p");
				title.classList.add("repository_title");
				title.textContent = element.name;

				title_container.appendChild(title_icon);
				title_container.appendChild(title);

				let description = document.createElement("p");
				description.classList.add("repository_description");
				description.textContent = element.description;

				let badges = document.createElement("div");
				badges.classList.add("repository_badges");

				let badges_stars = document.createElement("div");
				badges_stars.classList.add("badge");
				let badges_stars_title = document.createElement("p");
				badges_stars_title.textContent = "stars";
				badges_stars_title.classList.add("badge_title");
				let badges_stars_content = document.createElement("p");
				badges_stars_content.textContent = element.stargazers_count;
				badges_stars_content.classList.add("badge_content");
				badges_stars.appendChild(badges_stars_title);
				badges_stars.appendChild(badges_stars_content);
				badges.appendChild(badges_stars);

				let badges_forks = document.createElement("div");
				badges_forks.classList.add("badge");
				let badges_forks_title = document.createElement("p");
				badges_forks_title.textContent = "forks";
				badges_forks_title.classList.add("badge_title");
				let badges_forks_content = document.createElement("p");
				badges_forks_content.textContent = element.forks_count;
				badges_forks_content.classList.add("badge_content");
				badges_forks.appendChild(badges_forks_title);
				badges_forks.appendChild(badges_forks_content);
				badges.appendChild(badges_forks);

				let badges_watchers = document.createElement("div");
				badges_watchers.classList.add("badge");
				let badges_watchers_title = document.createElement("p");
				badges_watchers_title.textContent = "watchers";
				badges_watchers_title.classList.add("badge_title");
				let badges_watchers_content = document.createElement("p");
				badges_watchers_content.textContent = element.watchers_count;
				badges_watchers_content.classList.add("badge_content");
				badges_watchers.appendChild(badges_watchers_title);
				badges_watchers.appendChild(badges_watchers_content);
				badges.appendChild(badges_watchers);

				if (element.language != null) {
					let badges_language = document.createElement("div");
					badges_language.classList.add("badge");
					let badges_language_title = document.createElement("p");
					badges_language_title.textContent = "language";
					badges_language_title.classList.add("badge_title");
					let badges_language_content = document.createElement("p");
					badges_language_content.textContent = element.language;
					badges_language_content.classList.add("badge_content");
					badges_language.appendChild(badges_language_title);
					badges_language.appendChild(badges_language_content);
					badges.appendChild(badges_language);
				}

				repository.appendChild(title_container);
				repository.appendChild(description);
				repository.appendChild(badges);

				projectsPersonnal.appendChild(repository);
			}
		})
		.catch(function (error) {
			console.log(error);
		});
}
