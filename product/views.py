from django.shortcuts import render, get_object_or_404
from product.models import Product, Brand, Category, Technical_Characteristics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from product.serializers import ProductSerializer, Technical_CharacteristicsSerializer


# Create your views here.
def index(request):
    return render(request, "home_page.html")


@api_view(['GET'])
def product_list_view(request):
    if request.method == 'GET':
        products = Product.objects.filter(active=True)
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


def category_list_view(request, category_id):
    pass

def detail_product_view(request,pk):
    return render(request,'product_detaile.html',{"pk":pk})
@api_view(['GET'])
def product_detail_view(request, product_id):
    print('hamid')
    product = get_object_or_404(Product, pk=product_id)
    category = product.category.name
    print(product.category.get_descendants(include_self=True))
    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response({'product_data': serializer.data,'category': category,})
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def technical_characteristics_list_view(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    print(product.technical_id)
    if request.method=='GET':

        technical_characteristics = Technical_Characteristics.objects.get(pk=product.technical_id)
        print(technical_characteristics)
        serializer = Technical_CharacteristicsSerializer(technical_characteristics)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)
