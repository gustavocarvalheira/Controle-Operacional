# Generated by Django 3.0.8 on 2020-07-04 01:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Chamado',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('chamado', models.CharField(max_length=100)),
                ('categoria', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'bkl_chamados2',
            },
        ),
    ]
