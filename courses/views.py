from django.db.models import Q
from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication

from users.models import User
from students.models import Enroll
# from django_filters import rest_framework as filters

from .models import (
	Category,
	SubCategory,
	Course,
	Part,
	Section,
	Lesson,
	StudentFeedback,
	FeaturedReview,
	Rating
	)

from .serializers import (
	CategorySerializer,
	SubCategorySerializer,
	CourseSerializer,
	PartSerializer,
	SectionSerializer,
	LessonSerializer,
	FeedbackSerializer,
	ReviewSerializer,
	RatingSerializer
	)

from .permissions import IsOwnerOrReadOnly  # IsEnrolledForTheCourse, UserIsIntructor

from .pagination import (
		CategoryPagination,
		CoursePagination
	)


class CategoryListAPIView(viewsets.ModelViewSet):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,)
	pagination_class = CoursePagination	

class SubCategoryListAPIView(viewsets.ModelViewSet):
	queryset = SubCategory.objects.all()
	serializer_class = SubCategorySerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,)
	pagination_class = CoursePagination


class CourseListAPIView(viewsets.ModelViewSet):
	search_fields = ['title', 'instructor']
	serializer_class = CourseSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly) # IsEnrolledForTheCourse, UserIsIntructor
	pagination_class = CoursePagination

	def get_queryset(self):
		queryset = Course.objects.all()
		query = self.request.query_params.get('q')
		course_id = self.request.query_params.get('id')
		category = self.request.query_params.get('category')
		sub_category = self.request.query_params.get('sub_category')
		if course_id is not None and sub_category is None and category is None:
			queryset = queryset.filter(id=course_id)
		if course_id is None and sub_category is None and category is not None:
			queryset = queryset.filter(category=category)
		if course_id is None and category is None and sub_category is not None:
			queryset = queryset.filter(sub_category=sub_category)
		if course_id is not None and sub_category is not None and category is None:
			queryset = queryset.filter(
				Q(id=course_id) |
				Q(sub_category=sub_category)
			)	
		if course_id is not None and sub_category is None and category is not None:
			queryset = queryset.filter(
				Q(id=course_id) |
				Q(category=category)
			)
		if course_id is None and sub_category is not None and category is not None:
			queryset = queryset.filter(
				Q(sub_category=sub_category) |
				Q(category=category)
			)
		if course_id is not None and sub_category is not None and category is not None:
			queryset = queryset.filter(
				Q(id=course_id) |
				Q(category=category) |
				Q(sub_category=sub_category)
			)
		if query is not None:
			queryset = queryset.filter(
				title__contains=query
			)	
		return queryset

	@action(detail=True, methods=['POST', 'GET'])
	def enroll(self, request, *args, **kwargs):
		course = self.get_object()
		user = User.objects.get(email=request.user.email)
		enroll = Enroll.objects.create(user=user, course=course)
		return Response({'enroll': True})

	@action(detail=True, methods=['POST', 'GET'])
	def rating(self, request, pk=None, *args, **kwargs):
		course = self.get_object()
		rating = int(kwargs['rating'])
		rating = Rating.objects.create(user=request.user, stars=rating)
		course.set_rating(rating.id)
		return Response({'rating': True})

	@action(detail=True, methods=['POST', 'GET'])
	def add_part(self, request, pk=None, *args, **kwargs):
		course = self.get_object()
		name = int(kwargs['name'])
		part = Part.objects.create(course=course, name=name)
		return Response({'part': True})


class PartListAPIView(viewsets.ModelViewSet):
	queryset = Part.objects.all()
	serializer_class = PartSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # UserIsIntructor
	pagination_class = CoursePagination


class SectionListAPIView(viewsets.ModelViewSet):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # UserIsIntructor
	pagination_class = CoursePagination


class LessonListAPIView(viewsets.ModelViewSet):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # UserIsIntructor
	pagination_class = CoursePagination


class CourseChangeAPIView(viewsets.ModelViewSet):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,) # IsEnrolledForTheCourse, UserIsIntructor
	lookup_field = 'slug'
	pagination_class = CoursePagination


class PartChangeAPIView(viewsets.ModelViewSet):
	queryset = Part.objects.all()
	serializer_class = PartSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly)
	pagination_class = CoursePagination


class SectionChangeAPIView(viewsets.ModelViewSet):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,)
	pagination_class = CoursePagination


class LessonChangeAPIView(viewsets.ModelViewSet):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,) # IsEnrolledForTheCourse, UserIsIntructor
	lookup_field = 'slug'
	pagination_class = CoursePagination


class StudentFeedbackListAPIView(viewsets.ModelViewSet):
	queryset = StudentFeedback.objects.all()
	serializer_class = FeedbackSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,) # IsEnrolledForTheCourse
	pagination_class = CoursePagination


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (permissions.IsAuthenticated,)
    pagination_class = CoursePagination
