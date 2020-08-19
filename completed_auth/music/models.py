from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Music(models.Model):
    name = models.CharField(max_length=100)
    image = models.TextField(
        max_length=10000,
        default="https://yt3.ggpht.com/iMT9MVrt6qxAfTxeKUX17ESdppsDntW2eA9YvnONcPqxlbdt9SkVhaIRsAtE0PFqRiLA-arexQ=s900-c-k-c0xffffffff-no-rj-mo",
        null=True
    )
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
