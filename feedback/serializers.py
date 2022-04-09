from rest_framework import serializers

from .models import (
    StudentFeedback,
    FeaturedReview
)


class StudentFeedbackSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentFeedback
        fields = '__all__'


class FeaturedReviewSerializer(serializers.ModelSerializer):

    class Meta:
        model = FeaturedReview
        fields = '__all__'
