from django.urls import path, include

from .views import (
	CategoryListAPIView,
	SubCategoryListAPIView,
	CourseListAPIView,
	PartListAPIView,
	SectionListAPIView,
	LessonListAPIView,
	CourseChangeAPIView,
	PartChangeAPIView,
	SectionChangeAPIView,
	LessonChangeAPIView,
	StudentFeedbackListAPIView
	)


urlpatterns = [
			path('categories/', CategoryListAPIView.as_view(), name='categories'),
			path('categories/<slug:slug>/', SubCategoryListAPIView.as_view(), name='course_category'),
			path('categories/<slug:slug>/course/', SubCategoryListAPIView.as_view(), name='categorized_course'),
			path('courses/', CourseListAPIView.as_view(), name='courses'),
			path('courses/<slug:slug>/', CourseChangeAPIView.as_view(), name='course_detail'),
			path('part/', PartListAPIView.as_view(), name='part'),
			path('part/<int:pk>/', PartChangeAPIView.as_view(), name='part_change'),
			path('part/<int:pk>/section/', SectionListAPIView.as_view(), name='section'),
			path('part/<int:pk>/section/<int:id>/', SectionChangeAPIView.as_view(), name='section_change'),
			path('lesson/', LessonListAPIView.as_view(), name='lesson'),
			path('lesson/<slug:slug>/', LessonChangeAPIView.as_view(), name='lesson_change'),
			path('courses/<slug:slug>/feedback/', StudentFeedbackListAPIView.as_view(), name='feedback')
		]
