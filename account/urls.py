from django.urls import path

from account import views

urlpatterns = [
    path('', views.setPageSingInSingUp, name='singUpAndSingIn'),
    path('accounts/api/createUser', views.createUser, name='createUser'),
    path('accounts/api/login', views.loginUser, name='login'),
    path('accounts/logut', views.logoutUser, name='logout'),
]
