from rest_framework import serializers

from .models import (
	Category,
	SubCategory,
	Course,
	Part,
	Section,
	Lesson,
	Rating,
	StudentFeedback,
	FeaturedReview
	)


class LessonSerializer(serializers.ModelSerializer):

	class Meta:
		model = Lesson
		fields = '__all__'


class SectionSerializer(serializers.ModelSerializer):
	"""
	url = serializers.HyperlinkedIdentityField(view_name='section_content')
	lesson_set = LessonSerializer(many=True)
	"""
	
	class Meta:
		model = Section
		fields = '__all__'


class PartSerializer(serializers.ModelSerializer):
	"""
	url = serializers.HyperlinkedIdentityField(view_name='part_content')
	section_set = SectionSerializer(many=True)
	lesson_set = LessonSerializer(many=True)
	"""
	class Meta:
		model = Part
		fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
	"""
	url = serializers.HyperlinkedIdentityField(view_name='course_content')
	part = PartSerializer(many=True)
	section = SectionSerializer(many=True)
	lesson = LessonSerializer(many=True)
	"""

	class Meta:
		model = Course
		fields = '__all__'


class SubCategorySerializer(serializers.ModelSerializer):
	"""
	url = serializers.HyperlinkedIdentityField(view_name='subcategory')
	course_set = CourseSerializer(many=True)
	"""

	class Meta:
		model = SubCategory
		fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):
	"""
	url = serializers.HyperlinkedIdentityField(view_name='course_category')
	course_set = SubCategorySerializer(many=True)
	"""

	class Meta:
		model = Category
		fields = '__all__'


class FeedbackSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentFeedback
		fields = '__all__'


class ReviewSerializer(serializers.ModelSerializer):

	class Meta:
		model = FeaturedReview
		fields = '__all__'


class RatingSerializer(serializers.ModelSerializer):

	class Meta:
		model = Rating
		fields = '__all__'
