from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter


from .views import UserViewSet, InstructorViewSet , UserProfileViewSet, GroupViewSet, PermissionViewSet

router = DefaultRouter()

router.register('users', UserViewSet, basename = 'user'),

# router.register('users/<int:pk>/', UserProfileView, basename = 'profile')

router.register('instructor', InstructorViewSet, basename = 'instructor'),
router.register('userprofile', UserProfileViewSet, basename = 'profile')
router.register('group', GroupViewSet, basename = 'group')
router.register('permission', PermissionViewSet, basename = 'permission')

urlpatterns = [ ] + router.urls
