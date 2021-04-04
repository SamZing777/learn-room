from rest_framework import generics

from .models import (
	Enrolled,
	StudentFeedback
	)

from .serializers import (
	EnrolledSerializer,
	StudentFeedbackSerializer
	)


class EnrolledListAPIView(generics.ListAPIView):
	queryset = Enrolled.objects.all()
	serializer_class = EnrolledSerializer


class StudentFeedbackListCreateAPIView(generics.ListCreateAPIView):
	queryset = StudentFeedback
	serializer_class = StudentFeedbackSerializer


class StudentFeedbackChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = StudentFeedback
	serializer_class = StudentFeedbackSerializer
	lookup_fields = ['course', 'student']
