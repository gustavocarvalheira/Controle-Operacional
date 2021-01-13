<?php

$user = "root";
$password = "";
$host = "localhost:3306";

// Create connection
$conn = new mysqli($host, $user, $password, 'sys');
// Check connection
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$sql = " SELECT UNID_ABREV FROM BKL_UNIDADES_SISTEMA WHERE SISTEMA IN ('TASY','WPD','MV'); ";


$resultado = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($resultado)) {
    $rows[] = $r;
}
print json_encode($rows);//echo json_encode($encode);


$conn->close();


?>
