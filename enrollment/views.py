from rest_framework import generics

from .models import Enrolled
from .serializers import EnrolledSerializers


class EnrolledLisAPIView(generics.ListAPIView):
	queryset = Enrolled.objects.all()
	serializer_class = EnrolledSerializers
