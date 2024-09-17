from django.db import models
from django.contrib.auth.models import User
from product.models import Product


# Create your models here.
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateTimeField(null=True, blank=True)
    total_price = models.DecimalField(max_digits=10, decimal_places=2,default=0)
    is_paid = models.BooleanField(default=False)
    on_delete = models.BooleanField(default=False)

    def __str__(self):
        return self.user
    class Meta:
        verbose_name = 'Order'
        verbose_name_plural = 'Orders'


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    product_count = models.IntegerField(default=1)
    total_price = models.DecimalField(max_digits=10, decimal_places=2,default=0)

    def __str__(self):
        return f'{self.product.name} - {self.product_count} - {self.total_price}'

    class Meta:
        verbose_name = 'Order item'
        verbose_name_plural = 'Order items'