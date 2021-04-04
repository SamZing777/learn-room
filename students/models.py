from django.db import models
from django.core.validators import MaxValueValidator
from django.utils.timezone import now

from users.models import User
from courses.models import Course


class Enroll(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='enrolls')
    timeStamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
    	return str(self.course)


class StudentFeedback(models.Model):
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	ratings = [MaxValueValidator(5)]
	review = models.TextField()
	timeStamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.course)


class FeaturedReview(models.Model):
	review = models.ForeignKey(StudentFeedback, on_delete=models.CASCADE)
	timeStamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.course)
