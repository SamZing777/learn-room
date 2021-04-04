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


class CourseWriteAPIView(generics.CreateAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer


class PartWriteAPIView(generics.CreateAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer


class SectionWriteAPIView(generics.CreateAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer


class LessonWriteAPIView(generics.CreateAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer


class CategoryRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Category.objects.all()
	serializer_class = CategorySerializer


class SubCategoryRetrieveAPIView(generics.RetrieveAPIView):
	queryset = SubCategory.objects.all()
	serializer_class = SubCategorySerializer


class CourseChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Course.objects.all()
	serializer_class = CourseSerializer
	lookup_fields = ['title', 'instructor']


class PartChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Part.objects.all()
	serializer_class = PartSerializer
	lookup_fields = ['name']


class SectionChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Section.objects.all()
	serializer_class = SectionSerializer
	lookup_fields = ['name']


class LessonChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Lesson.objects.all()
	serializer_class = LessonSerializer
	lookup_fields = ['title', 'can_preview']
