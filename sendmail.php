<?php

if(isset($_POST)) {

	$name = htmlspecialchars(trim($_POST["name"]));
	$phone = $_POST["modalPhone"];
	$email = "";
	$work = "";

	if(!empty($_POST["email"])) {
		$email = trim($_POST["email"]);
	} else if (!empty($_POST["work"])) {
		$work = htmlspecialchars(trim($_POST["work"]));
	}
	

	$to = "apromitim@yandex.ru";
	$from = $email;
	$message = "Перезвонить $name по телефону $phone \r\n $email \r\n $work";
	$message = wordwrap($message, 70, "\r\n");
	$headers = array(
    'From' => $from,
    'Reply-To' => $from,
    'X-Mailer' => 'PHP/' . phpversion()
	);

	sleep(2);

	if(!empty($_POST["name"])) {
		$message = 'succese';
	}else {
		$message = 'filed';
	}
	
		$response = ['message' => $message];

		header('Content-type: application/json');
		echo json_encode($response);
	}
?>


