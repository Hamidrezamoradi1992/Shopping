from django.shortcuts import render
from product.models import Product, Brand, Category, Technical_Characteristics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from product.serializers import ProductSerializer


# Create your views here.
def index(request):
    return render(request, "home_page.html")


@api_view(['GET'])
def product_list(request):
    if request.method == 'GET':
        products = Product.objects.filter(active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)
