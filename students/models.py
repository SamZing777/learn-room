from django.db import models
from django.utils.timezone import now

from users.models import User
from courses.models import Course


class Enroll(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrolls')
    timeStamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
    	return str(self.course)
