from rest_framework.serializers import ModelSerializer
from bags.models import Order, OrderItem


class OrderSerializer(ModelSerializer):
    class Meta:
        model = Order
        fields = '__all__'


class ListOrderSerializer(OrderSerializer):
    class Meta:
        model = OrderItem
        fields = '__all__'

