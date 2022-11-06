<?php
	require_once("connect_data_base.php");


	$result = $mysql->query("SELECT * FROM `news`");

	while($news = $result->fetch_assoc()) {
		print_r($news);
		echo '<br>';
		echo '<br>';
	}


$mysql->close();