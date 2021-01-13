<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');


	
$action = $_POST['action'];
$login = $_POST['login'];
$senha = $_POST['senha'];
	
if ($action == "session_start") {
	
	
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
		SELECT ID_USUARIO,LOGIN,SENHA,NOME,TEAM FROM BKL_USUARIOS WHERE 
		LOGIN = '".$login."' AND
		SENHA = '".$senha."'
			";
	
	$resultado = $conn->query($sql);
	
	$resultado = mysqli_fetch_assoc($resultado);

	if ($resultado['NOME'] <> null) {
	
		session_start();
		$_SESSION["ID"] = $resultado['ID_USUARIO'];
		$_SESSION["LOGIN"] = $resultado['LOGIN'];
		$_SESSION["NOME"] = $resultado['NOME'];
		$_SESSION["TEAM"] = $resultado['TEAM'];
		$retorno = '{"LOGIN":"'.$resultado['LOGIN'].'","NOME":"'.$resultado['NOME'].'","TEAM":"'.$resultado['TEAM'].'","ID":"'.$resultado['ID_USUARIO'].'"}';
		$json = json_encode($retorno);
		print $json;
		
	} else {
		
		$retorno = '{"LOGIN":"FALSE"}';
		$json = json_encode($retorno);
		print $json;

	}
	
	
	$conn->close();

	
}

	
	
?>