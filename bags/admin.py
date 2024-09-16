from django.contrib import admin
from .models import Order, OrderItem


# Register your models here.
@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    model = Order
    list_display = ('id', 'user', 'is_paid', 'on_delete')
    search_fields = 'user'
    list_filter = ('is_paid', 'on_delete')


@admin.register(OrderItem)
class OrderItemInLine(admin.TabularInline):
    model = OrderItem
    extra = 1
    max_num = 1
    min_num = 1
