from django.shortcuts import render
from rest_framework.views import APIView
from .models import Table

# Create your views here.

def index(request):
    all_items= Table.objects.all()
    return render(request, 'index.html', {'all_items': all_items })

def home(request):
     all_items= Table.objects.all()
     return render(request, 'home.html', {'all_items': all_items })
     
