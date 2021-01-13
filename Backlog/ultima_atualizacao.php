<?php

//$str_sistema= $_POST['sistema'];

$user = "root"; 
$password = ""; 
$host = "localhost:3306"; 

// Create connection
$conn = new mysqli($host, $user, $password, 'backlog');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "
	
	SELECT DATA_LEITURA FROM BKL_CHAMADOS2 LIMIT 1
	
";

$resultado = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($resultado)) {
    $rows[] = $r;
}
print json_encode($rows);//echo json_encode($encode);

$conn->close();


?> 
