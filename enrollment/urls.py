from django.urls import path, include
from rest_framework import routers

from .views import EnrolledViewSet

router = routers.DefaultRouter()
router.register('enroll', EnrolledViewSet, basename='enroll')

urlpatterns = [
	
] + router.urls
