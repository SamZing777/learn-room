from django.urls import path, include

from .views import (
	CategoryListAPIView,
	SubCategoryListAPIView,
	CourseListAPIView,
	PartListAPIView,
	SectionListAPIView,
	LessonListAPIView
	)


urlpatterns = [
			path('categories/', CategoryListAPIView.as_view(), name='categories'),
			path('sub_categories/', SubCategoryListAPIView.as_view(), name='sub_categories'),
			path('courses/', CourseListAPIView.as_view(), name='courses'),
			path('part/', PartListAPIView.as_view(), name='part'),
			path('section/', SectionListAPIView.as_view(), name='section'),
			path('lesson/', LessonListAPIView.as_view(), name='section')
		]
