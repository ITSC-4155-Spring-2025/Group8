# Evan Stark - April 1st 2025 - ITCS 4155 002
# Creating the users model.
# Models documentation: https://docs.djangoproject.com/en/5.1/topics/db/models/
# Model field documentation: https://docs.djangoproject.com/en/5.1/ref/models/fields/

from django.db import models

# Create your models here.
class User(models.Model):
    id = models.BigAutoField(primary_key=True)
    username = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255, unique=True)
    time_created = models.DateTimeField(auto_now_add=True)      # Timestamp created only when first created.