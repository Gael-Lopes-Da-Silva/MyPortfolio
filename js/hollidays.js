/* 
@author: Gael Lopes Da Silva
@project: MyPortfolio
@github: https://github.com/Gael-Lopes-Da-Silva/MyPortfolio
@license: BSD 3-Clause
*/

{
	function getEasterDate(Y) {
		let C = Math.floor(Y/100);
		let N = Y - 19*Math.floor(Y/19);
		let K = Math.floor((C - 17)/25);
		let I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
		I = I - 30*Math.floor((I/30));
		I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
		let J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
		J = J - 7*Math.floor(J/7);
		let L = I - J;
		let M = 3 + Math.floor((L + 40)/44);
		let D = L + 28 - 31*Math.floor(M/4);
	
		return new Date(`${M}/${D}/0`);
	}
	
	const today = new Date();
	const easter = getEasterDate(today.getFullYear());
	const halloween = new Date(`10/31/0`);
	const christmas = new Date(`12/25/0`);

	if ((today.getDate() > easter.getDate() - 5 && today.getDate() < easter.getDate() + 5) && today.getMonth() == easter.getMonth()) {
		document.querySelector("#easter").classList.add("active");
	}

	if ((today.getDate() > halloween.getDate() - 5 && today.getDate() < halloween.getDate() + 5) && today.getMonth() == halloween.getMonth()) {
		document.querySelector("#halloween").classList.add("active");
	}

	if ((today.getDate() > christmas.getDate() - 5 && today.getDate() < christmas.getDate() + 5) && today.getMonth() == christmas.getMonth()) {
		document.querySelector("#christmas").classList.add("active");
	}
}