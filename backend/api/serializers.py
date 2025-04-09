from rest_framework import serializers
from .models import User

class useSerializer(serializers.ModelSerializer):
    class meta:
        model = User
        fields = '__all__'