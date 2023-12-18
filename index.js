let btnBurger = document.querySelector(".burger-btn");
let closeBtn = document.querySelector(".closeBtn");
let overlay = document.querySelector(".overlay-menu");


function clicked() {
	btnBurger.addEventListener("click", () => {
		overlay.classList.add("active");
	}) 
}

function remove() {
	closeBtn.addEventListener("click", () => {
		overlay.classList.remove("active");
	});
}