document.addEventListener('DOMContentLoaded', function () {
	$(".modal-phone").mask("+7(999) 999-99-99");

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

	const formCall = document.forms.formCall;
	// formCall.addEventListener('submit', formSend);
	// const btnCallBack = formCall.querySelector('.btn-cta');
	// const inputsCallBack = formCall.querySelectorAll('input');
	const formOrder = document.forms.formOrder;
	// const btnOrder = formOrder.querySelector('.btn-cta');
	const formRushOrder = document.forms.formRushOrder;
	// const btnRushOrder = formRushOrder.querySelector('.btn-cta');

	// console.log(formCall.email);
		let formData = new FormData(formCall);
	$('#formCall').bind('click', function(){

		$.ajax({
			url: 'sendmail.php',
			type: 'POST',
			data: ({ data: formData }),
			dataType: 'html',
			beforeSend: setLoadig,
			success: setSuccess
		});

	});


	// async function formSend(formCall) {
	// 	formValidate(formCall);
	// 	let formData = new FormData(formCall);
	// 	$.ajax({
	// 		url: 'sendmail.php',
	// 		type: 'POST',
	// 		data: ({ data: formData }),
	// 		dataType: 'html',
	// 		beforeSend: setLoadig,
	// 		success: setSuccess
	// 	});

	// }

	function setLoadig() {
		$("#sending").show();
		// for (let elem of document.querySelectorAll('.content-callback')) {
		// 	elem.classList.add('_sending');
		// }

	}

	function setSuccess(data) {
		$("#sending").hide();
		$("#information").text(data);
		// for (let elem of document.querySelectorAll('.form-body')) {
		// 	elem.reset();
		// }
		// let div = document.createElement('div');
		// div.classList.add('.message-send-modal');
		// div.innerHTML = `
		// <div class='message-send'>
		// <button type='button' id='closeMessage'  class='btn-close close-message' aria-label='Закрыть'></button>
		// <p>Письмо отправленно!</p>
		// </div>
		// `;
		// document.body.prepend(div);
		// setTimeout(() => div.remove, 3000);


	}

	// btnCallBack.addEventListener('click', function () {
	// 	// e.preventDefault();
	// 	formValidate(formCall);

	// 	// if (error === 0) {
	// 	// 	console.log(error);
	// 	// 	document.querySelector('.content-callback').classList.add('_sending');
	// 	// } else {
	// 	// 	console.log(error);
	// 	// 	// alert('ERROR');
	// 	// }
	// });

	// btnOrder.addEventListener('click', function () {
	// 	// e.preventDefault();
	// 	formValidate(formOrder);

	// 	// if (error === 0) {
	// 	// 	console.log(error);
	// 	// 	document.querySelector('.content-order').classList.add('_sending');
	// 	// } else {
	// 	// 	console.log(error);
	// 	// 	// alert('ERROR');
	// 	// }
	// });

	// btnRushOrder.addEventListener('click', function () {
	// 	// e.preventDefault();
	// 	formValidate(formRushOrder);

	// 	// if (error === 0) {
	// 	// 	console.log(error);
	// 	// 	document.querySelector('.content-order').classList.add('_sending');
	// 	// } else {
	// 	// 	console.log(error);
	// 	// 	// alert('ERROR');
	// 	// }
	// });

	if (document.querySelectorAll('.close-message')) {
		for (let btn of document.querySelectorAll('.close-message')) {
			btn.addEventListener('click', function () {
				for (let div of document.querySelectorAll('.message-send')) {
					div.remove();
				}
			});
		}
	}

	$(document).on('click', '#closeMessage', function () {
		// let messageModal = "";
		$.ajax({
			url: 'sendmail.php',
			type: 'POST',
			data: ({ sendSaccess: '' }),
			dataType: 'html'
		});

	})

	// 	function formValidate(form) {
	// 		let error = 0;
	// 		error = checkInputsReq(form);
	// 		if (form.email != undefined) {
	// 			error += checkEmail(form);
	// 			error += checkTextarea(form);
	// 		}
	// return error;
	// 	}

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



	// async function formSend(e) {
	// 	e.preventDefault();

	// 	let error = 0;
	// 	error += formValidate(formCall);
	// 	// let formData = new FormData(formCall);

	// 	if (error === 0) {
	// 		document.querySelector('.content-callback').classList.add('_sending');
	// 		// let response = await fetch('sendmail.php', {
	// 		// 	method: 'POST',
	// 		// 	body: formData
	// 		// });
	// 		// if(response.ok){
	// 		// 	let result = await response.json();
	// 		// 	alert(result.message);
	// 		// 	form.reset();
	// 		// } else {
	// 		// 	alert('error');
	// 		// }
	// 	} else {
	// 		console.log(error);
	// 		alert('ERROR');
	// 	}
	// }




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




// btnCallBack.addEventListener('click', function () {
// 	checkInputsReq(inputsCallBack);
// });

// btnOrder.addEventListener('click', function () {
// 	checkInputsReq(formOrder.querySelectorAll('input'));
// 	if (formOrder.email.value != "") {
// 		checkEmail(formOrder.email);
// 	}
// 	checkTextarea(formOrder.work);
// });

// btnRushOrder.addEventListener('click', function () {
// 	checkInputsReq(formRushOrder.querySelectorAll('input'));
// 	if (formRushOrder.email.value != "") {
// 		checkEmail(formRushOrder.email);
// 	}
// 	checkTextarea(formRushOrder.work);
// });


// function checkInputsReq(inputs) {
// 	for (let input of inputs) {
// 		if (input.value == "") {
// 			if (input.hasAttribute('required')) {
// 				input.classList.add('empty');
// 				input.value = 'Заполните обязательные поля';
// 				setTimeout(() => input.classList.remove('empty'), 1300);
// 				setTimeout(() => input.value = '', 1300);
// 			}
// 		} else if (input.value.length < 3 && input.value.length > 0) {
// 			input.classList.add('min-length');
// 			input.value = 'Недостаточное количество символов';
// 			setTimeout(() => input.classList.remove('min-length'), 1300);
// 			setTimeout(() => input.value = '', 1300);
// 		}
// 	}
// }
