from rest_framework import generics

from .model import Enroll
from .serializers import EnrollSerializer


class EnrollListAPIView(generics.ListAPIView):
	queryset = Enroll.objects.all()
	serializer_class = EnrollSerializer


class EnrollRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Enroll.objects.all()
	serializer_class = EnrollSerializer
