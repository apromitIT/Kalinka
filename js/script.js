



new Swiper(".swiper", {
	slidesPerView: 2,
	// slidesPerColumn: 1,
	centeredSlides: true,
	// spaceBetween: 30,
	// autoplay: {
	// 		delay: 2500,
	// 		disableOnInteraction: false,
	// 	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	loop: true,
});

console.log(Swiper);


// function loadHtml (id, filename) {
// 	console.log(`div id: ${id}, filename: ${filename}`);

// 	let xhttp;
// 	let element = document.getElementById(id);
// 	let file = filename;

// 	if (file) {
// 		xhttp = new XMLHttpRequest();
// 	}
// }


