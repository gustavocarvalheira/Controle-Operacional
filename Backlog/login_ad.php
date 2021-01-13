<?php

error_reporting(E_ALL);
ini_set('display_errors', 'On');

$ldap_username = $_POST['login'];
$ldap_password = $_POST['senha'];
$ldap_login = $ldap_username.'@rededor.com.br';

//------------------------------------------------------------------------------
// Conecta ao servidor LDAP (Active Directory)
//------------------------------------------------------------------------------
$ldap_connection = ldap_connect('ldap://rededor.corp:389') or die("That LDAP-URI was not parseable");

ldap_set_option($ldap_connection, LDAP_OPT_PROTOCOL_VERSION, 3) or die('Unable to set LDAP protocol version');
ldap_set_option($ldap_connection, LDAP_OPT_REFERRALS, 0); // We need this for doing an LDAP search.

if (TRUE !== @ldap_bind($ldap_connection, $ldap_login, $ldap_password)){

  if (ldap_error($ldap_connection) == "Can't contact LDAP server"){

    $json = json_encode('{"LOGIN":"FALSE-SERVIDOR-OFFLINE"}');
    exit($json);

  }else if (ldap_error($ldap_connection) == "Invalid credentials"){

    $json = json_encode('{"LOGIN":"FALSE-LOGIN-SENHA"}');
    exit($json);

  }

}

//-------------------------------------------------------------------------------------------------------------------------------
// Busca se o usuário logado consta na lista do AD. Caso conste, autoriza a entrada. Não se busca mais por um perfil específico. 
//-------------------------------------------------------------------------------------------------------------------------------

$ldap_base_dn = 'DC=rededor,DC=corp';
$search_filter = "(&(samaccountname=".$ldap_username."))";

$result = ldap_search($ldap_connection, $ldap_base_dn, $search_filter);

$entries = ldap_get_entries($ldap_connection, $result);

$memberof = $entries[0]["memberof"][7];

$permission = "";
for($i=0;$i<count($entries[0]["memberof"])-1;$i++){
  $permission =   $permission.$entries[0]["memberof"][$i];
}


//----------------------------------------------------------------------------------------------------
// Conecta-se a base local MySQL para determinar as unidades que fazem parte do cadastro deste usuário
//----------------------------------------------------------------------------------------------------

$user = "root";
$password = "";
$host = "localhost:3306";

// Create connection
$conn = new mysqli($host, $user, $password, 'backlog');
// Check connection
if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

$sql_unidades = "SELECT * FROM backlog.`bkl_usuarios_unidades`;";

$resultado = $conn->query($sql_unidades);

$rows_unidades = array();
$unidades_usuario = "";
while($r = mysqli_fetch_assoc($resultado)) {
    #$rows_unidades[] = $r;
	$unidades_usuario = $unidades_usuario.$r["unidade"];
	if ($i<count($r)){
		$unidades_usuario = $unidades_usuario.",";
	}	
}
$conn->close();

//----------------------------------------------------------------------------------------------------
// Encerrada a busca pelas unidades relacionadas ao usuário. 
//----------------------------------------------------------------------------------------------------


//Comentado para caso se retorne com a estratégia de ter um perfil específico para o painel no AD da Rede Dor. 
//$permission = strpos($permission,"CN=Acesso Vpn,OU=Astaro,DC=rededor,DC=corp");

//if ($permission) {

session_start();
$_SESSION["UNIDADES"] = $unidades_usuario;
$_SESSION["ID"] = $entries[0]["mail"][0];
$_SESSION["CPF"] = $entries[0]["extensionattribute1"][0];
$_SESSION["LOGIN"] = $ldap_username;
$_SESSION["NOME"] = $entries[0]["name"][0];
$_SESSION["TEAM"] = "TODOS";
$retorno = '{"LOGIN":"'.$ldap_username.'","NOME":"'.$entries[0]["name"][0].'","TEAM":"'.$_SESSION["TEAM"].'","ID":"'.$entries[0]["mail"][0].'","CPF":"'.$entries[0]["extensionattribute1"][0].'","UNIDADES":"'.$unidades_usuario.'"}';
$json = json_encode($retorno);

print $json;

//Comentado para caso se queira verificar outras informações que poderiam vir do AD da Rede Dor.
//	print var_dump($entries);

ldap_unbind($ldap_connection);

?>
