from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'myapp/index.html')

def sale(request):
    return render(request, 'myapp/sale.html')

def about(request):
    return render(request, 'myapp/about.html')

def consult(request):
    return render(request, 'myapp/consult.html')

def login(request):
    return render(request, 'myapp/login.html')


def for_rent(request):
    return render(request, 'myapp/for_rent.html')

def signup(request):
    return render(request, 'myapp/signup.html')