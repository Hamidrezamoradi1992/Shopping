from django.db import models
from django.contrib.auth.models import AbstractUser, User


# Create your models here.
class Human(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50,default="",null=True,blank=True)
    family = models.CharField(max_length=50,null=True,blank=True)
    age = models.DateTimeField(null=True,blank=True)
    zipcode = models.CharField(max_length=10, null=True, blank=True)
    phone = models.CharField(max_length=12,null=True,blank=True,default='not entered')
    city = models.ForeignKey('City', on_delete=models.SET_NULL,null=True,blank=True)
    picture = models.ImageField(upload_to=f"images/", default='products/LOQ_15IRX9.webp')
    update_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return (f"name:{self.name} - family:{self.family} - age:{self.age}"
                f" - zipcode:{self.zipcode}")

    class Meta:
        verbose_name = "person"
        verbose_name_plural = "people"


class Country(models.Model):
    name = models.CharField(max_length=50)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return f"name:{self.name} - deleted:{self.deleted}"

    class Meta:
        ordering = ['name']
        verbose_name = "country"
        verbose_name_plural = "countries"


class City(models.Model):
    name = models.CharField(max_length=50)
    country = models.ForeignKey(Country, on_delete=models.CASCADE, related_query_name='city')
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return f"name:{self.name} - deleted:{self.deleted}"

    class Meta:
        ordering = ['name']
        verbose_name = "city"
        verbose_name_plural = "city"
