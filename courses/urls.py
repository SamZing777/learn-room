from django.urls import path, include

from .views import (
	CategoryListAPIView,
	SubCategoryListAPIView,
	CourseListAPIView,
	PartListAPIView,
	SectionListAPIView,
	LessonListAPIView,
	CourseWriteAPIView,
	PartWriteAPIView,
	SectionWriteAPIView,
	LessonWriteAPIView
	)


urlpatterns = [
			path('categories/', CategoryListAPIView.as_view(), name='categories'),
			path('sub_categories/', SubCategoryListAPIView.as_view(), name='sub_categories'),
			path('courses/', CourseListAPIView.as_view(), name='courses'),
			path('part/', PartListAPIView.as_view(), name='part'),
			path('section/', SectionListAPIView.as_view(), name='section'),
			path('lesson/', LessonListAPIView.as_view(), name='section'),
			path('course_write/', CourseWriteAPIView.as_view(), name='course_write'),
			path('part_write/', PartWriteAPIView.as_view(), name='part_write'),
			path('section_write/', SectionWriteAPIView.as_view(), name='section_write'),
			path('lesson_write/', LessonWriteAPIView.as_view(), name='lesson_write')
		]
