from rest_framework import generics, viewsets

from .models import Enroll
from .serializers import EnrollSerializer



class EnrollViewSet(viewsets.ModelViewSet):
	queryset = Enroll.objects.all()
	serializer_class = EnrollSerializer



class EnrollListAPIView(generics.ListAPIView):
	queryset = Enroll.objects.all()
	serializer_class = EnrollSerializer


class EnrollRetrieveAPIView(generics.RetrieveAPIView):
	queryset = Enroll.objects.all()
	serializer_class = EnrollSerializer
