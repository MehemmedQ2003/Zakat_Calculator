from django.urls import path
from .views import *

app_name = 'zakat_calculator'

urlpatterns = [
    path('', index, name='index'),
]