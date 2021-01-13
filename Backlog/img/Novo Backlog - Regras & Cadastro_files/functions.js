function bkl_painel(a) {

	$("#coverScreen").show();
	
	$.ajax({
		url: 'ler_minutos.php',
		type: "POST",
		data: {"sistema":a},
		dataType: 'json',
		success: function (data) {
	
			content     = "";
			
			for (var x  = 0; x < data.length; x++) {

				var sistema = data[x].SISTEMA;
				sistema = sistema.replace("_", " ");
				sistema = sistema.toUpperCase();

				content     += "  <div class='d-sm-flex align-items-center justify-content-between mb-4'>";
            	content     += "    <h1 class='h3 mb-0 text-gray-800'>CHAMADOS "+sistema+"</h1>";
				content     += "  </div>";

				content     += "<div class='row'>";

	            content     += "  <div class='col-xl-2 col-md-6 mb-4'data-toggle='modal' data-target='#F_"+data[x].SISTEMA+"'>";
	            content     += "  	<div class='card border-left-info shadow h-75 py-2'>";
	            content     += "  	  <div class='card-body'>";
	            content     += "    	  <div class='row no-gutters align-items-center'>";
	            content     += "    		  <div class='col mr-2'>";
	            content     += "    	      <div class='text-xs font-weight-bold text-TOTAL text-uppercase mb-0'>BACKLOG</div>";
	            content     += "    	      <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].BACKLOG+"</div>";
	            content     += "          </div>";
	            content     += "          <div class='col-auto'>";
	            content     += "            <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "          </div>";
	            content     += "        </div>";
	            content     += "      </div>";
	            content     += "    </div>";
	            content     += "  </div>";

	            content     += "  <div class='col-xl-2 col-md-6 mb-4'data-toggle='modal' data-target='#A_"+data[x].SISTEMA+"'>";
	            content     += "  	<div class='card border-left-danger shadow h-75 py-2'>";
	            content     += "  	  <div class='card-body'>";
	            content     += "    	  <div class='row no-gutters align-items-center'>";
	            content     += "    		  <div class='col mr-2'>";
	            content     += "    	      <div class='text-xs font-weight-bold text-danger text-uppercase mb-0'>15 MINS</div>";
	            content     += "    	      <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].A+"</div>";
	            content     += "          </div>";
	            content     += "          <div class='col-auto'>";
	            content     += "            <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "          </div>";
	            content     += "        </div>";
	            content     += "      </div>";
	            content     += "    </div>";
	            content     += "  </div>";

				
	            content     += "    <!-- Earnings (Monthly) Card Example -->";
	            content     += "    <div class='col-xl-2 col-md-6 mb-4' data-toggle='modal' data-target='#B_"+data[x].SISTEMA+"'>";
	            content     += "    <div class='card border-left-danger shadow h-75 py-2'>";
	            content     += "    <div class='card-body'>";
	            content     += "    <div class='row no-gutters align-items-center'>";
	            content     += "    <div class='col mr-2'>";
	            content     += "    <div class='text-xs font-weight-bold text-danger text-uppercase mb-1'>30 MINS</div>";
	            content     += "    <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].B+"</div>";
	            content     += "    </div>";
	            content     += "    <div class='col-auto'>";
	            content     += "    <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";

	            content     += "    <!-- Pending Requests Card Example -->";
	            content     += "    <div class='col-xl-2 col-md-6 mb-4' data-toggle='modal' data-target='#C_"+data[x].SISTEMA+"'>";
	            content     += "    <div class='card border-left-warning shadow h-75 py-2'>";
	            content     += "    <div class='card-body'>";
	            content     += "    <div class='row no-gutters align-items-center'>";
	            content     += "    <div class='col mr-2'>";
	            content     += "    <div class='text-xs font-weight-bold text-warning text-uppercase mb-1'>60 MINS</div>";
	            content     += "    <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].C+"</div>";
	            content     += "    </div>";
	            content     += "    <div class='col-auto'>";
	            content     += "    <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";


	            content     += "    <!-- Pending Requests Card Example -->";
	            content     += "    <div class='col-xl-2 col-md-6 mb-4' data-toggle='modal' data-target='#D_"+data[x].SISTEMA+"'>";
	            content     += "    <div class='card border-left-warning shadow h-75 py-2'>";
	            content     += "    <div class='card-body'>";
	            content     += "    <div class='row no-gutters align-items-center'>";
	            content     += "    <div class='col mr-2'>";
	            content     += "    <div class='text-xs font-weight-bold text-warning text-uppercase mb-1'>90 MINS</div>";
	            content     += "    <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].D+"</div>";
	            content     += "    </div>";
	            content     += "    <div class='col-auto'>";
	            content     += "    <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";

	            content     += "    <!-- Pending Requests Card Example -->";
	            content     += "    <div class='col-xl-2 col-md-6 mb-4' data-toggle='modal' data-target='#E_"+data[x].SISTEMA+"'>";
	            content     += "    <div class='card border-left-success shadow h-75 py-2'>";
	            content     += "    <div class='card-body'>";
	            content     += "    <div class='row no-gutters align-items-center'>";
	            content     += "    <div class='col mr-2'>";
	            content     += "    <div class='text-xs font-weight-bold text-success text-uppercase mb-1'>1 DIA</div>";
	            content     += "    <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].E+"</div>";
	            content     += "    </div>";
	            content     += "    <div class='col-auto'>";
	            content     += "    <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";

	            content     += "</div>";			

			}
			
		
			$("#painel").html(content);		

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_paineis "+xhr.status);
			alert(thrownError);
		}
		
		
	});
	$("#coverScreen").hide();


}

function bkl_modais(a,b) {
	
	$.ajax({
		url: 'ler_chamados.php',
		type: "POST",
		data: {"id_sistema":a,"str_intervalo":b},
		dataType: 'json',
		success: function (data) {
			
				content     = "";
				content     += "<div class='modal fade' id='"+b+"_"+a+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
				content     += "  <div class='modal-dialog modal-dialog-scrollable modal-xl' role='document'>";
				content     += "    <div class='modal-content'>";
				content     += "      <div class='modal-header'>";


				a = a.replace("_", " ");
				a = a.toUpperCase();

				if (b == "F") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - BACKLOG</h5>";
					
				}
				if (b == "A") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - 15 MINS</h5>";
					
				}
				if (b == "B") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - 30 MINS</h5>";
					
				}
				if (b == "C") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - 60 MINS</h5>";
					
				}
				if (b == "D") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - 90 MINS</h5>";
					
				}
				if (b == "E") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - 1 DIA</h5>";
					
				}

				content     += "        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
				content     += "          <span aria-hidden='true'>&times;</span>";
				content     += "        </button>";
				content     += "      </div>";
				content     += "      <div style='font-size:12px' class='modal-body'>";
				content     += "      <table id='tabela' style='font-size:10x' class='table table-striped table-bordered'>";
				content     += "        <thead>";
				content     += "          <tr>";
				content     += "            <th scope='col'>Chamado</th>";
				content     += "            <th scope='col'>Abertura</th>";
				content     += "            <th scope='col'>Previsão</th>";
				content     += "            <th scope='col'>Categoria</th>";
				content     += "            <th scope='col'>Analista</th>";
				content     += "            <th scope='col'>Cliente</th>";
				content     += "            <th scope='col'>Status</th>";
				content     += "            <th scope='col'>Unidade</th>";
				content     += "          </tr>";
				content     += "        </thead>";
				content     += "        <tbody>";

				for (var x  = 0; x < data.length; x++) {
					
					if (data[x].PRIORIDADE == "Prioridade") {
					
						content     += "          <tr style='font-weight: bold; color: red';>";
						content     += "            <th style='cursor:pointer' onclick='window.open(\"https://portalconecta.rededor.com.br/request/" + data[x].CHAMADO + "\");' scope='row'>"+data[x].CHAMADO+"</th>";
						content     += "            <td>"+data[x].DATA_ABERTURA+"</td>";
						content     += "            <td>"+data[x].DATA_PREVISAO+"</td>";
						content     += "            <td>"+data[x].CATEGORIA+"</td>";
						content     += "            <td>"+data[x].ANALISTA+"</td>";
						content     += "            <td>"+data[x].CLIENTE+"</td>";
						content     += "            <td>"+data[x].STATUS+"</td>";
						content     += "            <td>"+data[x].UNIDADE+"</td>";
						content     += "          </tr>";
					
					} else {
						
						content     += "          <tr>";
						content     += "            <th style='cursor:pointer' onclick='window.open(\"https://portalconecta.rededor.com.br/request/" + data[x].CHAMADO + "\");' scope='row'>"+data[x].CHAMADO+"</th>";
						content     += "            <td>"+data[x].DATA_ABERTURA+"</td>";
						content     += "            <td>"+data[x].DATA_PREVISAO+"</td>";
						content     += "            <td>"+data[x].CATEGORIA+"</td>";
						content     += "            <td>"+data[x].ANALISTA+"</td>";
						content     += "            <td>"+data[x].CLIENTE+"</td>";
						content     += "            <td>"+data[x].STATUS+"</td>";
						content     += "            <td>"+data[x].UNIDADE+"</td>";
						content     += "          </tr>";
						
						
					}

				}

				content     += "  </tbody>";
				content     += "</table>";
				content     += "      </div>";
				content     += "      <div class='modal-footer'>";
//				content     += "        <button type='button' data-target='carteira_\"" + a + "\"'> class='btn btn-primary'>Carteiras</button>";
				content     += "        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Fechar</button>";
				content     += "      </div>";
				content     += "    </div>";
				content     += "  </div>";
				content     += "</div>";		
	
				$("#modais").append(content);
				
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_modais "+a+" "+b+" "+xhr.status);
			alert(thrownError);
		}
		
	});	
 		
}

function bkl_painel_api() {


	xml_param += "<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:aut='Automidia'><soap:Header/><soap:Body><SearchRequestsAsAnalyst xmlns='Automidia'><token>CUSTOM-REDIRECT-TOKEN-93F2-FE129CF398CA</token><data><values><add name='REQUEST.CLOSED' operator='='>0</add><add name='REQUEST.OPENDATE' operator='&gt;='>2019/08/08</add><add name='REQUEST.OPENDATE' operator='&lt;='>2019/08/09</add></values></data></SearchRequestsAsAnalyst></soap:Body></soap:Envelope>";

	$.ajax({
		url: 'https://portalconectahml.rededor.com.br/dataservices/application/Requests/service.asmx?op=SearchRequestsAsAnalyst',
		type: "POST",
		dataType: 'xml',
		data: xml_param,
		contentType: "text/xml; charset=\"utf-8\"",
		success: function () {
			
			alert("Success");
	
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("fail");

		}
	});


}

function bkl_atualizar_base() {
	
	
		xml_param = "";
		xml_param += "<?xml version='1.0' encoding='utf-8'?>";
		xml_param += "	<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:aut='Automidia'>";
		xml_param += "	  <soap:Header/>";
		xml_param += "	  <soap:Body>";
		xml_param += "	    <SearchRequestsAsAnalyst xmlns='Automidia'>";
		xml_param += "	      <token>CUSTOM-REDIRECT-TOKEN-93F2-FE129CF398CA</token>";
		xml_param += "	      <data>";
		xml_param += "	        <values>";
	    xml_param += "	        	<add name='REQUEST.ABSTRACT' operator='LIKE'>Cadastro e Regras Comerc%</add>";
	    xml_param += "	        	<add name='REQUEST.RSTATUS' operator='&lt; &gt;'>Encerrado</add>";
	    xml_param += "	        	<add name='REQUEST.RSTATUS' operator='&lt; &gt;'>Cancelado</add>";
	    xml_param += "	        	<add name='REQUEST.OPENDATE' operator='&gt;='>2019/10/15</add>";
	    xml_param += "	        	<add name='REQUEST.OPENDATE' operator='&lt;='>2019/10/30</add>";
		xml_param += "	        </values>";
		xml_param += "	      </data>";
		xml_param += "	    </SearchRequestsAsAnalyst>";
		xml_param += "	  </soap:Body>";
		xml_param += "	</soap:Envelope>";

		var webServiceURL = 'https://portalconectahml.rededor.com.br/dataservices/application/Requests/service.asmx?op=SearchRequestsAsAnalyst';
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open('POST', 'https://portalconectahml.rededor.com.br/dataservices/application/Requests/service.asmx?op=SearchRequestsAsAnalyst', true);
        xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');

	    xmlhttp.onreadystatechange = function () {
			txt = "";
			
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var xmlDoc = xmlhttp.responseXML;

			    var i;
			    var table = "";
			    var x = xmlDoc.getElementsByTagName("add");
					table = "[";


				    for (i = 0; i <x.length; i++) {
						
						table += "{"
													
						request = x[i].getElementsByTagName("request")[0].childNodes[0].nodeValue;
						opendate = x[i].getElementsByTagName("opendate")[0].childNodes[0].nodeValue;
						resltime_recalc = x[i].getElementsByTagName("resltime_recalc")[0] ? x[i].getElementsByTagName("resltime_recalc")[0].childNodes[0].nodeValue : resltime_recalc = "";
						curranal = x[i].getElementsByTagName("curranal")[0].childNodes[0].nodeValue;
						fullname = x[i].getElementsByTagName("fullname")[0].childNodes[0].nodeValue;
						rpriority = x[i].getElementsByTagName("rpriority")[0].childNodes[0].nodeValue;
						rstatus = x[i].getElementsByTagName("rstatus")[0].childNodes[0].nodeValue;
						orgunit = x[i].getElementsByTagName("orgunit")[0].childNodes[0].nodeValue;
						resumo = x[i].getElementsByTagName("abstract")[0].childNodes[0].nodeValue;
						
						request = request.trim();
						opendate = opendate.trim();
 						resltime_recalc = resltime_recalc.trim();
						curranal = curranal.trim();
						fullname = fullname.trim()
						rpriority = rpriority.trim();
						rstatus = rstatus.trim();
						orgunit = orgunit.trim();
						resumo = resumo.trim();

						resumo = resumo.replace(/:/g,"-");
						resumo = resumo.replace(/\s/g,"")
						

						table += '"request" : "' + request + '",';
						table += '"opendate" : "' + opendate + '",';
						table += '"resltime_recalc": "' + resltime_recalc + '",';
						table += '"curranal" : "' + curranal + '",';
						table += '"fullname" : "' + fullname + '",';
						table += '"rpriority" : "' + rpriority + '",';
						table += '"rstatus" : "' + rstatus + '",';
						table += '"orgunit" : "' + orgunit + '",';
						table += '"abstract" : "' + resumo + '"';
	
						if (i == x.length-1){
							table += "}"
						}else{
							table += "},"
						}


				    }

					table += "]";
					
					var json = JSON.parse(table);

					$.ajax({
							url: 'gravar_chamados.php',
							type: "POST",
							data: table,
							dataType: 'text',
							success: function (data)
							{

								bkl_ultima_atualizacao();
	 						   	$( "#bt_atualizar" ).html("Atualizado.")
								$( "#bt_atualizar" ).css("background-color", "#65FA61");
								$( "#bt_atualizar" ).css("color", "#3E3E3E");
								bkl_atualizar_dashboard();

								bkl_modais("CORPORATIVO","0");
								bkl_modais("TASY","0");
								bkl_modais("WPD","0");
								bkl_modais("MV","0");

								bkl_modais("CORPORATIVO","A");
								bkl_modais("TASY","A");
								bkl_modais("WPD","A");
								bkl_modais("MV","A");

								bkl_modais("CORPORATIVO","B");
								bkl_modais("TASY","B");
								bkl_modais("WPD","B");
								bkl_modais("MV","B");

								bkl_modais("CORPORATIVO","C");
								bkl_modais("TASY","C");
								bkl_modais("WPD","C");
								bkl_modais("MV","C");

								bkl_modais("CORPORATIVO","D");
								bkl_modais("TASY","D");
								bkl_modais("WPD","D");
								bkl_modais("MV","D");

								bkl_modais("CORPORATIVO","E");
								bkl_modais("TASY","E");
								bkl_modais("WPD","E");
								bkl_modais("MV","E");

								$("#coverScreen").hide();
								
								
			
							},
							error: function (xhr, ajaxOptions, thrownError) 
							{
									alert(xhr.status);
									alert(thrownError);
							}
	
					});	

	        }
			
	    }

	    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
	    xmlhttp.send(xml_param);			

	
}

function bkl_atualizar_dashboard(a) {
	
	bkl_painel(a);
	

	bkl_modais("Outros","F");
	bkl_modais("TASY","F");
	bkl_modais("WPD","F");
	bkl_modais("MV","F");
	bkl_modais("SEM_SISTEMA","F");

	bkl_modais("Outros","A");
	bkl_modais("TASY","A");
	bkl_modais("WPD","A");
	bkl_modais("MV","A");
	bkl_modais("SEM_SISTEMA","A");

	bkl_modais("Outros","B");
	bkl_modais("TASY","B");
	bkl_modais("WPD","B");
	bkl_modais("MV","B");
	bkl_modais("SEM_SISTEMA","B");

	bkl_modais("Outros","C");
	bkl_modais("TASY","C");
	bkl_modais("WPD","C");
	bkl_modais("MV","C");
	bkl_modais("SEM_SISTEMA","C");

	bkl_modais("Outros","D");
	bkl_modais("TASY","D");
	bkl_modais("WPD","D");
	bkl_modais("MV","D");
	bkl_modais("SEM_SISTEMA","D");

	bkl_modais("Outros","E");
	bkl_modais("TASY","E");
	bkl_modais("WPD","E");
	bkl_modais("MV","E");
	bkl_modais("SEM_SISTEMA","E");

	
}

function bkl_ultima_atualizacao(){

	$.ajax({
		url: 'ultima_atualizacao.php',
		type: "POST",
		dataType: 'json',
		success: function (data) {
	
			$("#data_atualizacao").html("Última atualização: " + data[0].DATA_LEITURA);

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("Atualizacao" + xhr.status);
			alert(thrownError);
		}
	});
	
}

function bkl_completa_unidades(){
	
	
	$.ajax({
		url: 'ler_unidades.php',
		type: "POST",
		dataType: 'json',
		success: function (data) {
	
	
			content = "";
			
			for (var x  = 0; x < data.length; x++) {
								
				content += "<a class='collapse-item'>"+data[x].UNID_ABREV+"</a>";

			}
		
	
			$("#unidades").html(content);		

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_completa_unidades " + xhr.status);
			alert(thrownError);
		}
	});
	
	
	
}

function bkl_abrir_chamado() {
	
	

		xml_param = "";
		xml_param += "	<?xml version='1.0' encoding='utf-8'?>";
		xml_param += "	<soap:Envelope xmlns:xsi='http://www.w3.org/2001/XMLSchema-instance' xmlns:xsd='http://www.w3.org/2001/XMLSchema' xmlns:soap='http://schemas.xmlsoap.org/soap/envelope/'>";
		xml_param += "	  <soap:Body>";
		xml_param += "	    <GetRequest xmlns='Automidia'>";
		xml_param += "	      <token>CUSTOM-REDIRECT-TOKEN-93F2-FE129CF398CA</token>";
		xml_param += "	      <requestId>DOR06786516</requestId>";
		xml_param += "	    </GetRequest>";
		xml_param += "	  </soap:Body>";
		xml_param += "	</soap:Envelope>";


		var webServiceURL = 'https://portalconectahml.rededor.com.br/dataservices/application/Requests/service.asmx?op=GetRequest';
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open('POST', 'https://portalconectahml.rededor.com.br/dataservices/application/Requests/service.asmx?op=GetRequest', true);
        xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');

	    xmlhttp.onreadystatechange = function () {
			txt = "";
			
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				var xmlDoc = xmlhttp.responseXML;

			    var i;
			    var table = "";
			    var x = xmlDoc.getElementsByTagName("add");
					table = "[";


				    for (i = 0; i <x.length; i++) {
						
						table += "{"
													
						request = x[i].getElementsByTagName("request")[0].childNodes[0].nodeValue;
						opendate = x[i].getElementsByTagName("opendate")[0].childNodes[0].nodeValue;
						resltime_recalc = x[i].getElementsByTagName("resltime_recalc")[0] ? x[i].getElementsByTagName("resltime_recalc")[0].childNodes[0].nodeValue : resltime_recalc = "";
						curranal = x[i].getElementsByTagName("curranal")[0].childNodes[0].nodeValue;
						fullname = x[i].getElementsByTagName("fullname")[0].childNodes[0].nodeValue;
						rpriority = x[i].getElementsByTagName("rpriority")[0].childNodes[0].nodeValue;
						rstatus = x[i].getElementsByTagName("rstatus")[0].childNodes[0].nodeValue;
						orgunit = x[i].getElementsByTagName("orgunit")[0].childNodes[0].nodeValue;
						resumo = x[i].getElementsByTagName("abstract")[0].childNodes[0].nodeValue;
						
						request = request.trim();
						opendate = opendate.trim();
 						resltime_recalc = resltime_recalc.trim();
						curranal = curranal.trim();
						fullname = fullname.trim()
						rpriority = rpriority.trim();
						rstatus = rstatus.trim();
						orgunit = orgunit.trim();
						resumo = resumo.trim();

						resumo = resumo.replace(/:/g,"-");
						resumo = resumo.replace(/\s/g,"")
						

						table += '"request" : "' + request + '",';
						table += '"opendate" : "' + opendate + '",';
						table += '"resltime_recalc": "' + resltime_recalc + '",';
						table += '"curranal" : "' + curranal + '",';
						table += '"fullname" : "' + fullname + '",';
						table += '"rpriority" : "' + rpriority + '",';
						table += '"rstatus" : "' + rstatus + '",';
						table += '"orgunit" : "' + orgunit + '",';
						table += '"abstract" : "' + resumo + '"';
	
						if (i == x.length-1){
							table += "}"
						}else{
							table += "},"
						}


				    }

					table += "]";
					
					var json = JSON.parse(table);

					$.ajax({
							url: 'gravar_chamados.php',
							type: "POST",
							data: table,
							dataType: 'text',
							success: function (data)
							{

								bkl_ultima_atualizacao();
	 						   	$( "#bt_atualizar" ).html("Atualizado.")
								$( "#bt_atualizar" ).css("background-color", "#65FA61");
								$( "#bt_atualizar" ).css("color", "#3E3E3E");
								bkl_atualizar_dashboard();

								bkl_modais("CORPORATIVO","A");
								bkl_modais("TASY","A");
								bkl_modais("WPD","A");
								bkl_modais("MV","A");

								bkl_modais("CORPORATIVO","B");
								bkl_modais("TASY","B");
								bkl_modais("WPD","B");
								bkl_modais("MV","B");

								bkl_modais("CORPORATIVO","C");
								bkl_modais("TASY","C");
								bkl_modais("WPD","C");
								bkl_modais("MV","C");

								bkl_modais("CORPORATIVO","D");
								bkl_modais("TASY","D");
								bkl_modais("WPD","D");
								bkl_modais("MV","D");

								bkl_modais("CORPORATIVO","E");
								bkl_modais("TASY","E");
								bkl_modais("WPD","E");
								bkl_modais("MV","E");

								$("#coverScreen").hide();
								
								
			
							},
							error: function (xhr, ajaxOptions, thrownError) 
							{
									alert("Abrir "+xhr.status);
									alert(thrownError);
							}
	
					});	

	        }
			
	    }

	    xmlhttp.setRequestHeader('Content-Type', 'text/xml');
	    xmlhttp.send(xml_param);			

	
}

function bkl_painel_prioridades(a) {

	$.ajax({
		url: 'ler_prioridades.php',
		type: "POST",
		data: {"sistema":a},
		dataType: 'json',
		success: function (data) {
	
			content     = "";


			for (var x  = 0; x < data.length; x++) {
				
				var sistema = data[x].SISTEMA;
				sistema = sistema.replace("_", " ");
				sistema = sistema.toUpperCase();
	
				content     += "  <div class='d-sm-flex align-items-center justify-content-between mb-4'>";
            	content     += "    <h1 class='h3 mb-0 text-gray-800'>PRIORIDADES "+sistema+"</h1>";
				content     += "  </div>";

				content     += "<div class='row'>";

	            content     += "  <div class='col-xl-2 col-md-6 mb-4'data-toggle='modal' data-target='#PRIORID_PEND_"+data[x].SISTEMA+"'>";
	            content     += "  	<div class='card border-left-danger shadow h-75 py-2'>";
	            content     += "  	  <div class='card-body'>";
	            content     += "    	  <div class='row no-gutters align-items-center'>";
	            content     += "    		  <div class='col mr-2'>";
	            content     += "    	      <div class='text-xs font-weight-bold text-danger text-uppercase mb-0'>PENDENTES</div>";
	            content     += "    	      <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].PRIOR_PEND+"</div>";
	            content     += "          </div>";
	            content     += "          <div class='col-auto'>";
	            content     += "            <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "          </div>";
	            content     += "        </div>";
	            content     += "      </div>";
	            content     += "    </div>";
	            content     += "  </div>";

				
	            content     += "    <!-- Earnings (Monthly) Card Example -->";
	            content     += "    <div class='col-xl-2 col-md-6 mb-4' data-toggle='modal' data-target='#PRIORID_"+data[x].SISTEMA+"'>";
	            content     += "    <div class='card border-left-success shadow h-75 py-2'>";
	            content     += "    <div class='card-body'>";
	            content     += "    <div class='row no-gutters align-items-center'>";
	            content     += "    <div class='col mr-2'>";
	            content     += "    <div class='text-xs font-weight-bold text-success text-uppercase mb-1'>ROTEADAS</div>";
	            content     += "    <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].PRIOR_N_PEND+"</div>";
	            content     += "    </div>";
	            content     += "    <div class='col-auto'>";
	            content     += "    <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";

	            content     += "    <!-- Pending Requests Card Example -->";
	            content     += "    <div class='col-xl-2 col-md-6 mb-4' data-toggle='modal' data-target='#REABERTURA_"+data[x].SISTEMA+"'>";
	            content     += "    <div class='card border-left-warning shadow h-75 py-2'>";
	            content     += "    <div class='card-body'>";
	            content     += "    <div class='row no-gutters align-items-center'>";
	            content     += "    <div class='col mr-2'>";
	            content     += "    <div class='text-xs font-weight-bold text-warning text-uppercase mb-1'>REAB.</div>";
	            content     += "    <div class='h5 mb-0 font-weight-bold text-gray-800'>"+data[x].REABERTURA+"</div>";
	            content     += "    </div>";
	            content     += "    <div class='col-auto'>";
	            content     += "    <i class='fas fa-bullhorn fa-2x text-gray-300'></i>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";
	            content     += "    </div>";

	            content     += "</div>";			
			}
		
	
			$("#painel").html(content);		

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_modais_prioridades " + xhr.status);
			alert(thrownError);
		}
	});


}

function bkl_modais_prioridades(a,b) {
	
	$.ajax({
		url: 'ler_chamados_prioridades.php',
		type: "POST",
		data: {"id_sistema":a,"str_intervalo":b},
		dataType: 'json',
		success: function (data) {
	


				content     = "";
				content     += "<div class='modal fade' id='"+b+"_"+a+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
				content     += "  <div class='modal-dialog modal-dialog-scrollable modal-xl' role='document'>";
				content     += "    <div class='modal-content'>";
				content     += "      <div class='modal-header'>";

				a = a.replace("_", " ");
				a = a.toUpperCase();


				if (b == "PRIORID") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - PRIORIDADES ROTEADAS</h5>";
					
				}
				if (b == "PRIORID_PEND") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - PRIORIDADES PENDENTES</h5>";
					
				}
				if (b == "REABERTURA") {
					
					content     += "        <h5 class='modal-title' id='exampleModalLabel'>"+a+" - REABERTURAS</h5>";
					
				}

				content     += "        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>";
				content     += "          <span aria-hidden='true'>&times;</span>";
				content     += "        </button>";
				content     += "      </div>";
				content     += "      <div style='font-size:12px' class='modal-body'>";

				content     += "      <table id='tabela' style='font-size:10x' class='table table-striped table-bordered'>";
				content     += "        <thead>";
				content     += "          <tr>";
				content     += "            <th scope='col'>Chamado</th>";
				content     += "            <th scope='col'>Abertura</th>";
				content     += "            <th scope='col'>Previsão</th>";
				content     += "            <th scope='col'>Categoria</th>";
				content     += "            <th scope='col'>Analista</th>";
				content     += "            <th scope='col'>Cliente</th>";
				content     += "            <th scope='col'>Status</th>";
				content     += "            <th scope='col'>Unidade</th>";
				content     += "          </tr>";
				content     += "        </thead>";
				content     += "        <tbody>";

				for (var x  = 0; x < data.length; x++) {
					
					if (data[x].PRIORIDADE == "Prioridade") {
					
						content     += "          <tr style='font-weight: bold; color: red';>";
						content     += "            <th style='cursor:pointer' onclick='window.open(\"https://portalconecta.rededor.com.br/request/" + data[x].CHAMADO + "\");' scope='row'>"+data[x].CHAMADO+"</th>";
						content     += "            <td>"+data[x].DATA_ABERTURA+"</td>";
						content     += "            <td>"+data[x].DATA_PREVISAO+"</td>";
						content     += "            <td>"+data[x].CATEGORIA+"</td>";
						content     += "            <td>"+data[x].ANALISTA+"</td>";
						content     += "            <td>"+data[x].CLIENTE+"</td>";
						content     += "            <td>"+data[x].STATUS+"</td>";
						content     += "            <td>"+data[x].UNIDADE+"</td>";
						content     += "          </tr>";
					
					} else {
						
						content     += "          <tr>";
						content     += "            <th style='cursor:pointer' onclick='window.open(\"https://portalconecta.rededor.com.br/request/" + data[x].CHAMADO + "\");' scope='row'>"+data[x].CHAMADO+"</th>";
						content     += "            <td>"+data[x].DATA_ABERTURA+"</td>";
						content     += "            <td>"+data[x].DATA_PREVISAO+"</td>";
						content     += "            <td>"+data[x].CATEGORIA+"</td>";
						content     += "            <td>"+data[x].ANALISTA+"</td>";
						content     += "            <td>"+data[x].CLIENTE+"</td>";
						content     += "            <td>"+data[x].STATUS+"</td>";
						content     += "            <td>"+data[x].UNIDADE+"</td>";
						content     += "          </tr>";
						
						
					}

				}

				content     += "  </tbody>";
				content     += "</table>";

				content     += "      </div>";
				content     += "      <div class='modal-footer'>";
				content     += "        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Fechar</button>";
				content     += "      </div>";
				content     += "    </div>";
				content     += "  </div>";
				content     += "</div>";		
	
				$("#modais").append(content);
			    								
				
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_modais_prioridades " + xhr.status);
			alert(thrownError);
		}
		
	});	
 		
}

function bkl_atualizar_base_oracle() {
	
	$.ajax({
			url: 'ler_base_oracle.php',
			type: "POST",
//			data: table,
			dataType: 'text',
			success: function ()
			{

				bkl_ultima_atualizacao();
//			   	$( "#bt_atualizar" ).html("Base Atualizada")
//				$( "#bt_atualizar" ).css("background-color", "#65FA61");
//				$( "#bt_atualizar" ).css("color", "#3E3E3E");
//				$( "#bt_atualizar" ).css("cursor", "not-allowed");
				$( "#bt_atualizar" ).html("<a class='nav-link' style='color:#3E3E3E; cursor:not-allowed'><i style='color:#3E3E3E;' class='fas fa-fw fa fa-refresh'></i><span>Base Atualizada</span></a>");
				bkl_atualizar_dashboard();

				bkl_modais("CORPORATIVO","0");
				bkl_modais("TASY","0");
				bkl_modais("WPD","0");
				bkl_modais("MV","0");

				bkl_modais("CORPORATIVO","A");
				bkl_modais("TASY","A");
				bkl_modais("WPD","A");
				bkl_modais("MV","A");

				bkl_modais("CORPORATIVO","B");
				bkl_modais("TASY","B");
				bkl_modais("WPD","B");
				bkl_modais("MV","B");

				bkl_modais("CORPORATIVO","C");
				bkl_modais("TASY","C");
				bkl_modais("WPD","C");
				bkl_modais("MV","C");

				bkl_modais("CORPORATIVO","D");
				bkl_modais("TASY","D");
				bkl_modais("WPD","D");
				bkl_modais("MV","D");

				bkl_modais("CORPORATIVO","E");
				bkl_modais("TASY","E");
				bkl_modais("WPD","E");
				bkl_modais("MV","E");

				$("#coverScreen").hide();
				
				

			},
			error: function (xhr, ajaxOptions, thrownError) 
			{
					alert(xhr.status);
					alert(thrownError);
			}

	});	
	
	
}

function bkl_abrir_carteira(sistema) {
/*	
	$.ajax({
		url: 'ler_carteira.php',
		type: "POST",
		data: {"id_sistema":sistema},
		dataType: 'json',
		success: function (data) {				
				
				
   			 	content 	= "";
				content     += "<div id='carteira_\"" + a + "\"' class='modal-body'>";
  				content     += "<h5>Popover em um modal</h5>";
 				content     += " <p>Este <a href='#' role='button' class='btn btn-secondary popover-test' title='Título do popover' data-content='O conteúdo do popover é definido aqui.'>botão</a> aciona um popover, ao clicar nele.</p>";
 				content     += " <hr>";
 				content     += " <h5>Tooltips em um modal</h5>";
 				content     += " <p><a href='#' class='tooltip-test' title='Tooltip'>Este link</a> e <a href='#' class='tooltip-test' title='Tooltip'>este outro</a> mostra tooltips, quando passamos o mouse sobre eles.</p>";
				content     += "</div>";

				$("#modal_carteira").append(content);
				
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_modais_carteira "+a+" "+b+" "+xhr.status);
			alert(thrownError);
		}
		
	});	
*/	
	
	
}

function bkl_login(action,login,senha) {

	$.ajax({
		url: 'login.php',
		type: "POST",
		data: {"action":action,"login":login,"senha":senha},
		dataType: 'json',
		success: function (data) {
			

			var res = JSON.parse(data);

			if (res['LOGIN'] == "FALSE") {
			
				alert("Login/Senha Inválidos.");
				window.location.href = "/bootstrap_template/login.html";

				
			} else  {
				
				window.location.href = "/bootstrap_template/";

			}
								
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_login  "+xhr.status);
			alert(thrownError);
		}
		
	});	
	
}

function bkl_validalogin() {

	$.ajax({
		url: 'valida_login.php',
		type: "POST",
		dataType: 'json',
		success: function (data) {
				
			
			var res = JSON.parse(data);
									
			if (res['LOGIN'] == "FALSE"){
			
				window.location.href = "/bootstrap_template/login.html";

				
			} else  {
				
//				content = "";
//				content += "<div style='display: inline-block; background:red; white-space: nowrap;'>"+res['NOME']+"</div>"; 
//				content += "<div id='bt_sair' onclick='bkl_logoff();' style='padding:5px;float:right;width:50px;cursor:pointer;alight:right;background:blue'><i class='fa fa-sign-out' style='font-size:30px;color:gray'></i></div>"; 
				$("#login2").text(res['NOME']);
//				$("#login2 span").html("TEste");
				
				
//				$("#login").html(content);

			}
				
								
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_Validalogin  "+xhr.status);
			alert(thrownError);
		}
		
	});	

}

function bkl_logoff() {
	
	$.ajax({
		url: 'logoff.php',
		success: function () {
				
			window.location.href = "/bootstrap_template/login.html";
								
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_logoff  "+xhr.status);
			alert(thrownError);
		}
		
	});	
	
	
	
}