from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('sale/', views.sale, name='sale'),
    path('for_rent/', views.for_rent, name='for_rent'),
    path('consult/', views.consult, name='consult'),
    path('signup/', views.signup, name='signup'),
    path('login/', views.login, name='login'),
    path('about/', views.about, name='about'),
]