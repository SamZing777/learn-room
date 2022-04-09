from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import (
    viewsets,
    permissions,
    filters,
    throttling
)

from .models import (
    CourseCategory,
    CourseSubCategory,
    Course,
    Lesson,
    Section,
    Requirement,
    WhatToLearn
)

from .serializers import (
    CourseCategorySerializer,
    CourseSubCategorySerializer,
    CourseSerializer,
    SectionSerializer,
    LessonSerializer,
    RequirementSerializer,
    WhatToLearnSerializer
)

from .permissions import IsOwnerOrReadOnly


class CourseCategoryViewSet(viewsets.ModelViewSet):
    queryset = CourseCategory.objects.all()
    serializer_class = CourseCategorySerializer
    filter_backends = [
		DjangoFilterBackend,
		filters.OrderingFilter,
        filters.SearchFilter
	]
	
    filterset_fields = [
		'name'
	]
    search_fields = ['name']
    ordering_fields = ['name']
    throttle_scope = 'course_category'
    throttle_classes = (throttling.ScopedRateThrottle,)


class CourseSubCategoryViewSet(viewsets.ModelViewSet):
    queryset = CourseSubCategory.objects.all()
    serializer_class = CourseSubCategorySerializer
    filter_backends = [
		DjangoFilterBackend,
		filters.OrderingFilter,
        filters.SearchFilter
	]
	
    filterset_fields = [
		'category', 'name'
	]
    search_fields = ['name']
    ordering_fields = ['name']
    throttle_scope = 'course_sub_category'
    throttle_classes = (throttling.ScopedRateThrottle,)


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                         IsOwnerOrReadOnly]
    filter_backends = [
		# DjangoFilterBackend,
		filters.OrderingFilter,
	]
	
    filterset_fields = [
		'category', 'title'
	]
    search_fields = ['title']
    ordering_fields = ['title']
    throttle_scope = 'courses'
    throttle_classes = (throttling.ScopedRateThrottle,)


class SectionViewSet(viewsets.ModelViewSet):
    queryset = Section.objects.all()
    serializer_class = SectionSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                         IsOwnerOrReadOnly]


class LessonViewSet(viewsets.ModelViewSet):
    queryset = Lesson.objects.all()
    serializer_class = LessonSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly,
                         IsOwnerOrReadOnly]
