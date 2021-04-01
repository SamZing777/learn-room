from rest_framework import generics

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


class CategoryListAPIView(generics.ListAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer


class SubCategoryListAPIView(generics.ListAPIView):
	queryset = SubCategory.objects.all()
	serializer_class = SubCategorySerializer


class CourseListAPIView(generics.ListAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer


class PartListAPIView(generics.ListAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer


class SectionListAPIView(generics.ListAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer


class LessonListAPIView(generics.ListAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
