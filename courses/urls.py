from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    CourseCategoryViewSet,
    CourseSubCategoryViewSet,
    CourseViewSet
)

router = DefaultRouter()
router.register('course_category', CourseCategoryViewSet)
router.register('course_sub_category', CourseSubCategoryViewSet)
router.register('courses', CourseViewSet)


urlpatterns = [
    path('', include(router.urls))
]
