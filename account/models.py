from django.db import models
from django.contrib.auth.models import AbstractUser


# Create your models here.
class Human(models.Model):
    name = models.CharField(max_length=50)
    family = models.CharField(max_length=50)
    age = models.IntegerField(null=True, blank=True)
    zipcode = models.CharField(max_length=10)
    phone = models.CharField(max_length=12)
    city = models.ForeignKey('City', on_delete=models.SET_NULL, null=True, blank=True)
    picture = models.ImageField(upload_to=f"images/")
    update_at = models.DateTimeField(auto_now=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return (f"name:{self.name} - family:{self.family} - age:{self.age} - zipcode:{self.zipcode}"
                f"phone:{self.phone},deleted:{self.deleted}"
                f" update_at:{self.update_at.strftime('%Y-%m-%d %H:%M:%S')},created_at:{self.created_at.strftime(
                    '%Y-%m-%d%H:%M:%S')}")

    class Meta:
        ordering = ['-created_at']
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
        verbose_name_plural = "cities"
