from rest_framework import generics, permissions

from .models import (
	Category,
	SubCategory,
	Course,
	Part,
	Section,
	Lesson
	)

from .serializers import (
	CategorySerializer,
	SubCategorySerializer,
	CourseSerializer,
	PartSerializer,
	SectionSerializer,
	LessonSerializer
	)

from .permissions import IsInstructorOrReadOnly


class CategoryListAPIView(generics.ListAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer


class SubCategoryListAPIView(generics.ListAPIView):
	queryset = SubCategory.objects.all()
	serializer_class = SubCategorySerializer


class CourseListAPIView(generics.ListCreateAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	permisson_classes = (permissions.IsAuthenticatedOrReadOnly)


class PartListAPIView(generics.ListCreateAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer


class SectionListAPIView(generics.ListCreateAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer


class LessonListAPIView(generics.ListCreateAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer


class CourseChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	permisson_classes = (permissions.IsAuthenticated, IsInstructorOrReadOnly)


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
