from django.db import models
from django.db import connections

# Create your models here.

class Chamado(models.Model):
    chamado = models.CharField(max_length=100)
    categoria = models.CharField(max_length=200)
    class Meta:
        db_table = "bkl_chamados2"