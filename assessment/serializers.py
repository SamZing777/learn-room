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


all = '__all__'


class QuizSerializer(serializers.ModelSerializer):

	class Meta:
		model = Quiz
		fields = all


class OptionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Option
		fields = all


class ProjectSerializer(serializers.ModelSerializer):

	class Meta:
		model = Project
		fields = all


class StudentQuizAnswerSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentQuizAnswer
		fields = all


class StudentProjectReportSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentProjectReport
		fields = all


class StudentQuizScoreSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentQuizScore
		fields = all


class StudentProjectScoreSerializer(serializers.ModelSerializer):

	class Meta:
		model = StudentProjectScore
		fields = all



