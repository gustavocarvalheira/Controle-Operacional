# Generated by Django 3.0.8 on 2020-07-04 02:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_auto_20200703_2255'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chamado',
            old_name='codigo',
            new_name='chamado',
        ),
    ]