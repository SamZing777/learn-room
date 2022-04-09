from django.contrib.auth import get_user_model
from rest_framework import generics, authentication, permissions
from rest_framework.authtoken import AuthTokenSerializer
from knox.views import LoginView as KnoxLoginView
from .serializers import UserSerializer
from django.contrib.auth import login

User = get_user_model()

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [authentication.BasicAuthentication,]




class LoginAPI(KnoxLoginView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        #if '@' not in user1:
        #print(request.data['username'])
        #if 
        
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
     
        
        login(request, user)
        return super(LoginAPI, self).post(request, format=None)
