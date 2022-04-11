from knox import views as knox_views
from .views import LoginAPI
from django.urls import path

from .views import UserList

urlpatterns = [
    path('users/', UserList.as_view(), name='users'),
    path('auth/login/', LoginAPI.as_view(), name='login'),
    path('auth/logout/', knox_views.LogoutView.as_view(), name='logout'),
]
