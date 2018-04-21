let rect = document.getElementById("rect");
let rect1 = document.getElementById("rect1");
let username = document.getElementById("username");
let password = document.getElementById("password");


function handle1() {
	rect.setAttribute("class", "rect2");
}

function handle2() {
	rect.setAttribute("class", "rect1");
}

function handle3() {
	if (username.value.length > 0 && password.value.length > 0) {
		rect1.setAttribute("class", "rect3 animate");
		setTimeout(function() {
			rect1.setAttribute("class", "");
		}, 900);
	}
}

//For codepen header!!!
setTimeout(() => {
	password.focus();
}, 500);

setTimeout(() => {
	username.focus();
}, 1500);