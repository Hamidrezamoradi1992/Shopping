from rest_framework import serializers
from core.models import Picture_Slider


class PictureSliderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture_Slider
        fields = ['picture']
