from rest_framework import serializers

from .models import (
		Quiz,
		Option,
		Project,
		StudentQuizAnswer,
		StudentProjectReport,
		StudentQuizScore,
		StudentProjectScore
	)


class QuizSerializer(serializers.ModelSerializer):

	class Meta:
		model = Quiz
		fields = '__all__'


class OptionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Option
		fields = '__all__'


class ProjectSerializer(serializers.ModelSerializer):

	class Meta:
		model = Project
		fields = '__all__'


class StudentQuizAnswerSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentQuizAnswer
		fields = '__all__'


class StudentProjectReportSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentProjectReport
		fields = '__all__'


class StudentQuizScoreSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentQuizScore
		fields = '__all__'


class StudentProjectScoreSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentProjectScore
		fields = '__all__'
