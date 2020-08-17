# Generated by Django 3.0.2 on 2020-08-17 03:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Music',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('album', models.CharField(max_length=100)),
                ('artist', models.CharField(max_length=100)),
                ('rating', models.FloatField(default=1.0)),
                ('favourite', models.BooleanField(default=False)),
            ],
        ),
    ]