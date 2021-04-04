from django.db import models
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.timezone import now
from autoslug import AutoSlugField
from djmoney.models.fields import MoneyField
from djmoney.models.validators import MaxMoneyValidator, MinMoneyValidator

from users.models import User


"""
class CategoryTag(models.TextChoices):
    ACADEMICS = 'Academics',
    LINGUISTICS = 'Linguistics',
    MASTER_CLASS = 'Master Class',
    PROFESSIONAL = 'Professional',
    TECHNOLOGY = 'Technology',
    VOCATIONAL = 'Vocational'

"""


class Category(models.Model):
	name = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='name', unique=True, 
			     always_update=False, default='')
	image = models.CharField(max_length=20)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = 'Categories'


class SubCategory(models.Model):
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	name = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='name', unique=True, 
			     always_update=False, default='')
	image = models.CharField(max_length=20)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name_plural = 'Sub Categories'



class Course(models.Model):
	STATUS = (
			('Draft', 'DRAFT'),
			('Publush', 'PUBLISH')
		)


	instructor = models.ForeignKey(User, on_delete=models.CASCADE)
	title = models.CharField(max_length=100)
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	sub_category = models.ForeignKey(SubCategory, on_delete=models.CASCADE,
					null=True, blank=True)
	slug = AutoSlugField(populate_from='title', unique=True, 
			     always_update=False, default='')
	thumb_nail = models.CharField(max_length=20, help_text='A cover image for your course')
	short_note = models.CharField(max_length=250)
	description = models.TextField()
	requirements = models.TextField()
	what_you_will_learn = models.TextField()
	language = models.CharField(max_length=100)
	is_self_paced = models.BooleanField(default=True, null=True, blank=True)
	is_live_class = models.BooleanField(default=True, null=True, blank=True)
	is_free_for_self_paced = models.BooleanField(default=False)
	is_free_for_live_class = models.BooleanField(default=False)
	self_paced_price = MoneyField(max_digits=14, decimal_places=2, default_currency='USD',
						validators=[
					            MinMoneyValidator(5),
					            MaxMoneyValidator(50),])
	live_class_price = MoneyField(max_digits=14, decimal_places=2, default_currency='USD',
						validators=[
					            MinMoneyValidator(20),
					            MaxMoneyValidator(1000),])
	our_live_class_price = MoneyField(max_digits=14, decimal_places=2, default_currency='USD',
								validators=[
					            MinMoneyValidator(40),
					            MaxMoneyValidator(5000),])
	is_published = models.BooleanField(default=False)
	status = models.CharField(max_length=10, choices=STATUS)
	date_created = models.DateTimeField(auto_now_add=True)
	last_updated = models.DateTimeField(default=now)

	def __str__(self):
	    return self.title

"""
class CourseContent(models.Model):
	title = models.CharField(max_length=100)
	category = models.ForeignKey(Course, on_delete=models.CASCADE)
	description = models.TextField()
	timeStamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.title
"""



class Part(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)
	name = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='name', unique=True, 
			     always_update=False, default='')

	def __str__(self):
		return self.name


class Section(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)
	part = models.ForeignKey(Part, on_delete=models.CASCADE)
	name = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='name', unique=True, 
			     always_update=False, default='')

	def __str__(self):
		return self.name



class Lesson(models.Model):
	title = models.CharField(max_length=100)
	Course = models.ForeignKey(Course, on_delete=models.CASCADE)
	SubCategory = models.ForeignKey(SubCategory, on_delete=models.CASCADE)
	slug = AutoSlugField(populate_from='title', unique=True, 
			     always_update=False, default='')
	part = models.ForeignKey(Part, on_delete=models.CASCADE)
	section = models.ForeignKey(Section, on_delete=models.CASCADE)
	video = models.FileField(null=True, blank=True)
	material = models.FileField(null=True, blank=True)
	can_preview = models.BooleanField(default=False)
	duration = models.FloatField(validators=[MinValueValidator(0.30), MaxValueValidator(30.00)])
	timeStamp = models.DateTimeField(auto_now_add=True)

	def  __str__(self):
		return self.title


"""
class StudentFeedBack(models.Model):
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	ratings = [MaxValueValidator(5)]
	review = models.TextField()
	timeStamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.course)


class FeatureReview(models.Model):
	review = models.ForeignKey(StudentFeedBack, on_delete=models.CASCADE)
	timeStamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.course)


# id_student = models.CharField(primary_key=True, max_length=10, validators=[RegexValidator(r'^\d{1,10}$')])
"""