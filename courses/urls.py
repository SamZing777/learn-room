from django.urls import path, include
from rest_framework import routers

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
	StudentFeedbackListAPIView,
	RatingViewSet
	)

router = routers.DefaultRouter()
router.register('ratings', RatingViewSet, basename='ratings')
router.register('part', PartListAPIView, basename='part')
router.register('studentfeedback', StudentFeedbackListAPIView, basename='studentfeedback')
router.register('lessonchange', LessonChangeAPIView, basename='lessonchange')
router.register('partchange', PartChangeAPIView, basename='partchange')
router.register('coursechange', CourseChangeAPIView, basename='coursechange')
router.register('lesson', LessonListAPIView, basename='lesson')
router.register('section', SectionListAPIView, basename='section')
router.register('courselist', CourseListAPIView, basename='courselist')
router.register('subcategory', SubCategoryListAPIView, basename='subcategory')
router.register('category', CategoryListAPIView, basename='category')



urlpatterns = [
	path('courselist/<int:pk>/rating/<int:rating>/', CourseListAPIView.as_view({"get": "rating"})),
	path('courselist/<int:pk>/enroll/', CourseListAPIView.as_view({"get": "enroll"}))
		] + router.urls
