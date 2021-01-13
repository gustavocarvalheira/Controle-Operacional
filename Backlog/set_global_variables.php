<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

session_start();

$usuario = $_SESSION['ID'];

	
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


	SELECT * FROM sys.BKL_CONFIG WHERE ID_USUARIO = ".$usuario.";
	
		";


$resultado = $conn->query($sql);

//$resultado = mysqli_fetch_assoc($resultado);


while (($row = mysqli_fetch_assoc($resultado)) != false) {

	$_SESSION[$row["CONFIG"]] = $row["VALUE"];


}

//print $_SESSION['MAX_REQUESTS_YELLOW'];

//		session_start();
//		$_SESSION["ID"] = $resultado['ID_USUARIO'];
//		$_SESSION["LOGIN"] = $resultado['LOGIN'];
//		$_SESSION["NOME"] = $resultado['NOME'];
//		$_SESSION["TEAM"] = $resultado['TEAM'];




//	}





//	print json_encode($rows);//echo json_encode($encode);


$conn->close();


//}



?>