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
			     always_update=False, default='')
	industry = models.CharField(max_length=25, choices=Industry.choices)
	country = models.CharField(max_length=50)
	website = models.URLField(null=True, blank=True)
	short_note = models.CharField(max_length=200)

	def __str__(self):
		return self.name


class Job(models.Model):
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	
	firm = models.ForeignKey(Firm, on_delete=models.CASCADE)
	title = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='title', unique=True, 
			     always_update=False, default='')
	location = models.CharField(max_length=150)
	is_full_time = models.BooleanField()
	qualification = models.TextField()
	description = models.TextField()
	time_stamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	def get_absolute_url(self):
		return reverse('job_detail', args=[str(self.slug)])
