from django.urls import path
from .views import index, set_language

app_name = 'zakat_calculator'

urlpatterns = [
    path('', index, name='index'),
    path('set_language/<str:language>/', set_language, name='set-language'),
]
