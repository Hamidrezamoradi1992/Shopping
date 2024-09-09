from rest_framework import serializers

from product.models import Product, Category, Brand, Technical_Characteristics


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            'id',
            'name',
            'price',
            'stock',
            'short_description',
            'picture',
            'category',
            'brands',
            'technical',
            'active',
        ]


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields=[
            'name',
        ]

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields=[
            'name',
        ]


class Technical_CharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technical_Characteristics
        fields=[
            'description',
        ]

