from django.urls import path

from product import views

urlpatterns = [
    path('', views.index, name='index'),
    path('api/product',views.product_list_view,name='product_list'),
    path('product/detail/<int:pk>',views.detail_product_view,name='product_detail_page'),
    path('product/detail/api/pruductdetaile/<int:product_id>',views.product_detail_view,name='product_detail_api'),
    path('product/detail/api/pruductdetaile/technical/<int:product_id>',views.technical_characteristics_list_view,name='product_technical_api'),

]