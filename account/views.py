from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse
from .serializer import userSerializer, AccountUserSerializer, CitySerializer

from account.models import Human, City


# Create your views here.

def setPageSingInSingUp(request):
    return render(request, 'login.html')


@csrf_exempt
@api_view(['POST'])
def createUser(request):
    print(request.data)
    if request.method == 'POST':
        try:
            password = request.POST["password"]
            print(password)
            assert password, "Password is required"

            confirm = request.POST.get("confirm_password", None)
            print(confirm)
            assert confirm, "Confirm password are required"

            assert len(password) > 8 and password.isalnum(), "Password must be at least 8 characters long."
            assert password == confirm, "Passwords do not match."

            username = request.POST.get("username", None)
            assert username, "Username is required"

            email = request.POST.get("email", None)
            assert email, "Email is required"
            assert not User.objects.filter(email=email).exists(), "Email address is already in use."

            User.objects.create_user(username=username, password=password, email=email)

            return HttpResponse("User has been created successfully !", status=201)

        except AssertionError as e:
            print(e)
            return HttpResponse({e}, status=status.HTTP_406_NOT_ACCEPTABLE)

        except Exception as e:
            print(e)
            return HttpResponse("Uncaught error ...", status=status.HTTP_406_NOT_ACCEPTABLE)
    return HttpResponse({"massage": 'bad request'}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def loginUser(request):
    if request.method == 'POST':
        username = request.POST.get("username", None)
        password = request.POST.get("password", None)
        if user := authenticate(request, username=username, password=password):
            login(request, user)
            return HttpResponse("welcome", status=201)
        return HttpResponse({'username or password id not fond'}, status=status.HTTP_406_NOT_ACCEPTABLE)
    return HttpResponse({'bad request'}, status=status.HTTP_400_BAD_REQUEST)


def logoutUser(request):
    logout(request)
    return redirect('/')


def accountView(request):
    return render(request, 'profileUser.html')


@api_view(['GET'])
def accountUser(request):
    if request.method == 'GET':
        user_profile, flag_user = Human.objects.get_or_create(user_id=request.user.id)
        print(flag_user)
        if flag_user:
            try:
                user = User.objects.get(id=request.user.id)
                Userdata = AccountUserSerializer(user)
                serializer = userSerializer(user_profile)
                return Response({"account": serializer.data, 'user': Userdata.data}, status=status.HTTP_200_OK)
            except AssertionError as e:
                pass
        else:
            user = User.objects.get(id=request.user.id)
            Userdata = AccountUserSerializer(user)
            serializer = userSerializer(user_profile)
            return Response({"account": serializer.data, 'user': Userdata.data},
                            status=status.HTTP_200_OK)
    return Response(status=status.HTTP_406_NOT_ACCEPTABLE)


@api_view(['GET'])
def cityView(request):
    if request.method == 'GET':
        city = City.objects.all()
        serializer = CitySerializer(city, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
def profileUpdate(request):
    if request.method == 'POST':
        user = Human.objects.get(user_id=request.user.id)
        serializer = userSerializer(user,data=request.data)
        if serializer.is_valid():
            print('hamid')
            serializer.save()

        else:
            print(serializer.errors)
        return Response(status=status.HTTP_400_BAD_REQUEST)