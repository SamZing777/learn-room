from rest_framework import generics, viewsets
from rest_framework import views
from rest_framework import permissions

from .models import (
		Quiz,
		Option,
		Project,
		StudentQuizAnswer,
		StudentProjectReport,
		StudentQuizScore,
		StudentProjectScore
	)

from .serializers import (
		QuizSerializer,
		OptionSerializer,
		ProjectSerializer,
		StudentQuizAnswerSerializer,
		StudentProjectReportSerializer,
		StudentQuizScoreSerializer,
		StudentProjectScoreSerializer
	)

from rest_framework.pagination import (
	LimitOffsetPagination,
	PageNumberPagination
	)

from courses.permissions import IsOwnerOrReadOnly
from .permissions import IsStudentOwnerOrReadOnly


class QuizViewSet(viewsets.ModelViewSet):
	queryset = Quiz.objects.all()
	serializer_class = QuizSerializer
	pagination_class = LimitOffsetPagination

class OptionViewSet(viewsets.ModelViewSet):
	queryset = Option.objects.all()
	serializer_class = OptionSerializer
	pagination_class = LimitOffsetPagination


class ProjectViewSet(viewsets.ModelViewSet, LimitOffsetPagination):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer
	pagination_class = LimitOffsetPagination


class StudentQuizAnswerViewSet(viewsets.ModelViewSet):
	queryset = StudentQuizAnswer.objects.all()
	serializer_class = StudentQuizAnswerSerializer
	pagination_class = PageNumberPagination


class StudentProjectReportViewSet(viewsets.ModelViewSet):
	queryset = StudentProjectReport.objects.all()
	serializer_class = StudentProjectReportSerializer
	pagination_class = LimitOffsetPagination


class StudentQuizScoreViewSet(viewsets.ModelViewSet):
	queryset = StudentQuizScore.objects.all()
	serializer_class = StudentQuizScoreSerializer
	pagination_class = LimitOffsetPagination


class StudentProjectScoreViewSet(viewsets.ModelViewSet):
	queryset = StudentProjectScore.objects.all()
	serializer_class = StudentProjectScoreSerializer
	pagination_class = LimitOffsetPagination










"""

class QuizListCreateAPIView(generics.ListCreateAPIView):
	queryset = Quiz.objects.all()
	serializer_class = QuizSerializer


class QuizChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Quiz.objects.all()
	serializer_class = QuizSerializer
	lookup_fields = 'slug'
	permission_classes = (IsOwnerOrReadOnly)  # IsEnrolled


class OptionListCreateAPIView(generics.ListCreateAPIView):
	queryset = Option.objects.all()
	serializer_class = OptionSerializer
	permission_classes = (IsOwnerOrReadOnly)


class OptionChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Option.objects.all()
	serializer_class = OptionSerializer
	permission_classes = (IsOwnerOrReadOnly)
	lookup_fields = 'id'


class ProjectListCreateAPIView(generics.ListCreateAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer


class ProjectChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer
	lookup_fields = 'slug'
	permission_classes = (IsOwnerOrReadOnly)


class QuizAnswerListCreateAPIView(generics.ListCreateAPIView):
	queryset = StudentQuizAnswer.objects.all()
	serializer_class = StudentQuizAnswerSerializer
	permission_classes = (IsOwnerOrReadOnly)


class ProjectReportCreateAPIView(generics.CreateAPIView):
	queryset = StudentProjectReport.objects.all()
	serializer_class = StudentProjectReportSerializer
	permission_classes = (IsOwnerOrReadOnly)


class ProjectReportChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = StudentProjectReportSerializer
	serializer_class = StudentProjectReportSerializer
	lookup_fields = 'slug'
	# permission_classes = (IsStudentOwnerOrReadOnly)


class QuizScoreAPIView(views.APIView):
	queryset = StudentQuizScore.objects.all()
	serializer_class = StudentQuizScoreSerializer


class ProjectScoreAPIView(views.APIView):
	queryset = StudentProjectScore.objects.all()
	serializer_class = StudentProjectScoreSerializer
"""
