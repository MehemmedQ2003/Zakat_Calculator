import requests
from django.shortcuts import render
from .models import *
from django.conf import settings

def index(request):
    if request.method == 'POST':
        from_currency = request.POST.get('from_currency')
        to_currency = request.POST.get('to_currency')
        amount = float(request.POST.get('amount'))
        
        api_key = settings.FIXER_API_KEY
        url = f"http://data.fixer.io/api/latest?access_key={api_key}&symbols={from_currency},{to_currency}"
        
        response = requests.get(url)
        data = response.json()

        if data['success']:
            from_rate = data['rates'][from_currency]
            to_rate = data['rates'][to_currency]
            converted_amount = (amount / from_rate) * to_rate

            context = {
                'converted_amount': converted_amount,
                'from_currency': from_currency,
                'to_currency': to_currency,
                'amount': amount,
                'currencies': Currency.objects.all(),
                'categories' : Category.objects.all(),
            }
        else:
            context = {
                'error': 'Error fetching conversion rates',
                'categories' : Category.objects.all(),
            }

        return render(request, 'base.html', context)
    
    context = {
        'currencies': Currency.objects.all(),
        'categories' : Category.objects.all(),
    }
    return render(request, 'base.html', context)