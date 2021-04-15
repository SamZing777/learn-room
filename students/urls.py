from django.urls import path, include

from .views import (
		EnrollListAPIView,
		EnrollRetrieveAPIView
		)


urlpatterns = [
	path('lesson/', EnrollListAPIView.as_view(), name='lesson'),
	path('lesson/<int:pk>/', EnrollRetrieveAPIView.as_view(), name='lesson_view')
]
