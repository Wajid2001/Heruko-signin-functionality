from django.urls import path
from . import views
 
app_name = "backend"

urlpatterns = [
    path('api/account/signin', views.signIn),
    path('api/account/signout', views.signOut),
    path('api/account/register', views.registerUserApi),
]