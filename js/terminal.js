/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

{
	const terminal_container = document.getElementById("terminal_container");
	const terminal_output = document.getElementById("terminal_output");
	const terminal_input_prompt = document.getElementById("terminal_input_prompt");
	const terminal_input = document.getElementById("terminal_input");
	const terminal_banner_help = document.getElementById("terminal_banner_help");

	{
		let success = true;

		terminal_input.focus();
		terminal_input.addEventListener("keydown", function (event) {
			if (event.key === "Enter") {
				let command = terminal_input.value.toLowerCase().split(" ");
				terminal_input.value = "";

				let terminal_output_area = document.createElement("div");
				terminal_output_area.className = "terminal_output_area";

				let terminal_output_header = document.createElement("p");
				terminal_output_header.className = "terminal_output_header";
				terminal_output_header.textContent = "~";

				let div = document.createElement("div");

				let terminal_output_prompt = document.createElement("p");
				terminal_output_prompt.className = "terminal_output_prompt";
				terminal_output_prompt.style.color = success ? "#00FF00" : "#FF0000";
				terminal_output_prompt.textContent = "➜";

				let terminal_output_input = document.createElement("p");
				terminal_output_input.className = "terminal_output_input";
				terminal_output_input.textContent = command[0];

				div.appendChild(terminal_output_prompt);
				div.appendChild(terminal_output_input);

				terminal_output_area.appendChild(terminal_output_header);
				terminal_output_area.appendChild(div);

				switch (command[0]) {
					case "clear":
						terminal_output.innerHTML = "";
						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						return;

					case "about":
						terminal_output_area.innerHTML += "<p>What abour me ?</p>";
						terminal_output_area.innerHTML += "<br>";
						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						break;

					case "projects":
						const requestURL = "https://api.github.com/users/gael-lopes-da-silva/repos";
						fetch(requestURL)
							.then(function (response) {
								if (!response.ok) projectsPersonnal.innerHTML = "<h3>Unable to load github repositories</h3>";
								else return response.json();
							})
							.then(function (response) {
								for (const element of response) {
									if (element.fork == true) continue;

									terminal_output_area.innerHTML += `<p><b><a href="${element.html_url}" target="_blank">${element.name}</a></b>${element.description}.</p>`;
								}

								terminal_output_area.innerHTML += "<br>";
							})
							.catch(function (error) {
								console.log(error);
							});

						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						break;

					case "skills":
						terminal_output_area.innerHTML += "<p>No skills, pure luck. 👍</p>";
						terminal_output_area.innerHTML += "<br>";
						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						break;

					case "email":
						terminal_output_area.innerHTML += "<p><a href='mailto:gael.lopes-da-silva@outlook.fr'>gael.lopes-da-silva@outlook.fr</a></p>";
						terminal_output_area.innerHTML += "<br>";
						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						break;

					case "socials":
						terminal_output_area.innerHTML += "<p><a href='https://github.com/Gael-Lopes-Da-Silva' target='_blank'>GitHub</a></p>";
						terminal_output_area.innerHTML += "<p><a href='https://gitlab.com/Gael-Lopes-Da-Silva' target='_blank'>GitLab</a></p>";
						terminal_output_area.innerHTML += "<p><a href='https://www.linkedin.com/in/gael-lopes-da-silva/' target='_blank'>Linkedin</a></p>";
						terminal_output_area.innerHTML += "<br>";
						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						break;

					case "help":
						terminal_output_area.innerHTML += "<br>";
						terminal_output_area.innerHTML += "<p><b>about</b>     Fetch some info about me.</p>";
						terminal_output_area.innerHTML += "<p><b>projects</b>  A big list of my projects.</p>";
						terminal_output_area.innerHTML += "<p><b>skills</b>    To get my stats and level.</p>";
						terminal_output_area.innerHTML += "<p><b>email</b>     Don't spam my email.</p>";
						terminal_output_area.innerHTML += "<p><b>socials</b>   Throw at you my socials.</p>";
						terminal_output_area.innerHTML += "<p><b>clear</b>     Obviously, clear the terminal.</p>";
						terminal_output_area.innerHTML += "<br>";
						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						break;

					case "":
						terminal_output_area.innerHTML += "<p>Type 'help' to get all the commands.</p>";
						terminal_output_area.innerHTML += "<br>";
						terminal_input_prompt.style.color = "#00FF00";
						success = true;
						break;

					default:
						terminal_output_area.innerHTML += `<p>'${command[0]}' is not a valid command.</p>`;
						terminal_output_area.innerHTML += "<br>";
						terminal_output_area.style.color = "#FF0000";
						terminal_input_prompt.style.color = "#FF0000";
						success = false;
						break;
				}

				terminal_output.appendChild(terminal_output_area);

				terminal_input.blur();
				terminal_input.focus();
			}

			if (event.key === "Tab") {
				event.preventDefault();
				// autocomplete
			}
		});

		terminal_banner_help.addEventListener("click", function () {
			let terminal_output_area = document.createElement("div");
			terminal_output_area.className = "terminal_output_area";

			let terminal_output_header = document.createElement("p");
			terminal_output_header.className = "terminal_output_header";
			terminal_output_header.textContent = "~";

			let div = document.createElement("div");

			let terminal_output_prompt = document.createElement("p");
			terminal_output_prompt.className = "terminal_output_prompt";
			terminal_output_prompt.style.color = success ? "#00FF00" : "#FF0000";
			terminal_output_prompt.textContent = "➜";

			let terminal_output_input = document.createElement("p");
			terminal_output_input.className = "terminal_output_input";
			terminal_output_input.textContent = "help";

			div.appendChild(terminal_output_prompt);
			div.appendChild(terminal_output_input);

			terminal_output_area.appendChild(terminal_output_header);
			terminal_output_area.appendChild(div);

			terminal_output_area.innerHTML += "<br>";
			terminal_output_area.innerHTML += "<p><b>about</b>     Fetch some info about me.</p>";
			terminal_output_area.innerHTML += "<p><b>projects</b>  A big list of my projects.</p>";
			terminal_output_area.innerHTML += "<p><b>skills</b>    To get my stats and level.</p>";
			terminal_output_area.innerHTML += "<p><b>email</b>     Don't spam my email.</p>";
			terminal_output_area.innerHTML += "<p><b>socials</b>   Throw at you my socials.</p>";
			terminal_output_area.innerHTML += "<p><b>clear</b>     Obviously, clear the terminal.</p>";
			terminal_output_area.innerHTML += "<br>";
			terminal_input_prompt.style.color = "#00FF00";
			success = true;

			terminal_output.appendChild(terminal_output_area);
		});

		terminal_container.addEventListener("click", function () {
			terminal_input.focus();
			// check for text selection
		});
	}
}