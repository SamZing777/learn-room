from rest_framework import viewsets, generics

from .serializers import UserSerializer, UserProfileSerializer
from .models import User, UserProfile


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

"""
class UserProfileView(generics.RetrieveAPIView):
	queryset = UserProfile.objects.all()
	serializer_class = UserProfileSerializer
	lookup_field = id
"""