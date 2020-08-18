from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Music(models.Model):
    name = models.CharField(max_length=100)
    album = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    rating = models.FloatField(default=1.0)
    favourite = models.BooleanField(default=False)
    owner = models.ForeignKey(
        User,
        related_name="images",
        on_delete=models.CASCADE,
        null=True
    )
