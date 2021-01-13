<?php

$str_sistema = $_GET['sistema'];
$str_analista = $_GET['analista'];

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
	
	SELECT 
	C.SISTEMA,

    COUNT(CHAMADO) TOTAL,
    (SELECT COUNT(CHAMADO)
    FROM SYS.BKL_CHAMADOS2 D
    WHERE D.DATA_PREVISAO < NOW()
	AND ";
		if($str_analista <> "ALL") {

			 $sql = $sql." D.ANALISTA = '".$str_analista."' ";
		 
		} else {

		 $sql = $sql." 1=1 ";
		
		}

$sql = $sql."    AND 
	D.SISTEMA = C.SISTEMA) BACKLOG,


    (SELECT COUNT(CHAMADO)
    FROM SYS.BKL_CHAMADOS2 D
    WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:15' HOUR_MINUTE)
	AND	";
		if($str_analista <> "ALL") {

			 $sql = $sql." D.ANALISTA = '".$str_analista."' ";
	 
		} else {

		 $sql = $sql." 1=1 ";
	
		}
$sql = $sql."    AND 
	D.SISTEMA = C.SISTEMA) A,

    (SELECT COUNT(CHAMADO)
    FROM SYS.BKL_CHAMADOS2 D
    WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:30' HOUR_MINUTE)
	AND ";
	
		if($str_analista <> "ALL") {

			 $sql = $sql." D.ANALISTA = '".$str_analista."' ";
	 
		} else {

		 $sql = $sql." 1=1 ";
	
		}
$sql = $sql."    AND 
	D.SISTEMA = C.SISTEMA) B,

    (SELECT COUNT(CHAMADO)
    FROM SYS.BKL_CHAMADOS2 D
    WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:60' HOUR_MINUTE)
	AND ";
	
		if($str_analista <> "ALL") {

			 $sql = $sql." D.ANALISTA = '".$str_analista."' ";
	 
		} else {

		 $sql = $sql." 1=1 ";
	
		}
$sql = $sql."    AND 
	D.SISTEMA = C.SISTEMA) C,

    (SELECT COUNT(CHAMADO)
    FROM SYS.BKL_CHAMADOS2 D
    WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:90' HOUR_MINUTE)
	AND ";
	
		if($str_analista <> "ALL") {

			 $sql = $sql." D.ANALISTA = '".$str_analista."' ";
	 
		} else {

		 $sql = $sql." 1=1 ";
	
		}
$sql = $sql."    AND 
	D.SISTEMA = C.SISTEMA) D,

    (SELECT COUNT(CHAMADO)
    FROM SYS.BKL_CHAMADOS2 D
    WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-1' DAY)
	AND ";
	
		if($str_analista <> "ALL") {

			 $sql = $sql." D.ANALISTA = '".$str_analista."' ";
	 
		} else {

		 $sql = $sql." 1=1 ";
	
		}
$sql = $sql."    AND 
	D.SISTEMA = C.SISTEMA) E

FROM 
			SYS.BKL_CHAMADOS2 C

WHERE  ";
				
				if($str_sistema <> "ALL") {

					 $sql = $sql."C.SISTEMA = '".$str_sistema."' ";
					 
 				} else {

				 $sql = $sql." 1=1 ";
					
 				}

			 $sql = $sql." AND ";


				if($str_analista <> "ALL") {

					 $sql = $sql." C.ANALISTA = '".$str_analista."' ";
					 
  				} else {

 				 $sql = $sql." 1=1 ";
					
  				}


$sql = $sql." GROUP BY C.SISTEMA ";

		
//print $sql."<br>";

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
