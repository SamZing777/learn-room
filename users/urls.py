from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter


from .views import UserViewSet # UserProfileView

from .views import UserViewSet, InstructorViewSet# , UserProfileView

router = DefaultRouter()

router.register('users', UserViewSet, basename = 'user'),

# router.register('users/<int:pk>/', UserProfileView, basename = 'profile')

router.register('instructor', InstructorViewSet, basename = 'instructor'),
#router.register('users/<int:pk>/', UserProfileView, basename = 'profile')

urlpatterns = [ ] + router.urls
