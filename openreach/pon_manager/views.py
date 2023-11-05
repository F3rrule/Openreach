from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ReactSerializer
from .models import Table

# Create your views here.

class TableView(viewsets.ModelViewSet):
     serializer_class = ReactSerializer
     queryset =Table.objects.all()

def index(request):
    all_items= Table.objects.all()
    return render(request, 'index.html', {'all_items': all_items })

def home(request):
     all_items= Table.objects.all()
     return render(request, 'home.html', {'all_items': all_items })
     
