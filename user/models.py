from django.contrib.auth.models import AbstractUser
from django.db import models

class myUser(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    active = models.BooleanField(default=True)
    deleted = models.BooleanField(default=False)
    def __str__(self):
        return f'{self.username} / {self.email}'
