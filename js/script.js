
$(".modal-phone").mask("+7(999) 999-99-99");

	document.querySelector('.menu-btn').addEventListener('click', function(e){
e.preventDefault();
if(this.classList.contains('menu-btn_active')) {
	this.classList.remove('menu-btn_active');
	document.querySelector('#navBar').classList.remove('nav-bar_active');
} else {
	this.classList.add('menu-btn_active');
	document.querySelector('#navBar').classList.add('nav-bar_active');
}
});


if (document.querySelector(".swiper")) {
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
}


// if(document.querySelector("#aboutPage")) {
// 	// document.body.prepend(header.innerHTML);



// }




// function loadHtml (id, filename) {
// 	console.log(`div id: ${id}, filename: ${filename}`);

// 	let xhttp;
// 	let element = document.getElementById(id);
// 	let file = filename;

// 	if (file) {
// 		xhttp = new XMLHttpRequest();
// 	}
// }


