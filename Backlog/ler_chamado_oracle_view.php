<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$conn = oci_connect('REGRASBACKLOG', 'Regras2020', 'BD_PORTAL_CSC');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

function converte_data($data) {
	$dest_tz = new DateTimeZone('America/Sao_Paulo');
	$date = new DateTime($data);
//	$date->setTimeZone($dest_tz);
	$date = $date->format('Y-m-d H:i:s');	
	return $date;
}


$sql = "SELECT 
	
			CHAMADO,
			ABERTURA,
			PREVISAO,
			DESCRICAO_CATEGORIA,
			STATUS,
			ANALISTA,
			DEPARTAMENTO,
			CLIENT,
			EMAIL,
			ULTIMA_ACAO,
			PRIORIDADE,
			CATEGORIA,
			PRODUTO,
			PROCESSO,
			PROBLEM,
			CONVENIO,
			SISTEMA,
			CRC_RECEBENIVELAPROVADOR,	
			TIPO_PRODUTO,
			COD_PRODUTO,
			CHAMADO_PRIORIZACAO,
			CLASSIFICACAO,
			MOTIVO_PRIORIZACAO,
			PONTUACAO,
			CRC_STATUS_CHAMADO,
			VALOR_ASSOCIADO
	
	 FROM 
	 		ADMAHD.RDOR_VW_REGCAD_BCKLOG
			
	 WHERE SISTEMA IN ('TASY','WPD','MV','OUTROS','LEGADO')";


$stid = oci_parse($conn, $sql);
oci_execute($stid);

$user = "root"; 
$password = ""; 
$host = "localhost:3306"; 

$conn_mysql = new mysqli($host, $user, $password, 'backlog');

$sql_erase = "DELETE FROM BKL_CHAMADOS2";
$erase = $conn_mysql->query($sql_erase);

while (($row = oci_fetch_assoc($stid)) != false) {

		$request = $row["CHAMADO"];
		$orgunit = $row["DEPARTAMENTO"];
		$opendate = $row["ABERTURA"];
		$resltime = $row["PREVISAO"];
		$rpriority = $row["PRIORIDADE"];
		$abstract = $row["DESCRICAO_CATEGORIA"];
		$curranal = $row["ANALISTA"];
		$fullname = $row["CLIENT"];
		$rstatus = $row["STATUS"];
		$sistema = $row["SISTEMA"];
		
		
		$sql2 = "";
		
		$sql2 = "
				INSERT INTO BKL_CHAMADOS2 (DATA_LEITURA,CHAMADO,UNIDADE,DATA_ABERTURA,DATA_PREVISAO,PRIORIDADE,CATEGORIA,ANALISTA,CLIENTE,STATUS,SISTEMA) VALUES (
				NOW(),'".$request."','".$orgunit."','".converte_data($opendate)."','".converte_data($resltime)."','".$rpriority."','".$abstract."','".$curranal."',
				'".$fullname."','".$rstatus."','".$sistema."');
				";

//		print $sql2 . "<br>";
		$resultado = $conn_mysql->query($sql2);
		
		if ($conn_mysql->connect_error) {
		    die("Connection failed: " . $conn_mysql->connect_error);
		}

}

$conn_mysql->close();

?>