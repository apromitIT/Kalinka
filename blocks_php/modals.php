<?php
require_once("sendmail.php");
// if(array_key_exists("send", $_SESSION) != TRUE) {
// $sendSaccess = '';
// $sendFailed = '';
//  }// else $sendSaccess = "<div class='message-send-modal'>
// <div class='message-send'>
// <button type='button' class='btn-close close-message' aria-label='Закрыть'></button>
// <p>Письмо отправленно!</p>
// </div>
// </div>";


?>

<div class='message-send-modal'><?=$sendSaccess?></div>
<div class='message-send-modal'><?=$sendFailed?></div>


<img id="sending" src="img/loading.gif" style="display: none" alt="">

<!-- Модальное окно звонок-->
<div class="modal fade index" id="callBackModal" data-bs-keyboard="true" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content content-callback">
			<div class="modal-header">
				<h3 class="modal-title form-title" id="staticBackdropLabel">Заказать обратный звонок</h3>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
			</div>
			<div class="modal-body">
				<p>Мы перезвоним Вам,<br>как только получим заявку</p>
				<form action="#" id="formCall" class="form-body" method="POST">
					<div class="form-item">
						<label for="formName" class="form-label">Ваше имя <span>*</span></label>
						<input id="formName" type="text" name="name" class="form-input" required>
					</div>
					<div class="form-item">
						<label for="modalPhone" class="form-label">Телефон <span>*</span></label>
						<input id="" type="tel" name="modalPhone" class="form-input modal-phone" required>
					</div>

					<button type="submit" class="btn btn-cta">Перезвонить мне</button>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- /Модальное окно звонок-->

<!-- Модальное окно обработка-->
<div class="modal fade index" id="orderModal" data-bs-keyboard="true" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content content-order">
			<div class="modal-header">
				<h3 class="modal-title form-title" id="staticBackdropLabel">Заказать обработку</h3>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
			</div>
			<div class="modal-body">
				<p>Мы перезвоним Вам,<br>как только получим заявку</p>
				<form action="#" id="formOrder" class="form-body" method="post">
					<div class="form-item">
						<label for="formName" class="form-label">Ваше имя <span>*</span></label>
						<input id="formName" type="text" name="name" class="form-input" required>
					</div>
					<div class="form-item">
						<label for="modalPhone" class="form-label">Телефон <span>*</span></label>
						<input id="" type="tel" name="modalPhone" class="form-input modal-phone" required>
					</div>
					<div class="form-item">
						<label for="email" class="form-label">Email</label>
						<input id="" type="text" name="email" class="form-input modal-email"
							pattern="^[_a-z0-9-\-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$">
					</div>
					<div class="form-item">
						<label for="work" class="form-label">Вид работ</label>
						<textarea id="formWork" type="text" name="work" class="form-input"
							placeholder="Вид работ или описание проблемы (не обязательно)"></textarea>
					</div>

					<button type="submit" class="btn btn-cta">Отправить заявку</button>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- /Модальное окно обработка -->

<!-- Модальное окно срочная обработка-->
<div class="modal fade index" id="rushOrderModal" data-bs-keyboard="true" tabindex="-1"
	aria-labelledby="staticBackdropLabel" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered">
		<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title form-title" id="staticBackdropLabel"> Заказать обработку срочно!</h3>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
			</div>
			<div class="modal-body">
				<p>Мы перезвоним Вам,<br>как только получим заявку</p>
				<form action="#" id="formRushOrder" class="form-body" method="POST">
					<div class="form-item">
						<label for="formName" class="form-label">Ваше имя <span>*</span></label>
						<input id="formName" type="text" name="name" class="form-input" required>
					</div>
					<div class="form-item">
						<label for="modalPhone" class="form-label">Телефон <span>*</span></label>
						<input id="" type="tel" name="modalPhone" class="form-input modal-phone" required>
					</div>
					<div class="form-item">
						<label for="email" class="form-label">Email</label>
						<input id="" type="text" name="email" class="form-input modal-email"
							pattern="^[_a-z0-9-\-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$">
					</div>
					<div class="form-item">
						<label for="work" class="form-label">Вид работ</label>
						<textarea id="formWork" type="text" name="work" class="form-input"
							placeholder="Вид работ или описание проблемы (не обязательно)"></textarea>
					</div>

					<button type="submit" class="btn btn-cta btn-rush">Срочная заявка</button>
				</form>
			</div>
		</div>
	</div>
</div>
<!-- /Модальное окно срочная обработка -->