from rest_framework import generics

from .models import Job
from .serializers import JobSerializer


class JobListCreateAPIView(generics.ListCreateAPIView):
	queryset = Job.objects.all()
	serializer_class = JobSerializer



class JobChangeAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Job.objects.all()
	serializer_class = JobSerializer
	lookup_field = 'slug'
