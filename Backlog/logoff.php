<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

session_start();
$_SESSION["USERNAME"] = "";
$_SESSION["NOME"] = "";
$_SESSION["TEAM"] = "";
session_destroy();

print "OK";
	
?>