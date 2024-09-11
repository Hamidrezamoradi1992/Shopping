from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from core.models import Picture_Slider
from core.serializer import PictureSliderSerializer


# Create your views here.

@api_view(['GET'])
def slider_view(request):
    if request.method == 'GET':
        picture = Picture_Slider.objects.filter(active=True)
        serializer = PictureSliderSerializer(picture, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)
