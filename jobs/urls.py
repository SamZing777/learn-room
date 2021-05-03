from django.urls import path
from rest_framework import routers

from .views import (
		JobViewSet,

	)


routers = routers.DefaultRouter()
routers.register('job', JobViewSet, basename='jobs')


urlpatterns = [
] + routers.urls


"""
		JobListCreateAPIView,
		JobChangeAPIView

		
	path('jobs/', JobListCreateAPIView.as_view(), name='jobs'),
	path('jobs/<int:pk>/', JobChangeAPIView.as_view(), name='job_detail')
"""