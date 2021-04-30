from django.db import models
from django.urls import reverse
from autoslug import AutoSlugField
from django_countries.fields import CountryField

from courses.models import Category


class Industry(models.TextChoices):
	AdvertisingPublicRelations = 'Advertising / Public Relations'
	Aviation = 'Aviation'
	Agriculture = 'Agriculture'
	Architectural = 'Architectural'
	ArtAndCraft = 'Art and Craft'
	AutoDealers = 'Auto Dealers'
	Automobile = 'Automobile'
	Banking_and_Finance = 'Banking and Finance'
	Beauty = 'Beauty'
	Beverages = 'Beverages'
	CasinosAndGambling = 'Casinos / Gambling'
	Construction = 'Construction'
	Consulting = 'Consulting'
	ConsumerGoods = 'Consumer Goods'
	Defense = 'Defense'
	Education = 'Education'
	Engineering = 'Engineering'
	Entertainment = 'Entertainment'
	Environment = 'Environment'
	Fashion = 'Fashion'
	FastMovingConsumerGoods = 'Fast Moving Consumer Goods'
	FinancialServices = 'Financial services'
	FitnessAndGymnastics = 'Fitness and Gymnastics'
	FoodProduction = 'Food Production'
	GeneralContractors = 'General Contractors'
	Health = 'Health'
	HumanResources = 'Human Resources'
	ICT = 'Information Communication Technology'
	Insurance = 'Insurance'
	Law = 'Law'
	LiquorWineBeer = 'Liquor, Wine, Beverages'
	Logistics = 'Logistics'
	Manufacturing = 'Manufacturing'
	Marketing = 'Marketing'
	Mortgage = 'Mortgage'
	NaturalResources = 'Natural Resources'
	OilAndGas = 'Oil and Gas'
	Photography = 'Photography'
	PrintingAndPublishing = 'Printing and Publishing'
	PublicService = 'Public Service'
	RealEstate = 'Real Estate'
	SportIndustry = 'Sport Industry'
	Security = 'Security'
	steelProduction = 'Steel Production'
	Telecommunication = 'Telecommunication'
	Textile = 'Textile'
	TimberLoggingPaperMills = 'Timber, Logging and Paper mills'
	Transportation = 'Transportation'
	TravelAndTourism = 'Travel and Tourism'
	Tobacco = 'Tobacco'
	LodgingAndToursim = 'Lodging and Tourism'
	WasteManagement = 'Waste Management'
	Others = 'Others'


class Firm(models.Model):
	name = models.CharField(max_length=100)
	email = models.EmailField()
	"""slug = AutoSlugField(populate_from='name', unique=True, 
						     always_update=False, default='')"""
	industry = models.CharField(max_length=50, choices=Industry.choices)
	country = CountryField(max_length=50, blank_label='(Select country)')
	website = models.URLField(null=True, blank=True)
	short_note = models.CharField(max_length=200)

	def __str__(self):
		return self.name

	def get_absolute_url(self):
		return reverse('firm_detail', args=[str(self.id)])


class Job(models.Model):
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	firm = models.ForeignKey(Firm, on_delete=models.CASCADE)
	title = models.CharField(max_length=50)
	"""slug = AutoSlugField(populate_from='title', unique=True, 
						     always_update=False, default='')"""
	location = models.CharField(max_length=150, help_text='Remote or Job location')
	is_full_time = models.BooleanField()
	qualification = models.TextField()
	description = models.TextField()
	time_stamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title

	def get_absolute_url(self):
		return reverse('job_detail', args=[str(self.id)])
