/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

{
	const today = new Date();
	const birthday = new Date("06/19/2003");

	let age = Math.abs(new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970);
	document.getElementById("age").innerText = `${age}`;

	if (today.getDate() == birthday.getDate() && today.getMonth() == birthday.getMonth()) {
		document.getElementById("birthday").classList.add("active");
	}
}