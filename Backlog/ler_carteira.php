<?php
$str_sistema= $_GET['str_sistema'];

$user = "root";
$password = "";
$host = "localhost:3306";

// Create connection
$conn = new mysqli($host, $user, $password, 'Backlog');
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "

	SELECT
	   A.ANALISTA,
	   COUNT(CHAMADO) CHAMADOS,
	   B.TEAM
	 FROM
		BKL_CHAMADOS2 A,
		BKL_TEAMS B
	WHERE
		A.ANALISTA= B.ANALISTA
		AND B.TEAM = '".$str_sistema."'
	 GROUP BY
		A.ANALISTA

 ";

$resultado = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($resultado)) {
    $rows[] = $r;
}
print json_encode($rows);

$conn->close();


?>
