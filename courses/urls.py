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
	LessonChangeAPIView
	)


urlpatterns = [
			path('categories/', CategoryListAPIView.as_view(), name='categories'),
			path('sub_categories/', SubCategoryListAPIView.as_view(), name='sub_categories'),
			path('courses/', CourseListAPIView.as_view(), name='courses'),
			path('courses/<slug:slug>/', CourseChangeAPIView.as_view(), name='course_change'),
			path('part/', PartListAPIView.as_view(), name='part'),
			path('part/<slug:slug>/', PartChangeAPIView.as_view(), name='part_change'),
			path('section/', SectionListAPIView.as_view(), name='section'),
			path('section/<slug:slug>/', SectionChangeAPIView.as_view(), name='section_change'),
			path('lesson/', LessonListAPIView.as_view(), name='section'),
			path('lesson?<slug:slug>/', LessonChangeAPIView.as_view(), name='lesson_change')
		]
