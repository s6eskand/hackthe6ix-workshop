# Generated by Django 3.0.2 on 2020-08-19 01:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('music', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='music',
            name='image',
            field=models.TextField(default=None, max_length=10000),
        ),
    ]
