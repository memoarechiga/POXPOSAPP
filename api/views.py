from django.shortcuts import render
from rest_framework import viewsets
from .serializer import *

# Create your views here.

class StoreList(viewsets.ModelViewSet):
    serializer_class = Storeserializer
    queryset = Store.objects.all()