from django.contrib.auth.models import User
from django.db import models

class Profile(models.Model):
    user   = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)

    def str(self):
        return f"{self.user.username} profile"