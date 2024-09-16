from django.contrib import admin
from .models import Order


# Register your models here.
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    model = Order
    list_display = ('id', 'user', 'is_paid', 'on_delete')
    search_fields = 'user'
    list_filter = ('is_paid','on_delete')
