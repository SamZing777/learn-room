from django.db import models

from users.models import User
from courses.models import Course


class Enrolled(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	timeStamp = models.DateTimeField(auto_now_add=True)
	used_coupon = models.BooleanField(default=False)

	def __str__(self):
		return str(self.course)
