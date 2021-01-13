from django.shortcuts import render,redirect
from django.http import HttpResponse
from api.models import Chamado
from django.db import connections
from django.db import connection
from django.http import JsonResponse
from django.core import serializers
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_exempt
from math import sqrt
import pandas as pd
import numpy as np
import math

from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score
from sklearn import preprocessing
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import LabelBinarizer
from sklearn.naive_bayes import CategoricalNB
from sklearn.preprocessing import LabelEncoder

def show(request):
    chamados = Chamado.objects.all()
    return render(request,"show.html",{'chamado':chamados})
    
def ler_unidades(self):
        
    cursor = connection.cursor()
    cursor.execute('''SELECT UNID_ABREV FROM BKL_UNIDADES_SISTEMA WHERE SISTEMA IN ('TASY','WPD','MV');''')
    rows = cursor.fetchall()

    result = []
    columns = ('UNID_ABREV',)
    for row in rows:
        result.append(dict(zip(columns,row)))
    json_data = json.dumps(result)
	
    return HttpResponse(json_data, content_type="application/json; charset=utf-8")  

def ler_minutos(request):

    sistema = request.GET['sistema']
    analista = request.GET['analista']

    sql = """
        
        SELECT 
        C.SISTEMA,

        COUNT(CHAMADO) TOTAL,
        (SELECT COUNT(CHAMADO)
        FROM BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO < NOW()
        AND """;

    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
    
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) BACKLOG,


        (SELECT COUNT(CHAMADO)
        FROM BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:15' HOUR_MINUTE)
        AND	"""

    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) A,

        (SELECT COUNT(CHAMADO)
        FROM BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:30' HOUR_MINUTE)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """

    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) B,

        (SELECT COUNT(CHAMADO)
        FROM BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:60' HOUR_MINUTE)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) C,   

        (SELECT COUNT(CHAMADO)
        FROM BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:90' HOUR_MINUTE)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) D,

        (SELECT COUNT(CHAMADO)
        FROM BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-1' DAY)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) E

    FROM 
                BKL_CHAMADOS2 C

    WHERE  """
                    
    if sistema != "ALL":
        sql = sql + """C.SISTEMA = '""" + sistema + """' """
    else:
        sql = sql + """ 1=1 """

    sql = sql + """ AND """

    if analista != "ALL":
        sql = sql + """ C.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """

    sql = sql + """ GROUP BY C.SISTEMA """
    

    cursor = connection.cursor()
    cursor.execute(sql)
    rows = cursor.fetchall()

    result = []
    columns = ('SISTEMA','TOTAL','BACKLOG','A','B','C','D','E')
    for row in rows:
        result.append(dict(zip(columns,row)))   
    json_data = json.dumps(result)
    return HttpResponse(json_data, content_type="application/json")  
    #return HttpResponse(sql)
    
def ler_chamados(request):
    
    sistema = request.GET['sistema']
    intervalo = request.GET['intervalo']

    sql = """
        
        SELECT *

            FROM 
                        BKL_CHAMADOS2 C
            WHERE 
                   """

    if intervalo == "F":
        sql = sql + """ C.DATA_PREVISAO < NOW() """

    if intervalo == "A":
        sql = sql +	""" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:15' HOUR_MINUTE) """

    if intervalo=="B":
        sql = sql +	""" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:30' HOUR_MINUTE) """

    if intervalo=="C":
        sql = sql +	""" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:60' HOUR_MINUTE) """

    if intervalo=="D":
        sql = sql +	""" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-01:30' HOUR_MINUTE) """

    if intervalo=="E":
        sql = sql +	""" C.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-1' DAY) """
    
    sql = sql +	""" AND C.SISTEMA = '""" + sistema + """' ORDER BY CATEGORIA, DATA_PREVISAO ASC"""	

    cursor = connection.cursor()
    cursor.execute(sql)
    rows = cursor.fetchall()

    result = []
    columns = ('DATA_LEITURA','CHAMADO','UNIDADE','DATA_ABERTURA','DATA_PREVISAO','PRIORIDADE','CATEGORIA','ANALISTA','CLIENTE','STATUS','SISTEMA','CHAMADO_PRIORIZACAO','PONTUACAO','CLASSIFICACAO','VALOR_ASSOCIADO','MOTIVO_PRIORIZACAO','DT_PRI','PRI_OK','USUARIO_PRI_OK')
    for row in rows:
        result.append(dict(zip(columns,row)))
    json_data = json.dumps(result,default=str)
    return HttpResponse(json_data, content_type="application/json")  

def ler_prioridades(request):

    if request.GET['sistema'] == "none":
      str_sistema = ""
    else:
      str_sistema = request.GET['sistema']

    sql = """

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
                                    C.STATUS LIKE '%Reaberto%') REABERTURA

        FROM
                    BKL_CHAMADOS2 B """


    if str_sistema != "":
        sql = sql + """ WHERE B.SISTEMA = '""" + str_sistema + """' """

    sql = sql + """ GROUP BY B.SISTEMA """

    cursor = connection.cursor()
    cursor.execute(sql)
    rows = cursor.fetchall()

    result = []
    columns = ('SISTEMA','TOTAL','PRIOR_PEND','PRIOR_N_PEND','REABERTURA')
    for row in rows:
        result.append(dict(zip(columns,row)))
    json_data = json.dumps(result,default=str)
    return HttpResponse(json_data, content_type="application/json")  

def ler_chamado_view(request):

    str_chamado = request.GET['chamado']
    sql = """

    SELECT 
			CHAMADO,
			DESCRICAO_CATEGORIA,
			ANALISTA,
			CLIENT,
            STATUS,
            PRIORIDADE,
            PREVISAO
	 FROM 
	 		ADMAHD.RDOR_VW_REGCAD_BCKLOG
			
	 WHERE 
            CHAMADO = '""" + str_chamado + """'"""
    
    with connections['base_oracle'].cursor() as cursor:
        #cursor = connection.cursor()
        cursor.execute(sql)
        rows = cursor.fetchall()

    result = []
    columns = ('CHAMADO','DESCRICAO_CATEGORIA','ANALISTA','CLIENT','STATUS','PRIORIDADE','PREVISAO')

    for row in rows:
        result.append(dict(zip(columns,row)))
    json_data = json.dumps(result,default=str)
    return HttpResponse(json_data, content_type="application/json")  
    
def prioriza_chamado(request):

    import string, os, sys
    import requests
    from xml.etree import ElementTree

    #client = request.GET['client']
    client = '001'
    #chamado = request.GET['chamado']
    chamado = ''
    #classificacao = "CONTA PARTICULAR"
    classificacao = request.GET['classificacao']
    #motivo = "teste"
    motivo = request.GET['motivo']
    #valor = '2222'
    valor = request.GET['valor']
 
    server_addr = "...service.asmx?op=OpenBasic"

    xml_param =  """<?xml version="1.0" encoding="utf-8"?>
      <soap:Envelope xmlns:soap='http://www.w3.org/2003/05/soap-envelope' xmlns:aut='Automidia'>
	      <soap:Header/>
	      <soap:Body>
              <aut:OpenBasic xmlns='Automidia'>
              <aut:token>CUSTOM-REDIRECT-TOKEN-93F2-MASKED</aut:token>
	          <useKeyWords>0</useKeyWords>
	          <data>
                  <values>
                      <add name="REQUEST.CLIENT">"""+client+"""</add>
                      <add name="REQUEST.REQTYPE">0</add>
                      <add name="REQUEST.GROUPANAL">0</add>
	                  <add name="REQUEST.CATEGORY">Cadastro e Regras Comerc</add>
                      <add name="REQUEST.PRODUCT">Priorizacao de Chamados</add>
	                  <add name="QUESTION.CRC_PopulaChamadosAbertos">"""+chamado+"""</add>
                      <add name="QUESTION.CRC_SelecioneChamado">"""+chamado+"""</add>
                      <add name="QUESTION.CRC_Classifica_Prioridade">"""+classificacao+"""</add>
                      <add name="QUESTION.CRC_MotivoPriorizacao">"""+motivo+"""</add>
	                  <add name="QUESTION.CRC_Valor_Associado">"""+valor+"""</add>
                  </values>
	          </data>
              </aut:OpenBasic>
          </soap:Body>
      </soap:Envelope>
      
      """
      
    try:

        url=server_addr
        headers = {"content-type" : "application/soap+xml;","Content-Length":"542","soapaction":"Automidia/OpenBasic"}
        body = xml_param
        response = requests.post(url,data=body,headers=headers)
        

        from bs4 import BeautifulSoup
 
        xml = response.content
 
        soup = BeautifulSoup(xml, 'xml')
        
        success = soup.find('success').text
        success = str(success)

        if success == 'true':
            request = soup.find('request').text
            request = str(request)
            result = """{'request':'"""+request+"""','success':'"""+success+"""'}"""
        else:
            result = """{'success':'false'}"""
            #result = xml
        json_data = json.dumps(result,default=str)
        return HttpResponse(json_data, content_type="application/json")  
        #return HttpResponse(result)

    except Exception as e:
        #return HttpResponse(e)
        return HttpResponse("Erro")  
        
def percentual_prioridades(request):
        
    str_unidades = request.GET['str_unidades']

    if str_unidades: 

        str_unidades = str_unidades.replace("'", "''")
    
        with connections['base_oracle_total'].cursor() as cursor:
            cursor.execute("""
            SELECT ROUND(((SELECT 
                COUNT(*)
            FROM 
                ADMAHD.RDOR_VW_COMCAD_MAIN
            WHERE 
                UNIDADE IN ('""" + str_unidades + """')
            AND 
                DATA_ABERTURA > TRUNC(SYSDATE) - interval '1' month
            AND
                PRIORIDADE = 'Prioridade')/(SELECT 
                COUNT(*)
            FROM 
                RDOR_VW_COMCAD_MAIN
            WHERE 
                UNIDADE IN ('""" + str_unidades + """')
            AND 
                DATA_ABERTURA > TRUNC(SYSDATE) - interval '1' month)),2)*100 "%PRIORIDADE"
            FROM
            DUAL
                
            """)

            rows = cursor.fetchall()

        result = []
        columns = ('PRIORIDADE',)
        for row in rows:
            result.append(dict(zip(columns,row,)))
    
        json_data = json.dumps(result)
	
    elif not str_unidades:
        
        json_data = "{'PRIORIDADE':'0'}"
        json_data = json.dumps(json_data)

    return HttpResponse(json_data, content_type="application/json; charset=utf-8")

def atualiza_unidade_escopo(request):
    
    usuario = request.GET['usuario']
    unidade = request.GET['unidade']

    unidade = unidade.replace("'", "''")

    sql = """
        
        SELECT 
            *
        FROM 
            bkl_usuarios_unidades
        WHERE 
            cod_usuario = '""" + usuario + """'"""

 
    cursor = connection.cursor()
    cursor.execute(sql)
    rows = cursor.fetchall()
    
    resultado = sql
    
    teste = ""

    if len(rows)>0:
        
        sql = """
        
            UPDATE
                bkl_usuarios_unidades
            SET
                unidade = '""" + unidade + """'
            WHERE 
                cod_usuario = '""" + usuario + """'"""
                
        teste = "UPDATE"
                        
    else:
        
        sql = """
        
            INSERT INTO
                bkl_usuarios_unidades
                (cod_usuario,unidade)
            VALUES
                ('"""+usuario+"""','"""+unidade+"""')"""
        
        teste = "INSERT"
        
    cursor = connection.cursor()
    cursor.execute(sql)
    
    resultado = resultado + sql

    json_data = json.dumps("{'resultado':'"+teste+"'}")
    return HttpResponse(json_data, content_type="application/json; charset=utf-8")
    #return HttpResponse(resultado)
    
def preenche_unidades_escopo(self):
    
    sql = """
        
        SELECT 
            *
        FROM 
            bkl_unidades"""

    cursor = connection.cursor()
    cursor.execute(sql)
    rows = cursor.fetchall()
    
    result = []
    columns = ('UNIDADE',)
    for row in rows:
        result.append(dict(zip(columns,row,)))
    
    json_data = json.dumps(result)
	
    return HttpResponse(json_data, content_type="application/json; charset=utf-8")
 
def naivebayes(self):

    df = pd.read_csv("Dataset_problemas_v11_500.csv", sep=";")
    df_teste = pd.read_csv("Dataset_problemas_v11_500_Teste.csv", sep=";")


    df['IS_TRAIN'] = True
    
    rows,cols = df.shape
    
    for i in range(rows):
        if i<math.floor(rows*0.30):
            df['IS_TRAIN'][i]=False
            
    train = df[df['IS_TRAIN']==True]
    test = df[df['IS_TRAIN']==False]
    
    trainTargets = np.array(train['PRAZO']).astype(str)
    testTargets = np.array(test['PRAZO']).astype(str)
    
    features = df.columns[0:5]
    
    gnb = CategoricalNB()
    #gnb = GaussianNB()
    y_gnb = gnb.fit(train[features],trainTargets).predict(test[features])
    
    #return HttpResponse(np.array(test['PRAZO']).astype(str))
    #acuracia = accuracy_score(testTargets, y_gnb)

    return HttpResponse(accuracy_score(testTargets, y_gnb))
    #return HttpResponse(str(acuracia))
    #return HttpResponse(gnb.predict([[0,0,1,1]])+"("+str(acuracia)+")")
    #return HttpResponse(gnb.predict([[1,1,1,0,1]]))
    #return HttpResponse(gnb.predict(df_teste))
    
    