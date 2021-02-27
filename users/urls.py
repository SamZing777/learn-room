from django.conf import settings
from django.conf.urls.static import static
from rest_framework.routers import DefaultRouter

from .views import UserViewSet

router = DefaultRouter()

router.register('users', UserViewSet, basename = 'user')

urlpatterns = [ ] + router.urls
