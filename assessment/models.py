from django.db import models

from users.models import User

from courses.models import (
	Course,
	Part,
	Section,
	Lesson
	)


class Quiz(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	part = models.ForeignKey(Part, on_delete=models.CASCADE, null=True, blank=True)
	section = models.ForeignKey(Section, on_delete=models.CASCADE, null=True, blank=True)
	lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, null=True, blank=True)
	question = models.CharField(max_length=100)

	def __str__(self):
		return str(self.course)


class Option(models.Model):
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
	option = models.CharField(max_length=100, null=True, blank=True)
	true_or_false = models.BooleanField(default=False, null=True, blank=True)
	is_correct = models.BooleanField(default=False)

	def __str__(self):
		return str(self.quiz)


class Project(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	part = models.ForeignKey(Part, on_delete=models.CASCADE, null=True, blank=True)
	section = models.ForeignKey(Section, on_delete=models.CASCADE, null=True, blank=True)
	lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE, null=True, blank=True)
	topic = models.CharField(max_length=100)
	required = models.TextField()
	file = models.FileField(null=True, blank=True)

	def __str__(self):
		return self.topic


class StudentQuizAnswer(models.Model):
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
	selected_option = models.ForeignKey(Option, on_delete=models.CASCADE)

	def __str__(self):
		return str(self.student)


class StudentProjectReport(models.Model):
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	project = models.ForeignKey(Project, on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	essay = models.TextField()
	file = models.FileField(null=True, blank=True)

	def __str__(self):
		return self.title


class StudentQuizScore(models.Model):
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
	score = models.PositiveIntegerField()

	def __str__(self):
		return str(self.student)


class StudentProjectScore(models.Model):
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	project = models.ForeignKey(Project, on_delete=models.CASCADE)
	essay = models.TextField()
	file = models.FileField(null=True, blank=True)

	def __str__(self):
		return str(self.student)
