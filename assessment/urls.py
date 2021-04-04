from django.urls import path

from .views import (
		QuizListCreateAPIView,
		QuizChangeAPIView,
		OptionListCreateAPIView,
		OptionChangeAPIView,
		ProjectListCreateAPIView,
		ProjectChangeAPIView,
		QuizAnswerListCreateAPIView,
		ProjectReportCreateAPIView,
		QuizScoreAPIView,
		ProjectScoreAPIView
	)

urlpatterns = [
	path('quizzes/', QuizListCreateAPIView.as_view(), name='quizzes'),
	path('quizzes/<int:pk>/', QuizChangeAPIView.as_view(), name='quiz_change'),
	path('quizzes/<int:pk>/option/', OptionListCreateAPIView.as_view(), name='options'),
	path('quizzes/<int:pk>/option/<int:pk>/', OptionChangeAPIView.as_view(), name='option_change'),
	path('quizzes/<int:pk>/quiz_answer/', QuizAnswerListCreateAPIView.as_view(), name='quiz_answer'),
	path('quizzes/<int:pk>/quiz_score/', QuizScoreAPIView.as_view(), name='quiz_score'),
	path('project/', ProjectListCreateAPIView.as_view(), name='project'),
	path('project<int:pk>/', ProjectChangeAPIView.as_view(), name='project_change'),
	path('project/<int:pk>/project_report/', ProjectReportAPIView.as_view(), name='project_report'),
	path('project/<int:pk>/project_score/', ProjectScoreAPIView.as_view(), name='project_score')
]
