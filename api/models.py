from django.db import models

# Create your models here.

class Store(models.Model):
    id_store = models.CharField(max_length=50, unique=True, primary_key=True)
    name = models.CharField(max_length=50)
    user = models.CharField(max_length=50)
    synced = models.BooleanField(default=False)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    