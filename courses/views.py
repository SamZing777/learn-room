from django.db.models import Q
from rest_framework import generics, permissions
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import action
from rest_framework.authentication import TokenAuthentication

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
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly) # IsEnrolledForTheCourse, UserIsIntructor
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

	@action(detail=True, methods=['POST'])
	def rate_course(self, request, pk=None):
		if 'stars' in request.data:

		    course = Course.objects.get(id=pk) # Course.objects.filter(slug=.....kwargs.Matchurlresolvers)
		    stars = request.data['stars']
		    user = request.user

		    try:
		        rating = Rating.objects.get(user=user.id, course=course.id)
		        rating.stars = stars
		        rating.save()
		        serializer = RatingSerializer(rating, many=False)
		        response = {'message': 'Rating updated', 'result': serializer.data}
		        return Response(response, status=status.HTTP_200_OK)
		    except:
		        rating = Rating.objects.create(user=user, course=course, stars=stars)
		        serializer = RatingSerializer(rating, many=False)
		        response = {'message': 'Rating created', 'result': serializer.data}
		        return Response(response, status=status.HTTP_200_OK)

		else:
		    response = {'message': 'You need to provide stars'}
		    return Response(response, status=status.HTTP_400_BAD_REQUEST)


class PartListAPIView(generics.ListCreateAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # UserIsIntructor


class SectionListAPIView(generics.ListCreateAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # UserIsIntructor


class LessonListAPIView(generics.ListCreateAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly) # UserIsIntructor


class CourseChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,) # IsEnrolledForTheCourse, UserIsIntructor
	lookup_field = 'slug'


class PartChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,)


class SectionChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,)


class LessonChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
	permisson_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly,) # IsEnrolledForTheCourse, UserIsIntructor
	lookup_field = 'slug'


class StudentFeedbackListAPIView(generics.ListCreateAPIView):
	queryset = StudentFeedback.objects.all()
	serializer_class = FeedbackSerializer
	permission_classes = (permissions.IsAuthenticatedOrReadOnly,) # IsEnrolledForTheCourse


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication, )
    permission_classes = (permissions.IsAuthenticated,)

    def update(self, request, *args, **kwargs):
        response = {'message': 'You cant update rating like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)

    def create(self, request, *args, **kwargs):
        response = {'message': 'You cant create rating like that'}
        return Response(response, status=status.HTTP_400_BAD_REQUEST)


# class FeaturedReviewListAPIView(APIView):
