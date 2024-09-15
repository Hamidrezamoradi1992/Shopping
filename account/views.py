from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt


# Create your views here.

def setPageSingInSingUp(request):
    return render(request, 'login.html')


@csrf_exempt
@api_view(['POST'])
def createUser(request):
    if request.method == 'POST':
        try:
            password = request.POST.get("password", None)
            assert password, "Password is required"

            confirm = request.POST.get("confirm_password", None)
            assert confirm, "Confirm password are required"

            assert len(password) > 8 and password.isalnum(), "Password must be at least 8 characters long."
            assert password == confirm, "Passwords do not match."

            username = request.POST.get("username", None)
            assert username, "Username is required"

            email = request.POST.get("email", None)
            assert email, "Email is required"
            assert User.objects.filter(email=email).exists(), "Email address is already in use."

            User.objects.create_user(username=username, password=password, email=email)

            return Response("User has been created successfully !", status=201)

        except AssertionError as e:
            return Response({'error_massage': e}, status=status.HTTP_406_NOT_ACCEPTABLE)

        except Exception as e:
            print(e)
            return Response({'error_massage': "Uncaught error ..."}, status=status.HTTP_406_NOT_ACCEPTABLE)
    return Response({"massage": 'bad request'}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def loginUser(request):
    if request.method == 'POST':
        username = request.POST.get("username", None)
        password = request.POST.get("password", None)
        if user := authenticate(username=username, password=password) and username and password:
            login(request, user)
            return redirect('index')
        return Response({'message': 'username or password id not fond'}, status=status.HTTP_406_NOT_ACCEPTABLE)
    return Response({"massage": 'bad request'}, status=status.HTTP_400_BAD_REQUEST)


def logoutUser(request):
    logout(request)
    return redirect('index')
