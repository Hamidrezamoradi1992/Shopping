from django.shortcuts import render
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework.serializers import Serializer
# Create your views here.

def SetPageSingInSingUp(request):
    return render(request, 'login.html')