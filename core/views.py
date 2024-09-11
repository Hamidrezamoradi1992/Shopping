from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import Picture_Slider


# Create your views here.

@api_view(['GET'])
def slider_view(request):
    if request.method == 'GET':
        picture = Picture_Slider.objects.filter(active=True)
        return Response(picture)
