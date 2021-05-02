from django.urls import path
from rest_framework import routers
from .views import (
			JobViewSet
		)

from .views import (
		JobListCreateAPIView,
		JobChangeAPIView
	)

routers = routers.DefaultRouter()
routers.register('job', JobViewSet, basename='jobs')


urlpatterns = [
	path('jobs/', JobListCreateAPIView.as_view(), name='jobs'),
	path('jobs/<slug:slug>/', JobChangeAPIView.as_view(), name='job_detail')
] + routers.urls
