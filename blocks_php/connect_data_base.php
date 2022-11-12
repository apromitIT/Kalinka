<?php

$server = 'localhost';
$username = "z92659ld_apromit";
$password = "Rtyujkl1!";
$dataBase = "z92659ld_apromit";
global $mysql;
$mysql = new mysqli($server, $username, $password, $dataBase);

if($mysql->connect_error) {
	die("Connection failed: " .$mysql->connect_error);
} //else echo 'connect saccess' . '<br>';
