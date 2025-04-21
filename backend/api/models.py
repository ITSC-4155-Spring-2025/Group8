# from django.contrib.auth.models import AbstractUser
# from django.contrib.auth.models import User
# from django.db import models


# class User(models.Model):
#     user_name = models.CharField(max_length=255, unique=True)
#     email = models.CharField(max_length=255, unique=True)
#     pass_field = models.CharField(
#         max_length=255, unique=True)  # avoid using "pass"
#     created_time = models.DateTimeField(auto_now_add=True)
#     points = models.IntegerField(default=0)

#     def __str__(self):
#         return self.username

from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user   = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)

    def __str__(self):
        return f"{self.user.username} profile"
