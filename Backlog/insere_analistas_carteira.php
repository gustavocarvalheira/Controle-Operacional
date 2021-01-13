<?php

$id_usuario = $_POST['id_usuario'];
$analista = $_POST['analista'];

$user = "root";
$password = "";
$host = "localhost:3306";

// Create connection
$conn = new mysqli($host, $user, $password, 'sys');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO BKL_CARTEIRAS (ID_USUARIO,ANALISTA) VALUES ('".$id_usuario."','".$analista."');";

$resultado = $conn->query($sql);

$conn->close();


?>
