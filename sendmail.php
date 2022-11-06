<?php

// print_r($_POST);
	global $sendSaccess;
	$sendSaccess = '';
	global $sendFailed;
	$sendFailed = '';

// if(array_key_exists("send", $_COOKIE) != TRUE) {
// $sendSaccess = '';
// $sendFailed = '';
// }
// global $loading;
// $loading = " ";

if(isset($_POST)) {
	
	$loading = "_sending";
	$name = htmlspecialchars(trim($_POST["name"]));
	$phone = $_POST["modalPhone"];
	$email = "";
	$work = "";

	if(!empty($_POST["email"])) {
		$email = trim($_POST["email"]);
	} else if (!empty($_POST["work"])) {
		$work = trim(htmlspecialchars(urldecode($_POST["work"])));
	}
	// $work = urldecode($work);

	$to = "apromitim@yandex.ru";
	$from = $email;
	$message = "Перезвонить $name по телефону $phone \r\n $email \r\n $work";
	$message = wordwrap($message, 70, "\r\n");
	$headers = array(
    'From' => $from,
    'Reply-To' => $from,
    'X-Mailer' => 'PHP/' . phpversion()
	);

	// if(!empty($_POST["name"])) {
	// 	// $_SESSION["send"] = "saccess";
	// 	// setcookie("send", "saccess", time()+3, "/");
	// 	$sendSaccess = "
		
	// 	<div class='message-send'>
	// 	<button type='button'  id='closeMessage'  class='btn-close close-message' aria-label='Закрыть'></button>
	// <p>Письмо отправленно!</p>
	// </div>";
	// sleep(3);
	// session_unset($_SESSION["send"]);
	// $sendSaccess = "";
	// header('Location: /');
	// }
	if(mail($to, "Обратный звонок", $message, $headers)) {
		$sendSaccess = "

		<div class='message-send'>
		<button type='button' id='closeMessage'  class='btn-close close-message' aria-label='Закрыть'></button>
	<p>Письмо отправленно!</p>
	</div>";
	} else {
		$sendFailed = "
					<div class='message-error'>
					<p>Что-то пошло не так.</p>
					<p>Попробуйте еще раз.</p>
					</div>";
	}

	// if(mail($to, "Обратный звонок", $message, $headers)) {
	// 	echo "ok";
	// } else {
	// 	echo "not ok";
	// }
} // else echo "error 123";



?>

