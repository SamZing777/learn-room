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
        fields = '__all__'


class LessonSerializer(serializers.ModelSerializer):

    class Meta:
        model = Lesson
        fields ='__all__'


class CourseSerializer(serializers.ModelSerializer):
    requirement = RequirementSerializer()
    to_learn = WhatToLearnSerializer()
    sections = SectionSerializer()
    lessons = LessonSerializer()

    class Meta:
        model = Course
        fields = ['title', 'instructor', 'category', 'sub_category', 'status',
                'thumb_nail', 'short_note', 'description', 'language',
                'is_self_pace', 'is_live_class', 'self_pace_price', 'live_class_price',
                'requirement', 'to_learn', 'sections', 'lessons']
