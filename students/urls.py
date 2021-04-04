from django.urls import path, include

from .views import (
	EnrolledListView,
	StudentFeedbackListCreateView,
	StudentFeedbackChangeView
	)


urlpatterns = [
	path('enrolled/', EnrolledListView.as_view(), name='enrolled'),
	path('feedback/', StudentFeedbackListCreateView.as_view(), name='feedback'),
	path('feedback_change/', StudentFeedbackChangeView.as_view(), name='feedback_change')
]
