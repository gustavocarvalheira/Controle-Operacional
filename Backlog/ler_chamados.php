<?php

$str_sistema= $_POST['id_sistema'];
$str_intervalo= $_POST['str_intervalo'];

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
	
    SELECT *

		FROM 
					SYS.BKL_CHAMADOS2 C
		WHERE 
               ";

if ($str_intervalo == "F") {

					$sql = $sql .	" C.DATA_PREVISAO < NOW() ";

}



if ($str_intervalo == "A") {

					$sql = $sql .	" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:15' HOUR_MINUTE) ";

}

if ($str_intervalo=="B") {

					$sql = $sql .	" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:30' HOUR_MINUTE) ";
}

if ($str_intervalo=="C") {

					$sql = $sql .	" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:60' HOUR_MINUTE) ";
}

if ($str_intervalo=="D") {

					$sql = $sql .	" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-01:30' HOUR_MINUTE) ";
}

if ($str_intervalo=="E") {

					$sql = $sql .	" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-1' DAY) ";
}

	
					$sql = $sql .	" AND C.SISTEMA = '".$str_sistema."' ORDER BY CATEGORIA, DATA_PREVISAO ASC";	
	

$resultado = $conn->query($sql);

//print $sql;


if ($resultado == null) { 
	
	print "[]";
		
} else {

	$rows = array();
	while($r = mysqli_fetch_assoc($resultado)) {
	    $rows[] = $r;
	}
	print json_encode($rows);

}


$conn->close();


?> 
