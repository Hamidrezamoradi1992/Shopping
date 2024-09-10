from django.db import models

# Create your models here.
class Picture_Slider(models.Model):
    picture = models.ImageField(upload_to='slider')
    active = models.BooleanField(default=True)