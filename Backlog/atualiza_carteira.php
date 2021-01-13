<?php

session_start();
$id_usuario = $_SESSION["ID"];
$analista = $_POST['analista'];
$comando = $_POST['comando'];

$user = "root";
//$password = "dnu5hts3";
$host = "localhost:3306";

// Create connection
$conn = new mysqli($host, $user, $password, 'backlog');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($comando == "INSERIR"){

	$sql = "
			INSERT INTO BKL_CARTEIRAS (ID_USUARIO,ANALISTA) VALUES ('".$id_usuario."','".$analista."');

	";

} else {

	$sql = "

		DELETE FROM BKL_CARTEIRAS WHERE ID_USUARIO = '".$id_usuario."' AND ANALISTA = '".$analista."';

	";


}

$resultado = $conn->query($sql);

print $sql;

$conn->close();


?>
