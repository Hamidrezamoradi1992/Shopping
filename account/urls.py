from django.urls import path

from account import views

urlpatterns = [
    path('', views.setPageSingInSingUp, name='singUpAndSingIn'),
    path('accounts/api/createUser', views.createUser, name='createUser'),
    path('accounts/api/login', views.loginUser, name='login'),
    path('accounts/logut', views.logoutUser, name='logout'),
    path('accounts/view', views.accountView, name='templateUserView'),
    path('accounts/user-profile', views.accountUser, name='contentUserProfile'),
    path('accounts/city', views.cityView, name='allCity'),
    path('accounts/user', views.profileUpdate, name='45551'),
    path('accounts/order-list', views.orderItems, name='order-list'),
]
