from rest_framework import serializers

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


class CategorySerializer(serializers.ModelSerializer):

	class Meta:
		model = Category
		fields = '__all__'


class SubCategorySerializer(serializers.ModelSerializer):

	class Meta:
		model = SubCategory
		fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):

	class Meta:
		model = Course
		fields = '__all__'


class PartSerializer(serializers.ModelSerializer):

	class Meta:
		model = Part
		fields = '__all__'


class SectionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Section
		fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):

	class Meta:
		model = Lesson
		fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentFeedback
		fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):

	class Meta:
		model = FeaturedReview
		fields = '__all__'
