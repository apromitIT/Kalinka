<!-- Заказать обратный звонок -->
<?php
  $title = 'Заказать обратный звонок';
	$bootstrap = "'../css/bootstrap.css'";
	$style = "'../css/style.css'";
    require_once "../blocks/header.php";
  ?>

<form action="" method="post">

	<input type="text" name="name" placeholder="Ваше имя" required>
	<input type="tel" name="tel" placeholder="+7(_ _ _)_ _ _-_ _-_ _" required>

	<input type="submit" value="Отправить заявку" class="btn btn-cta">

</form>