from django.urls import path
from . import views
 
app_name = "frontend"

urlpatterns = [
    path('', views.index),
    path('home', views.home, name="home"),
    path('signin', views.home, name='signInView'),
    path('register', views.home, name='registerView')
]