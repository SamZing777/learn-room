from django.db.models import Q
from rest_framework import generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

# from django_filters import rest_framework as filters

from .models import (
	Category,
	SubCategory,
	Course,
	Part,
	Section,
	Lesson,
	StudentFeedback,
	FeaturedReview
	)

from .serializers import (
	CategorySerializer,
	SubCategorySerializer,
	CourseSerializer,
	PartSerializer,
	SectionSerializer,
	LessonSerializer,
	FeedbackSerializer,
	ReviewSerializer
	)

from .permissions import IsInstructorOrReadOnly

from .pagination import (
		CategoryPagination,
		CoursePagination
	)

# from .filters import CourseFilter


class CategoryListAPIView(generics.ListAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer
	pagination_class = CategoryPagination


"""
class SubCategoryFilter(filters.FilterSet):

	class Meta:
		model = SubCategory
		fields = {'name': ['exact']}
		# fields = ('name')
"""

class SubCategoryListAPIView(generics.ListAPIView):
	queryset = SubCategory.objects.all()
	serializer_class = SubCategorySerializer
	# filter_class = SubCategoryFilter



"""
	def get_context_data(self, *args, **kwargs):
		sub_category = self.object.subcategory.name
		context = super(SubCategoryListAPIView, self).get_context_data(*args, **kwargs)
		context['sub_features'] = SubCategory.objects.filter(subcategory__name=sub_category)
		return context
"""


class CourseListAPIView(generics.ListCreateAPIView):
	search_fields = ['title', 'instructor']
	serializer_class = CourseSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly)
	pagination_class = CoursePagination
	# filter_class = CourseFilter

	def get_queryset(self, *args, **kwargs):
		query_list = Course.objects.all()
		query = Course.objects.all()
		query = self.request.GET.get('q')
		if query:
			query_list = queryset.list.filter(
				Q(title__contains=query) |
				Q(instructor__contains=query)
				).distinct()
		return query_list

	def enroll(self, request, *args, **kwargs):
		course = self.get_object()
		course.users.add(request.user)
		return Response({'enrolled': True})


class PartListAPIView(generics.ListCreateAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly,)


class SectionListAPIView(generics.ListCreateAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly,)


class LessonListAPIView(generics.ListCreateAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly,)


class CourseChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	permisson_classes = (permissions.IsAuthenticated, IsInstructorOrReadOnly)
	lookup_field = 'slug'


class PartChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer
	permisson_classes = (permissions.IsAuthenticated, IsInstructorOrReadOnly)


class SectionChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer
	permisson_classes = (permissions.IsAuthenticated, IsInstructorOrReadOnly)


class LessonChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
	permisson_classes = (permissions.IsAuthenticated, IsInstructorOrReadOnly)
	lookup_field = 'slug'


class StudentFeedbackListAPIView(generics.ListCreateAPIView):
	queryset = StudentFeedback.objects.all()
	serializer_class = FeedbackSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


# class FeaturedReviewListAPIView(APIView):
