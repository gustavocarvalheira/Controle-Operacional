from django.shortcuts import render,redirect
from django.http import HttpResponse
from api.models import Chamado
from django.db import connection
from django.http import JsonResponse
from django.core import serializers
import json
from django.core.serializers.json import DjangoJSONEncoder
from django.views.decorators.csrf import csrf_exempt
from math import sqrt
import pandas as pd
import numpy as np
from sklearn import datasets
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score




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
        #result.append(dict(zip(columns,row)))
        result.append(dict(zip(columns,row)))
    json_data = json.dumps(result)
    return HttpResponse(json_data, content_type="application/json")  
    

def ler_minutos(request):

    sistema = request.GET['sistema']
    analista = request.GET['analista']

    sql = """
        
        SELECT 
        C.SISTEMA,

        COUNT(CHAMADO) TOTAL,
        (SELECT COUNT(CHAMADO)
        FROM SYS.BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO < NOW()
        AND """;

    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
    
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) BACKLOG,


        (SELECT COUNT(CHAMADO)
        FROM SYS.BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:15' HOUR_MINUTE)
        AND	"""

    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) A,

        (SELECT COUNT(CHAMADO)
        FROM SYS.BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:30' HOUR_MINUTE)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """

    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) B,

        (SELECT COUNT(CHAMADO)
        FROM SYS.BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:60' HOUR_MINUTE)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) C,   

        (SELECT COUNT(CHAMADO)
        FROM SYS.BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-00:90' HOUR_MINUTE)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) D,

        (SELECT COUNT(CHAMADO)
        FROM SYS.BKL_CHAMADOS2 D
        WHERE D.DATA_PREVISAO BETWEEN NOW() AND DATE_SUB(NOW(),INTERVAL '-1' DAY)
        AND """
        
    if analista != "ALL":
         sql = sql + """ D.ANALISTA = '""" + analista + """' """
    else:
        sql = sql + """ 1=1 """
        
    sql = sql + """    AND 
        D.SISTEMA = C.SISTEMA) E

    FROM 
                SYS.BKL_CHAMADOS2 C

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


def ler_chamados(request):
    sistema = request.GET['sistema']
    intervalo = request.GET['intervalo']

    sql = """
        
        SELECT *

            FROM 
                        SYS.BKL_CHAMADOS2 C
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
#   return HttpResponse(sql)
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
                                    SYS.BKL_CHAMADOS2 C
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
                                    SYS.BKL_CHAMADOS2 C
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
                                    SYS.BKL_CHAMADOS2 C
                        WHERE
                                    C.SISTEMA = B.SISTEMA
                                    AND
                                    C.STATUS LIKE '%Reabertura%') REABERTURA

        FROM
                    SYS.BKL_CHAMADOS2 B """


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
#   return HttpResponse(sql)
    return HttpResponse(json_data, content_type="application/json")  

#################################################################

def naivebayes(self):

    iris = datasets.load_iris() # importing the dataset
    X=iris.data #assign the data to the X
    y=iris.target #assign the target/flower type to the y
    X_train,X_test,y_train,y_test=train_test_split(X,y,test_size=0.2,random_state=9) #Split the dataset
    nv = GaussianNB() # create a classifier
    nv.fit(X_train,y_train) # fitting the data
    y_pred = nv.predict('[7.7 3. 6.1 2.3]') # store the prediction data
#    y_pred = nv.predict("[[5.1], [3.5], [1.4], [0.2]])

#    accuracy_score(y_test,y_pred) # calculate the accuracy
    
    return HttpResponse(y_pred)