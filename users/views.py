from django.contrib.auth import get_user_model
from rest_framework import generics, authentication

from .serializers import UserSerializer

User = get_user_model()


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication,]
