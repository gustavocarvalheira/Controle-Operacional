"""novobacklog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api import views

urlpatterns = [
    path('admin/', admin.site.urls),
#    path('show',views.show),
    path('ler_unidades',views.ler_unidades),
    path('ler_minutos',views.ler_minutos),
    path('ler_chamados',views.ler_chamados),
    path('ler_prioridades',views.ler_prioridades),
    path('ler_chamado_view',views.ler_chamado_view),
    path('prioriza_chamado',views.prioriza_chamado),
    path('percentual_prioridades',views.percentual_prioridades),
    path('atualiza_unidade_escopo',views.atualiza_unidade_escopo),
    path('preenche_unidades_escopo',views.preenche_unidades_escopo),
    path('naivebayes',views.naivebayes),

#    path('naivebayes',views.naivebayes),
]