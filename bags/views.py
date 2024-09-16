from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view

from bags.models import Order


# Create your views here.

@api_view(['POST'])
def addBagsview(request):
    print(request.data)
    if request.method == 'POST':
        if request.user.is_authenticated:
            order_new_created, create = Order.objects.get_or_create(user=request.user.id, is_paid=False,
                                                                    on_delete=False)
            product_id = request.POST.get('product_id')

    return HttpResponse(status=status.HTTP_405_METHOD_NOT_ALLOWED)
