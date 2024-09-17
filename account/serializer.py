from rest_framework import serializers
from account.models import Human, City
from django.contrib.auth.models import User


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = Human
        fields = ('user', 'name', 'family', 'age', 'zipcode', 'phone', 'picture', 'city', 'picture')
        read_only_fields = ['user']


class AccountUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'last_login', 'is_superuser', 'is_staff')


class CitySerializer(serializers.ModelSerializer):
    class Meta:
        model = City
        fields = ('id', 'name')
