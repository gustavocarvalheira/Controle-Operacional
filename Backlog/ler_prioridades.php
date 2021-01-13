<?php

if ($_POST['sistema'] = null) {

  $str_sistema = "";

} else{

  $str_sistema = $_POST['sistema'];

}

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
				B.SISTEMA,
				COUNT(B.SISTEMA) TOTAL,

                (SELECT COUNT(*)

					FROM
								BKL_CHAMADOS2 C
					WHERE
	                            C.SISTEMA = B.SISTEMA
	                           AND
								C.PRIORIDADE = 'PRIORIDADE'
                                AND
                                (C.ANALISTA = 'Neg Comerciais - MV' OR C.ANALISTA = 'Neg Comerciais - TASY' OR C.ANALISTA = 'Neg Comerciais - WPD'
                                OR C.ANALISTA = 'Problemas - WPD' OR C.ANALISTA = 'Problemas - MV' OR  C.ANALISTA = 'Problemas - TASY'  OR
								C.ANALISTA = 'Precificacao WPD' OR C.ANALISTA = 'Precificacao MV' OR C.ANALISTA = 'Precificacao TASY' OR
                                C.ANALISTA = 'Inc/Man Cadastral - TASY' OR C.ANALISTA = 'Inc/Man Cadastral - MV' OR C.ANALISTA = 'Inc/Man Cadastral - WPD'
								OR C.ANALISTA = 'Assistencial - WPD' OR C.ANALISTA = 'Assistencial - MV' OR C.ANALISTA = 'Assistencial - WPD')) PRIOR_PEND,

                (SELECT COUNT(*)

					FROM
								BKL_CHAMADOS2 C
					WHERE
	                            C.SISTEMA = B.SISTEMA
	                            AND
								C.PRIORIDADE = 'PRIORIDADE'
                                AND
                                C.ANALISTA <> 'Neg Comerciais - MV' AND C.ANALISTA <> 'Neg Comerciais - TASY' and C.ANALISTA <> 'Neg Comerciais - WPD'
                                AND C.ANALISTA <> 'Problemas - WPD' AND C.ANALISTA <> 'Problemas - MV' AND  C.ANALISTA <> 'Problemas - TASY'  AND
								C.ANALISTA <> 'Precificacao WPD' AND C.ANALISTA <> 'Precificacao MV'  AND C.ANALISTA <> 'Precificacao TASY' AND
                                C.ANALISTA <> 'Inc/Man Cadastral - TASY' AND C.ANALISTA <> 'Inc/Man Cadastral - MV' AND C.ANALISTA <> 'Inc/Man Cadastral - WPD'
								AND C.ANALISTA <> 'Assistencial - WPD' AND C.ANALISTA <> 'Assistencial - MV' AND C.ANALISTA <> 'Assistencial - WPD') PRIOR_N_PEND,

					(SELECT COUNT(*)
					FROM
								BKL_CHAMADOS2 C
					WHERE
	                            C.SISTEMA = B.SISTEMA
                                AND
                                C.STATUS LIKE '%Reabertura%') REABERTURA

	FROM
				BKL_CHAMADOS2 B ";


				if($str_sistema <> "") {

					 $sql = $sql." WHERE B.SISTEMA = '".$str_sistema."' ";

 				}


$sql = $sql." GROUP BY B.SISTEMA ";




$resultado = $conn->query($sql);

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
