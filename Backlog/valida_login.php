<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

session_start();
	
if (isset($_SESSION["LOGIN"])) {

		$resultado = '{"LOGIN":"'.$_SESSION["LOGIN"].'","NOME":"'.$_SESSION["NOME"].'","TEAM":"'.$_SESSION["TEAM"].'","ID":"'.$_SESSION["ID"].'","CPF":"'.$_SESSION["CPF"].'","UNIDADES":"'.$_SESSION["UNIDADES"].'"}';		
		print json_encode($resultado);
		
} else {
		
		$retorno = '{"LOGIN":"FALSE"}';
		print json_encode($retorno);

}

	
?>