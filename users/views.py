from django.contrib.auth import get_user_model
from rest_framework import viewsets, generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_auth.registration.views import VerifyEmailView
from rest_framework.response import Response
from rest_framework.decorators import action
from django.contrib.auth.models import Group, Permission

from .serializers import (
    UserSerializer,
    UserProfileSerializer, 
    InstructorSerializer,
    GroupSerializer,
    PermissionSerializer
    )

from .models import (
    Profile, 
    Instructor,
    )

from rest_framework.pagination import (
	LimitOffsetPagination,
	PageNumberPagination
	)

class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer
    pagination_class = LimitOffsetPagination

    @action(detail=True, methods=['get'])
    def userprofile(self, request, pk):
        qs = self.get_object().userprofile_set.all()
        serializer = UserProfileSerializer(qs, many=True)
        return Response(serializer.data)


class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    pagination_class = LimitOffsetPagination


class MyVerifyEmailView(VerifyEmailView):
    template_name = 'account/email_confirm.html'

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = UserProfileSerializer
    pagination_class = LimitOffsetPagination

class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    pagination_class = LimitOffsetPagination

class PermissionViewSet(viewsets.ModelViewSet):
    queryset = Permission.objects.all()
    serializer_class = PermissionSerializer
    pagination_class = LimitOffsetPagination

@api_view()
def null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)
