from django.urls import path, include
from rest_framework import routers
from .views import (
		EnrollListAPIView,
		EnrollRetrieveAPIView,
		EnrollViewSet
		)

routers = routers.DefaultRouter()
routers.register('lessons', EnrollViewSet, basename='enroll_student')

urlpatterns = [
	path('lesson/', EnrollListAPIView.as_view(), name='lesson'),
	path('lesson/<int:pk>/', EnrollRetrieveAPIView.as_view(), name='lesson_view')
] + routers.urls
