from django.urls import path

from .views import (
		JobListCreateAPIView,
		JobChangeAPIView
	)


urlpatterns = [
	path('jobs/', JobListCreateAPIView.as_view(), name='jobs'),
	path('jobs/<int:pk>/', JobChangeAPIView.as_view(), name='job_detail')
]
