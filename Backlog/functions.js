function bkl_painel(a,b) {

	$("#coverScreen").show();

	$.ajax({
		url: 'http://10.250.3.171:8000/ler_minutos',
		type: "GET",
		data: {"sistema":a,"analista":b},
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
		url: 'http://10.250.3.171:8000/ler_chamados',
		type: "GET",
		data: {"sistema":a,"intervalo":b},
		dataType: 'json',
		success: function (data) {

				content     = "";
				content     += "<div class='modal fade' id='"+b+"_"+a+"' tabindex='-1' role='dialog' aria-labelledby='exampleModalLabel' aria-hidden='true'>";
				content     += "  <div class='modal-dialog modal-dialog-scrollable modal-xl parent' role='document'>";
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
				content     += "      <div style='font-size:12px;' class='modal-body child'>";
				content     += "      <table id='"+a+b+"' style='font-size:10x;' class='table table-striped table-bordered'>";
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
				
				
				$('#'+a+b).DataTable({
				
					dom: 'Bfrtip',
					buttons: [
						{
							extend: 'copyHtml5',
							text: 'Copiar'
						},
						{
							extend: 'excelHtml5',
							text: 'Excel'
						},
						{
							extend: 'csvHtml5',
							text: 'Arquivo CSV'
						},
//							{
//								extend: 'pdfHtml5',
//								text: 'Gerar PDF'
//							},
						{
							extend: 'print',
							text: 'Imprimir'
						}

					],
					"language": {
						"search": "Busca:",
						"lengthMenu": "Exibindo _MENU_ registros por página.",
						"zeroRecords": "Nada encontrado - Desculpe.",
						"info": "Exibindo página _PAGE_ de _PAGES_",
						"infoEmpty": "Nenhum registro disponível",
						"infoFiltered": "(filtrado de _MAX_ registros totais.",
						"infoPostFix":    "",
						"thousands":      ".",
						"lengthMenu":     "Exibindo _MENU_ registros",
						"loadingRecords": "Carregando...",
						"processing":     "Processando...",
						"zeroRecords":    "Nenhuma correspondência encontrada.",
						"paginate": {
							"first":      "Primeiro",
							"last":       "Último",
							"next":       "Próximo",
							"previous":   "Anterior"
						},
						"aria": {
							"sortAscending":  ": organizar de forma crescente",
							"sortDescending": ": organizar de forma decrescente"
						}
					},
					"paging": false
				});

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_modais "+a+" "+b+" "+xhr.status);
			alert(thrownError);
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
								$( "#bt_atualizar" ).html("Atualizado.");
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

	bkl_painel(a,"ALL");


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

			$("#data_atualizacao").html("<div style='padding:5px;background:gray;color:white;border-radius:5px'>Última atualização: " + data[0].DATA_LEITURA + "</div>");

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("Atualizacao" + xhr.status);
			alert(thrownError);
		}
	});

}

function bkl_completa_unidades(){
	
	$.support.cors = true;
	$.ajax({
			
    	//url: 'ler_unidades.php',
		url: 'http://localhost:8000/ler_unidades',
		type: "GET",
		contentType: "application/json",
		dataType: 'json',
		success: function (data) {

			content = "";
			

			for (var x  = 0; x < data.length; x++) {

				content += "<a class='collapse-item'>"+data[x].UNID_ABREV+"</a>";

			}

			$("#unidades").html(content);

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("bkl_completa_unidades " + xhr.status);
			alert(thrownError);
		}
	});



}

function bkl_completa_analistas(){

	$.ajax({
		url: 'ler_analistas.php',
		type: "POST",
		data: {"frommenu":"Y"},
		dataType: 'json',
		success: function (data) {

			content = "<div class='bg-white py-2 collapse-inner rounded' style='height:200px;overflow: scroll'>";
			content += "<h6 class='collapse-header'>Analistas:</h6>";

			for (var x  = 0; x < data.length; x++) {

				content += "<a class='collapse-item' onclick='bkl_painel(\"ALL\",\""+data[x].ANALISTA+"\");'>"+data[x].ANALISTA+"</a>";

			}

			content += "</div>";

			$("#collapseAnalistas").html(content);

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_completa_analistas " + xhr.status);
			alert(thrownError);
		}
	});

}

function bkl_painel_prioridades(a) {

	$.ajax({
		
		url: 'http://10.250.3.171:8000/ler_prioridades',
		//url: 'ler_prioridades.php',
		type: "GET",
		data: {"sistema":a},
		dataType: 'json',
		cache: false,
		success: function (data) {

			content     = "";


			for (var x = 0; x < data.length; x++) {

				var sistema = data[x].SISTEMA;
				sistema = sistema.replace("_", " ");
				sistema = sistema.toUpperCase();

				      content     += "<div class='d-sm-flex align-items-center justify-content-between mb-4'>";
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
			alert("blk_painel_prioridades " + xhr.status);
			alert(thrownError);
		}
	});


}
  
function bkl_modais_prioridades(a,b) {

	$.ajax({
		url: 'ler_chamados_prioridades.php',
		type: 'POST',
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
				content     += "      <div style='font-size:9px' class='modal-body'>";
				content     += "      <table id='"+a+b+"' style='font-size:8px' class='table table-striped table-bordered'>";
				content     += "        <thead>";
				content     += "          <tr>";
				content     += "            <th scope='col'>Chamado</th>";
				content     += "            <th scope='col'>Abertura</th>";
				content     += "            <th scope='col'>Previsão</th>";
				content     += "            <th scope='col'>Categoria</th>";
				content     += "            <th scope='col'>Peso</th>";
				content     += "            <th scope='col'>Classificação</th>";
				content     += "            <th scope='col'>Valor Associado</th>";
				content     += "            <th scope='col'>Motivo da Priozação</th>";
				content     += "            <th scope='col'>Dt Priorização</th>";
				content     += "            <th scope='col'>Analista</th>";
				content     += "            <th scope='col'>Cliente</th>";
				content     += "            <th scope='col'>Status</th>";
				content     += "            <th scope='col'>Unidade</th>";
				content     += "          </tr>";
				content     += "        </thead>";
				content     += "        <tbody>";

				for (var x  = 0; x < data.length; x++) {

					if (data[x].PRIORIDADE == "Prioridade") {

						content     += "          <tr style=''>";
						content     += "            <th style='cursor:pointer' onclick='window.open(\"https://portalconecta.rededor.com.br/request/" + data[x].CHAMADO + "\");' scope='row'>"+data[x].CHAMADO+"</th>";
						content     += "            <td>"+data[x].DATA_ABERTURA+"</td>";
						content     += "            <td>"+data[x].DATA_PREVISAO+"</td>";
						content     += "            <td>"+data[x].CATEGORIA+"</td>";
						content     += "            <td>"+data[x].PONTUACAO+"</td>";
						content     += "            <td>"+data[x].CLASSIFICACAO+"</td>";
						content     += "            <td>"+data[x].VALOR_ASSOCIADO+"</td>";
						content     += "            <td>"+data[x].MOTIVO_PRIORIZACAO+"</td>";
						content     += "            <td>"+data[x].DT_PRI+"</td>";
						content     += "            <td>"+data[x].ANALISTA+"</td>";
						content     += "            <td>"+data[x].CLIENTE+"</td>";
						content     += "            <td>"+data[x].STATUS+"</td>";
						content     += "            <td>"+data[x].UNIDADE+"</td>";
						content     += "          </tr>";

					} else {

						content     += "          <tr>";
						content     += "            <th style='cursor:pointer;font-size:8px' onclick='window.open(\"https://portalconecta.rededor.com.br/request/" + data[x].CHAMADO + "\");' scope='row'>"+data[x].CHAMADO+"</th>";
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
				content     += "        <button type='button' id='btn_carteira' class='btn btn-primary' data-toggle='modal' data-target='#carteiraModal'>Carteiras</button>";
				content     += "        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Fechar</button>";
				content     += "      </div>";
				content     += "    </div>";
				content     += "  </div>";
				content     += "</div>";

				$("#modais").append(content);
				
				$('#'+a+b).DataTable({
				
						dom: 'Bfrtip',
						buttons: [
							{
								extend: 'copyHtml5',
								text: 'Copiar'
							},
							{
								extend: 'excelHtml5',
								text: 'Excel'
							},
							{
								extend: 'csvHtml5',
								text: 'Arquivo CSV'
							},
//							{
//								extend: 'pdfHtml5',
//								text: 'Gerar PDF'
//							},
							{
								extend: 'print',
								text: 'Imprimir'
							}

						],
						"language": {
							"search": "Busca:",
							"lengthMenu": "Exibindo _MENU_ registros por página.",
							"zeroRecords": "Nada encontrado - Desculpe.",
							"info": "Exibindo página _PAGE_ de _PAGES_",
							"infoEmpty": "Nenhum registro disponível",
							"infoFiltered": "(filtrado de _MAX_ registros totais.",
							"infoPostFix":    "",
							"thousands":      ".",
							"lengthMenu":     "Exibindo _MENU_ registros",
							"loadingRecords": "Carregando...",
							"processing":     "Processando...",
							"zeroRecords":    "Nenhuma correspondência encontrada.",
							"paginate": {
								"first":      "Primeiro",
								"last":       "Último",
								"next":       "Próximo",
								"previous":   "Anterior"
							},
							"aria": {
								"sortAscending":  ": organizar de forma crescente",
								"sortDescending": ": organizar de forma decrescente"
							}
						},
						"paging": false

				});
		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_modais_prioridades " + xhr.status);
			alert(thrownError);
		}

	});

}

function bkl_atualizar_base_oracle() {
	
//	alert('Ok');

	$.ajax({
			url: 'ler_base_oracle_view.php',
//			type: 'POST',
//			dataType: 'text',
			success: function ()
			{
/*				bkl_ultima_atualizacao();
				$( "#bt_atualizar" ).html("<a class='nav-link' style='color:#B6B6B6; cursor:not-allowed'><i style='color:#B6B6B6;' class='fas fa-fw fa fa-refresh'></i><span>Base Atualizada</span></a>");
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

*/	
//				localtion.reload();
//				alert("Atualizado.");
				$("#coverScreen").hide();
				location.reload();



			},
			error: function (xhr, ajaxOptions, thrownError)
			{
					alert(xhr.status);
					alert(thrownError);
			}

	});


}

function bkl_abrir_carteira(sistema) {

	$.ajax({
		url: 'ler_carteira.php',
		type: "GET",
		data: {"str_sistema":sistema},
		dataType: 'json',
		success: function (data) {

   			 	content 	= "";
				content     += "<div id='carteira_\"" + sistema + "\"' class='modal-body'>";
  				content     += "<h5>Popover em um modal</h5>";
 				content     += " <p>Este <a href='#' role='button' class='btn btn-secondary popover-test' title='Título do popover' data-content='O conteúdo do popover é definido aqui.'>botão</a> aciona um popover, ao clicar nele.</p>";
 				content     += " <hr>";
 				content     += " <h5>Tooltips em um modal</h5>";
 				content     += " <p><a href='#' class='tooltip-test' title='Tooltip'>Este link</a> e <a href='#' class='tooltip-test' title='Tooltip'>este outro</a> mostra tooltips, quando passamos o mouse sobre eles.</p>";
				content     += "</div>";

				$("#modal_carteira").append(content);

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_modais_carteira "+sistema+" "+xhr.status);
			alert(thrownError);
		}

	});



}

function bkl_login(login,senha) {

	$.ajax({
		url: 'login_ad.php',
		type: "POST",
		data: {"login":login,"senha":senha},
		dataType: 'json',
		success: function (data) {

			var res = JSON.parse(data);

			if (res['LOGIN'] == "FALSE-LOGIN-SENHA") {

				alert("Login/Senha Inválidos.");

			} else if (res['LOGIN'] == "FALSE-PERFIL") {

        alert("Você não possui perfil para acesso.");

			} else if (res['LOGIN'] == "FALSE-SERVIDOR-OFFLINE") {

        alert("Erro de servidor. Conecte-se na rede corporativa.");

      } else  {

				window.location.href = "/index.html";

      }

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_login2  "+xhr.status);
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

				window.location.href = "/login.html";


			} else  {

				$("#login2").text(res['NOME']+" ("+res['CPF']+")");
				$("#cpf_hidden").text(res['CPF']);
				$("#id_hidden").text(res['ID']);
				$("#unidades_hidden").text(res['UNIDADES']);

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

			window.location.href = "/login.html";

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_logoff  "+xhr.status);
			alert(thrownError);
		}

	});



}

function bkl_carrega_analistas() {

	$.ajax({
		url: 'ler_analistas.php',
		type: "POST",
		dataType: 'json',
		cache: false,

		success: function (data) {

			analista = "";
			content = "";

			for (var x  = 0; x < data.length; x++) {

				analista = data[x].ANALISTA;
				analista = analista.replace(/\s/g, "");

   			 	content 	+= "<li class='list-group-item'>";
   			 	content 	+= "		<div class='custom-control custom-checkbox'>";


				if (data[x].CHECKED == "X") {

					content 	+= "			<input type='checkbox' onclick='bkl_atualiza_carteira(\"" + data[x].ANALISTA +"\");' class='custom-control-input' id='"+analista+"' checked>";

				} else {

					content 	+= "			<input type='checkbox' onclick='bkl_atualiza_carteira(\"" + data[x].ANALISTA +"\");' class='custom-control-input' id='"+analista+"'>";

				}

   			 	content 	+= "		    <label class='custom-control-label' for='"+analista+"'>"+data[x].ANALISTA+"</label>";
   			 	content 	+= "		</div>";
   			 	content 	+= "</li>";


			}

			$("#analistas").html(content);

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_analistas "+xhr.status);
			alert(thrownError);
		}

	});

}

function bkl_atualiza_carteira(analista) {

	analista_trim = analista;
	analista_trim = analista.replace(/\s/g, "");


	if ($("#"+analista_trim).is(":checked")) {

		$.ajax({
			url: 'atualiza_carteira.php',
			type: "POST",
			data: {"analista":analista,"comando":"INSERIR"},
			dataType: 'text',
			success: function (data) {

			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("blk_analistas "+a+" "+b+" "+xhr.status);
				alert(thrownError);
			}

		});

	} else{

		$.ajax({
			url: 'atualiza_carteira.php',
			type: "POST",
			data: {"analista":analista,"comando":"EXCLUIR"},
			dataType: 'text',
			success: function (data) {

			},
			error: function (xhr, ajaxOptions, thrownError) {
				alert("blk_analistas "+a+" "+b+" "+xhr.status);
				alert(thrownError);
			}

		});


	}

}

function bkl_carrega_analistas_carteira() {

	$.ajax({
		url: 'ler_analistas_carteira.php',
		type: "GET",
		dataType: 'json',
		success: function (data) {

			content 	 = "";
			
			content 	+= "  <table class='table table-bordered'>";
			content 	+= "     <thead>";
			content 	+= "       <tr>";
			content 	+= "         <th>Analista</th>";
			content 	+= "         <th>Neg. Com.</th>";
			content 	+= "         <th>Problemas</th>";
			content 	+= "         <th>Incl/Man Cad</th>";
			content 	+= "         <th>XML</th>";
			content 	+= "         <th style='background:#D3D3D3'>Total</th>";
			content 	+= "      </tr>";
			content 	+= "    </thead>";
			content 	+= "    <tbody>";

			for (var x  = 0; x < data.length; x++) {

				content 	+= "      <tr>";
				content 	+= "        <td>"+data[x].ANALISTA+"</td>";
				content 	+= "        <td>"+data[x].NC+"/"+data[x].NC_PRI+"</td>";
				content 	+= "        <td>"+data[x].PROBLEMAS+"/"+data[x].PROBLEMAS_PRI+"</td>";
				content 	+= "        <td>"+data[x].INCLUSAO+"/"+data[x].INCLUSAO_PRI+"</td>";
				content 	+= "        <td>"+data[x].XML+"/"+data[x].XML_PRI+"</td>";

				if (parseInt(bkl_getglobal('MAX_REQUESTS_GREEN')) != 0) {

					if (data[x].TOTAL <= parseInt(bkl_getglobal('MAX_REQUESTS_GREEN'))) {

						content 	+= "        <td style='background:green;color:black'>"+data[x].TOTAL+"/"+data[x].TOTAL_PRI+"</td>";

					}else if (data[x].TOTAL <= parseInt(bkl_getglobal('MAX_REQUESTS_YELLOW'))) {

						content 	+= "        <td style='background:yellow;color:black'>"+data[x].TOTAL+"/"+data[x].TOTAL_PRI+"</td>";

					} else {

						content 	+= "        <td style='background:red;color:black'>"+data[x].TOTAL+"/"+data[x].TOTAL_PRI+"</td>";

					}

				} else {

					content 	+= "        <td style='background:#D3D3D3'>"+data[x].TOTAL+"/"+data[x].TOTAL_PRI+"</td>";

				}


				content 	+= "      </tr>";

			}


			content 	+= "    </tbody>";
			content 	+= "  </table>";
//			content 	+= "</ul>";

			$("#analistas_carteira").html(content);

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_analistas "+a+" "+b+" "+xhr.status);
			alert(thrownError);
		}

	});

}

function bkl_set_global_variables() {

	$.ajax({
		url: 'set_global_variables.php',
		success: function () {

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_global_variables  "+xhr.status);
			alert(thrownError);
		}

	});



}

function bkl_getglobal(variable) {

	var resposta = "";

	$.ajax({
		url: 'get_global.php',
		type: "POST",
		data: {"variable":variable},
		async: false,
		dataType: 'json',
		success: function (data) {

			var res = JSON.parse(data);

			if (res['RESULTADO'] == "FALSE"){

				resposta =  "0";

			} else  {

				resposta =  res['RESULTADO'];

			}

		},
		error: function (xhr, ajaxOptions, thrownError) {
resposta =  "0";

//			alert("blk_getGlobal  "+xhr.status);
//			alert(thrownError);
		}


	});
	return resposta;

}

function bkl_ler_chamado_api() {

		xml_param =  "";
		xml_param += "<?xml version='1.0' encoding='utf-8'?>";
		xml_param += "<soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:aut='Automidia'>";
		xml_param += "  <soap:Header/>";
		xml_param += "  <soap:Body>";
		xml_param += "    <GetRequest xmlns='Automidia'>";
		xml_param += "      <token>CUSTOM-REDIRECT-TOKEN-93F2-FE129CF398CA</token>";
		xml_param += "      <requestId>DOR07829977<requestId>";
		xml_param += "    </GetRequest>";
		xml_param += "  </soap:Body>";
		xml_param += "</soap:Envelope>";

	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open('POST', 'https://portalconectahml.rededor.com.br/dataservices/application/Requests/service.asmx?op=GetRequest', true);

	    xmlhttp.onreadystatechange = function () {
			
	        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				alert(xmlhttp.responseText);
//				var xmlDoc = xmlhttp.responseXML;

//			    var i;
//			    var table = "";
//			    var x = xmlDoc.getElementsByTagName("add");

//				alert(category = x[0].getElementsByTagName("category")[0].childNodes[0].nodeValue);
/*						opendate = x[i].getElementsByTagName("opendate")[0].childNodes[0].nodeValue;
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

*/
				 }

		}
//		xmlhttp.setRequestHeader('Accept', '*/*');
//		xmlhttp.setRequestHeader('Content-Type', 'text/xml; charset=utf-8');
	 	xmlhttp.send(xml_param);

}

function bkl_ler_chamado_view(chamado) {
	
	content_header = "Buscando chamado...";
	content = "<center><div class='loader'></div></center>";

	$("#detalhes_chamado_body").html(content);
	$("#detalhes_chamado_header").html(content_header);

	$.ajax({
		url: 'http://10.250.3.171:8000/ler_chamado_view',
		type: "GET",
		data: {"chamado":chamado},
		dataType: 'json',
		success: function (data) {
			
			if (data.length > 0) {


				for (var x  = 0; x < data.length; x++) {
			
					content_header = "";
			
		
					content_header = "			  <div style=' width:100%'>";
					content_header += "				<div style='vertical-align: middle; width:50%;display: inline-block;'>";
					content_header += "					<h5 class='modal-title' id='exampleModalLabel'>Detalhes do Chamado</h5>";
				    content_header += "				</div>";
				    content_header += "				<div style='float:right;color:white; display: inline-block;vertical-align: middle;height: 100%; margin-top: 0.5%'>";
				    content_header += "					<div style='padding:5px;background:gray;color:white;border-radius:5px'>"+data[x].STATUS+"</div>";
				    content_header += "				</div>";	
				    content_header += "	          </div>";
		      	  	content_header += '	          <button class="close" type="button" data-dismiss="modal" aria-label="Close">';
		      	  	content_header += '	            <span aria-hidden="true">×</span>';
		      	  	content_header += '	          </button>';
			
					content     = "			      <div style='font-size:15px;' class='form-row'>";
					content     += "			    <div class='col-md-2 mb-3'>";
					content     += "			      <label>Chamado</label>";
					content     += "			    </div>";
					content     += "			    <div style='padding-top:4px;background:#D3D3D3;color:#696969;border-radius: 5px' class='col-md-10 mb-3'>";
					content     += "			      <label>"+data[x].CHAMADO+"</label>";
					content     += "			    </div>";
					content     += "			  </div>";

					content     += "			  <div style='font-size:15px;' class='form-row'>";
					content     += "			    <div class='col-md-2 mb-3'>";
					content     += "			      <label>Categoria</label>";
					content     += "			    </div>";
					content     += "			    <div style='padding-top:4px;background:#D3D3D3;border-radius: 5px' class='col-md-10 mb-3'>";
					content     += "			      <label>"+data[x].DESCRICAO_CATEGORIA+"</label>";
					content     += "			    </div>";
					content     += "			  </div>";

					content     += "			  <div style='font-size:15px;' class='form-row'>";
					content     += "			    <div class='col-md-2 mb-3'>";
					content     += "			      <label>Analista</label>";
					content     += "			    </div>";
					content     += "			    <div style='padding-top:4px;background:#D3D3D3;border-radius: 5px' class='col-md-10 mb-3'>";
					content     += "			      <label>"+data[x].ANALISTA+"</label>";
					content     += "			    </div>";
					content     += "			  </div>";

					content     += "			  <div style='font-size:15px;' class='form-row'>";
					content     += "			    <div class='col-md-2 mb-3'>";
					content     += "			      <label>Solicitante</label>";
					content     += "			    </div>";
					content     += "			    <div style='padding-top:4px;background:#D3D3D3;border-radius: 5px' class='col-md-10 mb-3'>";
					content     += "			      <label>"+data[x].CLIENT+"</label>";
					content     += "			    </div>";
					content     += "			  </div>";

					content     += "			  <div style='font-size:15px;' class='form-row'>";
					content     += "			    <div class='col-md-2 mb-3'>";
					content     += "			      <label>Previsão</label>";
					content     += "			    </div>";
			
		
					var st = data[x].PREVISAO;
					var pattern = /(\d{2})\.(\d{2})\.(\d{4})/;
					var dt = new Date(st.replace(pattern,'$3-$2-$1'));
					var today = new Date();

			
					if (dt <= today) {
			
					content     += "			    <div style='padding-top:4px;background:#D3D3D3;color:red;border-radius: 5px' class='col-md-10 mb-3'>";
					content     += "			      <label>"+dt+"</label>";
					content     += "			    </div>";

					} else {
				
					content     += "			    <div style='padding-top:4px;background:#D3D3D3;color:green; border-radius: 5px' class='col-md-10 mb-3'>";
					content     += "			      <label>"+dt+"</label>";
					content     += "			    </div>";
				
					}

					content     += "			  </div>";

					content     += "			  <div style='font-size:15px;' class='form-row'>";
					content     += "			    <div class='col-md-2 mb-3'>";
					content     += "			      <label>Prioridade</label>";
					content     += "			    </div>";
					content     += "			    <div style='padding-top:4px;background:#D3D3D3;border-radius: 5px' class='col-md-10 mb-3'>";
					
					if(data[x].PRIORIDADE=='Prioridade') {

						content     += "			      <input id='check_prioridade' type='checkbox' onclick='return false' onkeydown='return false' checked>";


					}else{
					
						content     += "			      <input id='check_prioridade' type='checkbox' onclick='return false' onkeydown='return false' data-toggle='modal' data-target='#priorizachamadoModal' data-backdrop='static' data-keyboard='false'>";
						
					}
										

					content     += "			    </div>";
					content     += "			  </div>";


				}
			
			} else {
				
				content_header = "Chamado não encontrado.";
				content = "";
				
			}
			
			

			$("#detalhes_chamado_body").html(content);
			$("#detalhes_chamado_header").html(content_header);
		
		
		

		},
		error: function (xhr, ajaxOptions, thrownError) {
			alert("blk_busca_chamado_view "+chamado+" "+xhr.status);
			alert(thrownError);
		}

	});

}

function bkl_criar_chamado_priorizacao(client,chamado,classificacao,motivo,valor) {

		$.ajax({

			url: 'http://10.250.3.171:8000/prioriza_chamado',
			type: "GET",
			data: {"client":client,"chamado":chamado,"classificacao":classificacao,"motivo":motivo,"valor":valor},
			dataType: 'json',
			success: function (data) {

		    	alert(data);
				$( "#check_prioridade" ).prop( "checked", true );
				$( "#check_prioridade" ).attr( "data-target","" );
				$("#coverScreen").hide();
				
		    }, 
			error: function (xhr, ajaxOptions, thrownError) {
				alert(xhr.status);
				alert(thrownError);

			}
		});
	
	
}

function bkl_preenche_unidades_escopo(){
	
//	alert($("#unidades_hidden").text());
	
	$.ajax({

		url: 'http://10.250.3.171:8000/preenche_unidades_escopo',
		type: "GET",
		dataType: 'json',
		success: function (data) {
			
			$('#unidade_escopo').find('option:not(:first)').remove();
			
			for (var x  = 0; x < data.length; x++) {
				
				if ($("#unidades_hidden").text() == data[x].UNIDADE){
					
					$("#unidade_escopo").append("<option selected>"+data[x].UNIDADE+"</option>");

				}else{

					$("#unidade_escopo").append("<option>"+data[x].UNIDADE+"</option>");

				}
			
			
			}
			
	    }, 
		error: function (xhr, ajaxOptions, thrownError) {
			alert(xhr.status);
			alert(thrownError);

		}
	});
	
}