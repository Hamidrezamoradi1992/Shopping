from django.urls.conf import path

from core import views

urlpatterns = [
    path('api/slider', views.slider_view, name='slider'),
]