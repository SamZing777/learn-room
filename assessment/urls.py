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
		ProjectScoreAPIView,
		ProjectReportChangeAPIView
	)

urlpatterns = [
	path('quizzes/', QuizListCreateAPIView.as_view(), name='quizzes'),
	path('quizzes/<slug:slug>/', QuizChangeAPIView.as_view(), name='quiz_change'),
	path('quizzes/<slug:slug>/option/', OptionListCreateAPIView.as_view(), name='options'),
	path('option_change/<slug:slug>/', OptionChangeAPIView.as_view(), name='option_change'),
	path('quizzes/<slug:slug>/quiz_answer/', QuizAnswerListCreateAPIView.as_view(), name='quiz_answer'),
	path('quizzes/<slug:slug>/quiz_score/', QuizScoreAPIView.as_view(), name='quiz_score'),
	path('project/', ProjectListCreateAPIView.as_view(), name='project'),
	path('project<slug:slug>/', ProjectChangeAPIView.as_view(), name='project_change'),
	path('project/<slug:slug>/project_report/', ProjectReportCreateAPIView.as_view(), name='project_report'),
	path('project_report/slug:slug>/', ProjectReportChangeAPIView.as_view(), name='report_change'),
	path('project/<slug:slug>/project_score/', ProjectScoreAPIView.as_view(), name='project_score')
]
