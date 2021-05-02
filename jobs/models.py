from django.db import models
from django.urls import reverse
from autoslug import AutoSlugField


from courses.models import Category


class Industry(models.TextChoices):
	Agriculture = 'Agriculture'
	Automobile = 'Automobile'
	Banking_and_Finance = 'Banking and Finance'
	Construction = 'Construction'
	Consulting = 'Consulting'
	Engineering = 'Engineering'
	Health = 'Health'
	I_T = 'Information Technology'
	Logistics = 'Logistics'
	Transportation = 'Transportation'


class Firm(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()
	slug = AutoSlugField(populate_from='title', unique=True, 
			     always_update=False, default=None, blank=True)
	industry = models.CharField(max_length=25, choices=Industry.choices, default=Industry.I_T, blank=True)
	country = models.CharField(max_length=50)
	website = models.URLField(default=None, blank=True)
	short_note = models.CharField(max_length=200, default=None, blank=True)

	def __str__(self):
		return self.name


class Job(models.Model):
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	
	firm = models.ForeignKey(Firm, on_delete=models.CASCADE)
	title = models.CharField(max_length=50)
	industry = models.CharField(max_length=25, choices=Industry.choices, default=Industry.I_T, blank=True)
	slug = AutoSlugField(populate_from='title', unique=True, 
			     always_update=False, default='')
	location = models.CharField(max_length=150)
	is_full_time = models.BooleanField()
	qualification = models.TextField(default=None, blank=True)
	description = models.TextField(default=None, blank=True)
	time_stamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	# def get_absolute_url(self):
	# 	return reverse('job_detail', args=[str(self.slug)])
