from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(null=True, blank=True)
    is_paid = models.BooleanField(default=False)
    on_delete = models.BooleanField(default=False)

    def __str__(self):
        return self.user
    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'
