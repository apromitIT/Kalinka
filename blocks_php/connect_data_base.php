<?php

$server = 'localhost';
$username = "apromisb_01";
$password = "eqsC3o&A";
$dataBase = "apromisb_01";
global $mysql;
$mysql = new mysqli($server, $username, $password, $dataBase);

if($mysql->connect_error) {
	die("Connection failed: " .$mysql->connect_error);
} //else echo 'connect saccess' . '<br>';
