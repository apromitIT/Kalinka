<!DOCTYPE html>
<html lang="ru">

<head>
	<meta charset="UTF-8">	
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title><?php echo $title; ?></title>
	<link rel="shortcut icon" href="src/logo_bug.svg">
	<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
	<!--  
	function getLink($link = 'css/bootstrap.css') {
		return <link rel='stylesheet' href=$link>;
	}
	echo getLink();
	echo getLink('css/style.css'); ?> -->
	<?php $bootstrap = "'css/bootstrap.css'";
	$style = "'css/style.css'"; ?>
	<link rel='stylesheet' href=<?php echo $bootstrap; ?>>
	<link rel="stylesheet" href=<?php echo $style; ?>>
</head>

<body>
	<header>
		<div class="container">
			<a href="/" class="logo-dez"><img src="src/logo_dez.svg" alt="логотип компании по дезинфекции, дезинсекции, дератизации Калинка_ДЕЗ"></a>
			<nav class="nav-bar"><ul>
				<!-- <li><a href="/">Главная</a></li> -->
				<li><a href="#">О компании</a></li>
				<li><a href="services.php">Услуги</a></li>
				<li><a href="#">Сертификаты</a></li>
				<li><a href="#">Вакансии</a></li>
				<li><a href="#">Контакты</a></li>
			</ul></nav>
			<a href="+7-495-236-01-45" class="phone-num">+7-495-236-01-45</a>
		</div><!-- /container -->
	</header>