document.addEventListener('DOMContentLoaded', function () {

	document.querySelector('.menu-btn').addEventListener('click', function (e) {
		e.preventDefault();
		if (this.classList.contains('menu-btn_active')) {
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
				// dynamicBullets: true,
				// dynamicMainBullets: 1,
			},
			loop: true,

			breakpoints: {
				1399: {
					slidesPerView: 2,
				}
			}
		});
	}


	// if(document.querySelectorAll('.close-message')){
	// 	for(let btn of document.querySelectorAll('.close-message')) {
	// 	btn.addEventListener('click', function(){
	// 		for (let div of document.querySelectorAll('.message-send-modal')) {
	// 			div.style.display = "none";
	// 			setTimeout(() => div.remove(), 1300);
	// 		}			
	// 	});
	// }
	// }


	function formValidate(form) {
			for (let input of form.querySelectorAll('input')) {
			if (input.value == "") {
				if (input.hasAttribute('required')) {
					input.classList.add('empty');
					input.value = 'Заполните обязательные поля';
					setTimeout(() => input.classList.remove('empty'), 1300);
					setTimeout(() => input.value = '', 1300);
				}
			} else if (input.value.length < 3 && input.value.length > 0) {
				input.classList.add('min-length');
				input.value = 'Недостаточное количество символов';
				setTimeout(() => input.classList.remove('min-length'), 1300);
				setTimeout(() => input.value = '', 1300);
			}
		}

		if (form.email != undefined) {
			if (form.email.value != "") {
				if (form.email.value.split('').toString().includes('@') == false || form.email.value.split('').toString().includes('.') == false) {
					form.email.classList.add('min-email');
					form.email.value = 'в e-mail не хватает @ или точки';
					setTimeout(() => form.email.classList.remove('min-email'), 1300);
					setTimeout(() => form.email.value = '', 1300);
				}
			} else if (form.work.value.length < 3 && form.work.value.length > 0) {
				form.work.classList.add('min-length');
				form.work.value = 'Недостаточное количество символов';
				setTimeout(() => form.work.classList.remove('min-length'), 1300);
				setTimeout(() => form.work.value = '', 1300);
			}
		}

		// if (error === 0) {
		// 	console.log(error);
		// 	document.querySelector('.content-order').classList.add('_sending');
		// } else {
		// 	console.log(error);
		// 	// alert('ERROR');
		// }
		// console.log(error);
	}



	function checkInputsReq(form) {
		for (let input of form.querySelectorAll('input')) {
			if (input.value == "") {
				if (input.hasAttribute('required')) {
					input.classList.add('empty');
					input.value = 'Заполните обязательные поля';
					setTimeout(() => input.classList.remove('empty'), 1300);
					setTimeout(() => input.value = '', 1300);
				}
			} else if (input.value.length < 3 && input.value.length > 0) {
				input.classList.add('min-length');
				input.value = 'Недостаточное количество символов';
				setTimeout(() => input.classList.remove('min-length'), 1300);
				setTimeout(() => input.value = '', 1300);
			}
		}
	}

	function checkEmail(form) {
		if (form.email.value != "") {
			if (form.email.value.split('').toString().includes('@') == false || form.email.value.split('').toString().includes('.') == false) {
				form.email.classList.add('min-email');
				form.email.value = 'в e-mail не хватает @ или точки';
				error++;
				setTimeout(() => form.email.classList.remove('min-email'), 1300);
				setTimeout(() => form.email.value = '', 1300);
			}
		}
	}

	function checkTextarea(form) {
		if (form.work.value.length < 3 && form.work.value.length > 0) {
			form.work.classList.add('min-length');
			form.work.value = 'Недостаточное количество символов';
			error++;
			setTimeout(() => form.work.classList.remove('min-length'), 1300);
			setTimeout(() => form.work.value = '', 1300);
		}
	}








}); // DOMContentLoaded




