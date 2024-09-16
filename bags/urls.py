from django.urls.conf import path

from . import views

urlpatterns = [
    path('api/product-add-order/', views.addBagsview, name=''),
]