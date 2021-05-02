from rest_framework import generics, viewsets

from .models import Job
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
	queryset = Job.objects.all()
	serializer_class = JobSerializer

class JobListCreateAPIView(generics.ListCreateAPIView):
	queryset = Job.objects.all()
	serializer_class = JobSerializer



class JobChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Job.objects.all()
	serializer_class = JobSerializer
	lookup_field = 'slug'
