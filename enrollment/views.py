from rest_framework import generics, viewsets

from .models import Enrolled
from .serializers import EnrolledSerializers


class EnrolledViewSet(viewsets.ModelViewSet):
	queryset = Enrolled.objects.all()
	serializer_class = EnrolledSerializers
