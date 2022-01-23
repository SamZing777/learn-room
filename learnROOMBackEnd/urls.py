from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', include('users.urls')),
    path('auth/', include('rest_framework.urls')),
    path('rest/', include('rest_auth.urls')),
    path('rest/reg/', include('rest_auth.registration.urls')),
    path('admin/', admin.site.urls)
]
