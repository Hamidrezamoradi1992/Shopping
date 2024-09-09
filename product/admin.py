from django.contrib import admin
from product.models import Product, Category, Brand, Technical_Characteristics


# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    model = Product
    list_display = ('name', 'price', 'category', 'brands', 'active', 'stock')
    list_filter = ('category', 'brands', 'price', 'active', 'stock')


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    model = Category
    list_display = ['name']
    list_filter = ['name']


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    model = Brand
    list_display = ['name']
    list_filter = ('name', 'deleted')


@admin.register(Technical_Characteristics)
class Technical_CharacteristicsAdmin(admin.ModelAdmin):
    model = Technical_Characteristics
    list_filter = ['active']
    list_display = ['active']
