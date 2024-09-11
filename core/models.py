from django.db import models


# Create your models here.
class Picture_Slider(models.Model):
    picture = models.ImageField(upload_to='slider')
    active = models.BooleanField(default=True)

# class Picture_product(models.Model):
#     picture = models.ImageField(upload_to='product')
#     active = models.BooleanField(default=True)
#     deleted = models.BooleanField(default=False)
