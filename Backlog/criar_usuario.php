<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

	
$login = $_POST['login'];
$senha = $_POST['senha'];
$nome = $_POST['nome'];
$team = $_POST['team'];
	
	
$user = "root"; 
$password = ""; 
$host = "localhost:3306"; 

// Create connection
$conn = new mysqli($host, $user, $password, 'sys');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 	

$sql = "

	INSERT INTO BKL_USUARIOS (LOGIN,SENHA,NOME,TEAM) VALUES ('".$login."','".$senha."','".$nome."','".$team."');

	";
	
if ($conn->query($sql) === TRUE) {
    echo "data inserted";
}
else 
{
    echo "failed";
}

		
	
?>