from rest_framework import serializers
from account.models import Human


class userSerializer(serializers.ModelSerializer):
    class Meta:
        model = Human
        fields = ('user', 'name', 'family', 'age', 'zipcode', 'phone', 'picture', 'city', 'picture')
        read_only_fields = ('user', 'city')
