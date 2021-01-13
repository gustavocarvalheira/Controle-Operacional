<?php

$data = file_get_contents('php://input');

//Converte a data recebi da API para o formato do banco MySQL
function converte_data($data) {
	$dest_tz = new DateTimeZone('America/Sao_Paulo');
	$date = new DateTime($data);
	$date->setTimeZone($dest_tz);
	$date = $date->format('Y-m-d H:i:s');
	return $date;
}

$data = json_decode($data);

$user = "root";
$password = "";
$host = "localhost:3306";

$conn = new mysqli($host, $user, $password, 'sys');

//Limpa a tabela de chamados antes da carga atualizada dos chamados aberto de PRD
$sql_erase = " DELETE FROM BKL_CHAMADOS2";
$erase = $conn->query($sql_erase);

//Carrega os chamados recebidos por GET à partir da leitura da API pela função bkl_atualizar_base
for($i=0;$i<count($data);$i++)
{

	$sql = " INSERT INTO BKL_CHAMADOS2 (DATA_LEITURA,CHAMADO,UNIDADE,DATA_ABERTURA,DATA_PREVISAO,PRIORIDADE,CATEGORIA,ANALISTA,CLIENTE,STATUS) VALUES (
			NOW(),'".$data[$i]->request."','".$data[$i]->orgunit."','".converte_data($data[$i]->opendate)."','".converte_data($data[$i]->resltime_recalc)."',
			'".$data[$i]->rpriority."','".$data[$i]->abstract."','".$data[$i]->curranal."','".$data[$i]->fullname."','".$data[$i]->rstatus."');";

	$resultado = $conn->query($sql);

}

if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);






$conn->close();

?>
