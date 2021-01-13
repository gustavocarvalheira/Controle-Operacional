<?php


error_reporting(E_ALL);
ini_set('display_errors', 'On');

session_start();
	
$variable = $_POST['variable'];
$usuario = $_SESSION['ID'];


if (isset($_SESSION["LOGIN"])) {

		$resultado = '{"RESULTADO":"'.$_SESSION[$variable].'"}';		
		print json_encode($resultado);
		
} else {
		
		$retorno = '{"R":"FALSE"}';
		print json_encode($retorno);

}

	
?>