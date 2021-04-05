from rest_framework import generics

from .models import (
		Quiz,
		Option,
		Project,
		StudentQuizAnswer
		StudentProjectReport
		StudentQuizScore
		StudentprojectScore
	)

from .serializers import (
		QuizSerializer,
		OptionSerializer,
		ProjectSerializer,
		StudentQuizAnswerSerializer,
		StudentProjectReportSerializer,
		StudentQuizScoreSerializer,
		StudentprojectScoreSerializer
	)


from .permissions import IsStudentOrReadOnly


class QuizListCreateAPIView(generics.ListCreateAPIView):
	queryset = Quiz.objects.all()
	serializer_class = QuizSerializer


class QuizChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Quiz.objects.all()
	serializer_class = QuizSerializer


class OptionListCreateAPIView(generics.ListCreateAPIView):
	queryset = Option.objects.all()
	serializer_class = OptionSerializer


class OptionChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Option.objects.all()
	serializer_class = OptionSerializer


class ProjectListCreateAPIView(generics.ListCreateAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer


class ProjectChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Project.objects.all()
	serializer_class = ProjectSerializer


class QuizAnswerListCreateAPIView(generics.ListCreateAPIView):
	queryset = StudentQuizAnswer.objects.all()
	serializer_class = StudentQuizAnswerSerializer


class ProjectReportCreateAPIView(generics.CreateAPIView):
	queryset = StudentProjectReport.objects.all()
	serializer_class = StudentProjectReportSerializer


class QuizScoreAPIView(generics.APIView):
	queryset = StudentQuizScore.all()
	serializer_class = StudentQuizScoreSerializer


class ProjectScoreAPIView(generics.APIView):
	queryset = StudentprojectScore.objects.all()
	serializer_class = StudentProjectReportSerializer
