from rest_framework import serializers

from .models import (
    CourseCategory,
    CourseSubCategory,
    Course,
    Lesson,
    Section,
    Requirement,
    WhatToLearn
)


class  CourseCategorySerializer(serializers.ModelSerializer):
    sub_categories = serializers.SlugRelatedField(
		many=True,
		read_only=True,
		slug_field='name'
	)

    class Meta:
        model = CourseCategory
        fields = ['name', 'sub_categories']

    
class CourseSubCategorySerializer(serializers.HyperlinkedModelSerializer):
    sub_courses = serializers.SlugRelatedField(
		many=True,
		read_only=True,
		slug_field='title'
	)

    class Meta:
        model = CourseSubCategory
        fields = ['name', 'category', 'sub_courses']


class RequirementSerializer(serializers.ModelSerializer):

    class Meta:
        model = Requirement
        fields = '__all__'

    
class  WhatToLearnSerializer(serializers.ModelSerializer):

    class Meta:
        model = WhatToLearn
        fields = '__all__'

    
class SectionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Section
        fields = ['course', 'title']


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields ='__all__'


class CourseSerializer(serializers.ModelSerializer):
    # requirement = RequirementSerializer()
    # to_learn = WhatToLearnSerializer()
    # course_section = SectionSerializer()
    #course_lessons = LessonSerializer()

    """
    course_feedback = serializers.StringRelatedField(
		many=True
	)
    course_review = serializers.StringRelatedField(
        many=True
    ) 
    """

    class Meta:
        model = Course
        fields = ['title', 'instructor', 'category', 'sub_category', 'status',
                'thumb_nail', 'short_note', 'description', 'language',
                'is_self_pace', 'is_live_class']

"""
, 'requirement', 
                'to_learn', 
, 'course_lessons', 'course_section'


'self_pace_price', 'live_class_price',
                'self_pace_price_currency', 'live_class_price_currency',
"""
