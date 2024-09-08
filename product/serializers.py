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
            'description',
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
            'father_category'
        ]

class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields=[
            'name',
            'category'
        ]


class Technical_CharacteristicsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Technical_Characteristics
        fields=[
            'description',
        ]

