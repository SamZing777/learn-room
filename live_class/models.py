from django.db import models
from autoslug import AutoSlugField


from courses.models import Course
from users.models import User


class LiveClass(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	name = models.CharField(max_length=50)
	part = models.PositiveIntegerField()
	section = models.PositiveIntegerField(null=True, blank=True)

	def __str__(self):
		return self.name


class Attendant(models.Model):
	live_class = models.ForeignKey(LiveClass, on_delete=models.CASCADE)
	present = models.PositiveIntegerField()
	absence = models.PositiveIntegerField()

	def __str__(self):
		return str(self.present)


class Question(models.Model):
	live_class = models.ForeignKey(LiveClass, on_delete=models.CASCADE)
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	question = models.CharField(max_length=500)

	def __str__(self):
		return str(self.student)


class Answer(models.Model):
	question = models.ForeignKey(Question, on_delete=models.CASCADE)
	instructor = models.ForeignKey(User, on_delete=models.CASCADE)
	answer = models.CharField(max_length=500)

	def __str__(self):
		return str(self.question)


class LiveClassTranscript(models.Model):
	live_class = models.ForeignKey(LiveClass, on_delete=models.CASCADE)
	transcript = models.TextField()
	slug = AutoSlugField(populate_from=live_class.name, unique=True, 
			     always_update=False, default='')

	def __str__(self):
		return str(self.live_class)


class LiveClassRecord(models.Model):
	live_class = models.ForeignKey(LiveClass, on_delete=models.CASCADE)
	file = models.FileField()

	def __str__(self):
		return str(self.live_class)
