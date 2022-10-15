



new Swiper(".swiper", {
	slidesPerView: 1,
	// slidesPerColumn: 1,
	centeredSlides: true,
	// spaceBetween: 30,
	// autoplay: {
	// 		delay: 4000,
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

	breakpoints: {
		1399: {
			slidesPerView: 2,
		}

	}


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

