from rest_framework import viewsets, generics
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, UserProfileSerializer, InstructorSerializer
from .models import UserProfile, Instructor
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_auth.registration.views import VerifyEmailView

class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer


"""
class UserProfileView(generics.RetrieveAPIView):
	queryset = UserProfile.objects.all()
	serializer_class = UserProfileSerializer
	lookup_field = id
"""


class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

# class UserProfileView(generics.RetrieveAPIView):
	# queryset = UserProfile.objects.all()
	# serializer_class = UserProfileSerializer
	# lookup_field = id

class MyVerifyEmailView(VerifyEmailView):
    template_name = 'account/email_confirm.html'

@api_view()
def null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)
>>>>>>> ea4234fe33d8cc05e2a9cf617f04efc62aec68e0
