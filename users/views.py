from rest_framework import viewsets, generics
from django.contrib.auth import get_user_model
from .serializers import UserSerializer, UserProfileSerializer, InstructorSerializer
from .models import UserProfile, Instructor
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_auth.registration.views import VerifyEmailView
from rest_framework.response import Response
from rest_framework.decorators import action



class UserViewSet(viewsets.ModelViewSet):
    queryset = get_user_model().objects.all()
    serializer_class = UserSerializer

    @action(detail=True, methods=['get'])
    def userprofile(self, request, pk):
        qs = self.get_object().userprofile_set.all()
        serializer = UserProfileSerializer(qs, many=True)
        return Response(serializer.data)



class InstructorViewSet(viewsets.ModelViewSet):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class MyVerifyEmailView(VerifyEmailView):
    template_name = 'account/email_confirm.html'

@api_view()
def null_view(request):
    return Response(status=status.HTTP_400_BAD_REQUEST)
