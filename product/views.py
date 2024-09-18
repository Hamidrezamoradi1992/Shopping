from datetime import datetime

from django.shortcuts import render, get_object_or_404, redirect
from bags.models import Order, OrderItem
from product.models import Product, Brand, Category, Technical_Characteristics
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from product.serializers import ProductSerializer, Technical_CharacteristicsSerializer
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


# Create your views here.
def index(request):
    return render(request, "home_page.html")


@api_view(['GET'])
def product_list_view(request):
    if request.method == 'GET':
        products = Product.objects.filter(active=True).order_by('category')
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


def category_list_view(request, category_id):
    category = get_object_or_404(Category, pk=category_id)
    if request.method == 'GET':
        product_category = Category.objects.filter(mapping_category__startswith=category.mapping_category).values_list(
            'id', flat=True)
        product = Product.objects.filter(active=True, category__in=product_category)
        return render(request, 'category.html', {
            'category': category, 'all_product_category': product})


def detail_product_view(request, pk):
    return render(request, 'product_detaile.html', {"pk": pk})


@api_view(['GET'])
def product_detail_view(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    category = product.category.name
    brand = product.brands.name
    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response({'product_data': serializer.data, 'category': category, 'brand': brand})
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def technical_characteristics_list_view(request, product_id):
    product = get_object_or_404(Product, pk=product_id)
    print(product.technical_id)
    if request.method == 'GET':
        technical_characteristics = Technical_Characteristics.objects.get(pk=product.technical_id)
        print(technical_characteristics)
        serializer = Technical_CharacteristicsSerializer(technical_characteristics)
        print(serializer.data)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def category_approachـproduct_list_view(request, category_id, product_id):
    category = get_object_or_404(Category, pk=category_id)
    if request.method == 'GET':
        product = Product.objects.filter(category_id=category_id).exclude(pk=product_id)[0:5:1]
        serializer = ProductSerializer(product, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def addBagsview(request):
    print(request.data)
    if request.method == 'POST':
        if request.user.is_authenticated:
            product_id = request.POST.get('product_id')
            count = request.POST.get('count')
            order_new_created, create = Order.objects.get_or_create(user_id=request.user.id, is_paid=False,
                                                                    on_delete=False)
            content_order = order_new_created.orderitem_set.filter(product_id=product_id).first()
            if content_order == None:
                print(content_order)
                OrderItem.objects.create(order_id=order_new_created.id, product_id=product_id, product_count=int(count))
                return HttpResponse(status=status.HTTP_201_CREATED)
            else:
                content_order.product_count += int(count)
                content_order.save()
            return HttpResponse(status=status.HTTP_409_CONFLICT)
        return HttpResponse(status=status.HTTP_406_NOT_ACCEPTABLE)
    return HttpResponse(status=status.HTTP_405_METHOD_NOT_ALLOWED)


@csrf_exempt
@api_view(['GET'])
def cardShopingWithAllOrderItems(request):
    if request.method == 'GET':
        try:
            order_new_created = Order.objects.get(user_id=request.user.id, is_paid=False, on_delete=False)
            product = order_new_created.orderitem_set.all()
            data_json = [dict(product_name=products.product.name, product_price=products.product.price,
                              count=products.product_count, total=products.product.price * products.product_count,
                              imge=products.product.picture.url) for
                         products in product]
            print(data_json)
            return JsonResponse(data_json, safe=False, status=status.HTTP_200_OK)
        except Order.DoesNotExist:
            return HttpResponse('Your shopping cart is empty', status=status.HTTP_406_NOT_ACCEPTABLE)
    return HttpResponse(status=status.HTTP_405_METHOD_NOT_ALLOWED)


def cardShopingWithAllOrderItemsView(request):
    return render(request, 'shopingWithProduct.html')


def cardShopingPaidView(request):
    order_new_created = Order.objects.get(user_id=request.user.id, is_paid=False, on_delete=False)
    product = order_new_created.orderitem_set.all()
    if order_new_created is not None:
        total_price_orders = 0
        for products in product:
            id_product=products.product_id
            order_item = OrderItem.objects.get(order_id=order_new_created.id,product_id=id_product)
            total_price = products.product.price * products.product_count
            order_item.total_price += total_price
            total_price_orders += total_price
            order_item.save()
        print(total_price_orders)
        order_new_created.is_paid = True
        order_new_created.date = datetime.now()
        order_new_created.total_price = total_price_orders
        order_new_created.save()
        return redirect('index')
    return HttpResponse(status=status.HTTP_404_NOT_FOUND)
