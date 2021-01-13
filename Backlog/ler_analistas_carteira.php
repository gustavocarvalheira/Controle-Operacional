<?php

session_start();
$id_usuario = $_SESSION["ID"];

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

	SELECT
		A.ID_USUARIO,
	    A.ANALISTA,
	    (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%Cadastro e Regras Comerc:Negociacoes Comerciais%'
	        AND
			B.ANALISTA = A.ANALISTA) NC,
	    (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%Cadastro e Regras Comerc:Negociacoes Comerciais%'
            AND
            B.PRIORIDADE = 'Prioridade'
	        AND
			B.ANALISTA = A.ANALISTA) NC_PRI,
	   (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%Cadastro e Regras Comerc:Problema%'
	        AND
			B.ANALISTA = A.ANALISTA) PROBLEMAS,
	   (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%Cadastro e Regras Comerc:Problema%'
            AND
            B.PRIORIDADE = 'Prioridade'
	        AND
			B.ANALISTA = A.ANALISTA) PROBLEMAS_PRI,
	   (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%Cadastro e Regras Comerc:Inclusao / Manut Cadastr%'
	        AND
			B.ANALISTA = A.ANALISTA) INCLUSAO,
	   (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%Cadastro e Regras Comerc:Inclusao / Manut Cadastr%'
            AND
            B.PRIORIDADE = 'Prioridade'
	        AND
			B.ANALISTA = A.ANALISTA) INCLUSAO_PRI,
	   (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%XML%'
	        AND
			B.ANALISTA = A.ANALISTA) XML,
		   (SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.CATEGORIA LIKE '%XML%'
            AND
            B.PRIORIDADE = 'Prioridade'
	        AND
			B.ANALISTA = A.ANALISTA) XML_PRI,
		(SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
			B.ANALISTA = A.ANALISTA) TOTAL,

		(SELECT
			COUNT(CHAMADO)
		FROM
			BKL_CHAMADOS2 B
		WHERE
            B.PRIORIDADE = 'Prioridade'
			AND
			B.ANALISTA = A.ANALISTA) TOTAL_PRI
	FROM
		BKL_CARTEIRAS A
	 WHERE 		A.ID_USUARIO = '".$id_usuario."'
";


$resultado = $conn->query($sql);

$rows = array();
while($r = mysqli_fetch_assoc($resultado)) {
    $rows[] = $r;
}
print json_encode($rows);//echo json_encode($encode);
$conn->close();


?>
