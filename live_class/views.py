from rest_framework import viewsets

from .models import (
	LiveClass,
	Attendant,
	Question,
	Answer,
	LiveClassTranscript,
	LiveClassRecord
	)

from .serializers import(
	LiveClassSerializer,
	AttendantSerializer,
	QuestionSerializer,
	AnswerSerializer,
	LiveClassTranscriptSerializer,
	LiveClassRecordSerializer
	)


class LiveClassViewSet(viewsets.ModelViewSet):
	queryset = LiveClass.objects.all()
	serializer_class = LiveClassSerializer


class AttendantViewSet(viewsets.ModelViewSet):
	queryset = Attendance.objects.all()
	serializer_class = LiveClassSerializer


class QuestionViewSet(viewsets.ModelViewSet):
	queryset = Question.objects.all()
	serializer_class = QuestionSerializer


class AttendantViewSet(viewsets.ModelViewSet):
	queryset = Answer.objects.all()
	serializer_class = AnswerSerializer


class LiveClassTranscriptViewSet(viewsets.ModelViewSet):
	queryset = LiveClassTranscript.objects.all()
	serializer_class = LiveClassSerializer


class LiveClassRecordViewSet(viewsets.ModelViewSet):
	queryset = Record.objects.all()
	serializer_class = LiveClassRecordSerializer
