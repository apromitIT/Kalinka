"use strict"

document.addEventListener('DOMContentLoaded', function () {
	$(".modal-phone").mask("+7(999) 999-99-99");

	const formCall = document.forms.formCall;
	formCall.addEventListener('submit', formCallSend);

	const formOrder = document.forms.formOrder;
	formOrder.addEventListener('submit', formOrderSend);
	const formRushOrder = document.forms.formRushOrder;
	formRushOrder.addEventListener('submit', formRushOrderSend);

	const senging = document.querySelector('#sending');
	// const forms = document.querySelectorAll('.form-body');

	// for (let form of forms) {
	// 	form.addEventListener('submit', formSend);
	// }
	// console.log(formValidate(formCall));

	async function formCallSend(e) {
		e.preventDefault();

		let error = formValidate(formCall);
		let formData = new FormData(formCall);

		if (error === 0) {
			senging.style.display = "flex";
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData,
			});
			if(response.ok) {
				let result = await response.json();
				senging.style.display = "none";
				formCall.reset();
				body.prepend(result);
				setTimeout(() => document.querySelector('.response-ok').remove(), 3000);
			} else {
				document.querySelector('.response-fail').style.display = 'block';
				setTimeout(() => document.querySelector('.response-fail').style.display = 'none', 3000);
			}
		} else {
			alert('Заполните обязательные поля');
		}
	}

	// http://apromisb.beget.tech/sendmail.php

	async function formOrderSend(e) {
		e.preventDefault();

		let error = formValidate(formOrder);

	}

	async function formRushOrderSend(e) {
		e.preventDefault();

		let error = formValidate(formRushOrder);
		let formData = new FormData(formRushOrder);

		if (error === 0) {
			senging.style.display = "flex";
			// let response = await fetch('../sendmail.php', {
			// 	method: 'POST',
			// 	body: formData,
			// });
			// if(response.ok) {
			// 	senging.style.display = "none";
			// 	let result = await response.json();
			// 	formCall.reset();
			// } else {
			// 	alert('ERROR');
			// }
		} else {
			alert('Заполните обязательные поля');
		}
	}



	function formValidate(form) {
		let error = 0;

		let formInputs = form.querySelectorAll('.form-input');

		for (let input of formInputs) {
			formRemoveError(input);

			if (input.classList.contains('_req')) {
				if (input.value == "") {
					formAddError(input);
					error++;
				}
			} else if (input.name == 'email') {
				if (input.value != '') {
					if (emailTest(input)) {
						formAddError(input);
						input.value = 'Введен некорректный email';
						error++;
						setTimeout(() => input.value = '', 1300);
					}
				}
			} else if (input.name == 'work') {
				if (input.value.length < 3 && form.work.value.length > 0) {
					formAddError(input);
					input.value = 'Недостаточное количество символов';
					error++;
					setTimeout(() => input.value = '', 1300);
				}
			}
		}
		console.log(error);
		return error
	}



	function formAddError(input) {
		input.classList.add('_error');
	}

	function formRemoveError(input) {
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^[_a-z0-9-\-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/.test(input.value);
	}






}); // DOMContentLoaded