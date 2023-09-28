from rest_framework import serializers
from .models import *

class Storeserializer(serializers.ModelSerializer):
    class Meta:
        model = Store
        fields = '__all__'