<?php

session_start();
$id_usuario = $_SESSION["ID"];
//$frommenu = $_POST['frommenu'];

//$id_usuario = '149149';
$frommenu = 'N';

$user = "root";
$password = "";
$host = "localhost:3306";

// Create connection
$conn = new mysqli($host, $user, $password, 'backlog');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($frommenu == "Y") {

	$sql = "
	SELECT
		DISTINCT ANALISTA
	FROM
		BKL_CHAMADOS2 A
	WHERE A. ANALISTA NOT IN (SELECT GRUPO FROM BKL_GRUPOS)
	ORDER BY A.ANALISTA ASC";

} else {

	$sql = "
		SELECT
			DISTINCT ANALISTA,
		    (SELECT
				'X'
			FROM
				BKL_CARTEIRAS B
			WHERE
				B.ANALISTA = A.ANALISTA
		        AND
				B.ID_USUARIO = '".$id_usuario."') CHECKED

		FROM
			BKL_CHAMADOS2 A
		WHERE A. ANALISTA NOT IN (SELECT GRUPO FROM BKL_GRUPOS)
		ORDER BY A.ANALISTA ASC";
}


$resultado = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($resultado)) {
    $rows[] = $r;
}

print json_encode($rows);//echo json_encode($encode);

$conn->close();


?>
