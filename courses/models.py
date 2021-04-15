from django.db import models
from django.urls import reverse
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.timezone import now
from autoslug import AutoSlugField
from djmoney.models.fields import MoneyField

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

class CourseQuerySet(models.query.QuerySet):
	def active(self):
		return self.filter(is_published=True)


class CourseManager(models.Manager):
	def get_queryset(self):
		return CourseQuerySet(self.model, using=self._db)

	def all(self, *args, **kwargs):
		return self.get_queryset().active()

	def get_related(self, instance):
		course_one = self.get_queryset().filter(categories__in=instance.category.all())
		course_two = self.get_queryset().filter(default=instance.default)
		qs = (course_one | course_two).exclude(id=instance.id).distinct()
		return qs


class Category(models.Model):
	name = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='name', unique=True, 
			     always_update=False, default='')
	image = models.FileField(max_length=20)

	def __str__(self):
		return self.name

	def get_absolute_url(self):
		return reverse('course_category', args=[str(self.slug)])

	class Meta:
		verbose_name_plural = 'Categories'



class SubCategory(models.Model):
	category = models.ForeignKey(Category, on_delete=models.CASCADE)
	name = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='name', unique=True, 
			     always_update=False, default='')

	def __str__(self):
		return self.name

	def get_absolute_url(self):
		return reverse('sub_category', args=[str(self.slug)])

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
	thumb_nail = models.FileField(help_text='A cover image for your Course')
	short_note = models.CharField(max_length=250)
	description = models.TextField()
	requirements = models.TextField()
	what_you_will_learn = models.TextField()
	language = models.CharField(max_length=100)
	is_self_paced = models.BooleanField(default=True, null=True, blank=True)
	is_live_class = models.BooleanField(default=True, null=True, blank=True)
	is_free_for_self_paced = models.BooleanField(default=False)
	is_free_for_live_class = models.BooleanField(default=False)
	self_paced_price = MoneyField(max_digits=14, decimal_places=2, 
								  default_currency='USD', null=True, blank=True)
	live_class_price = MoneyField(max_digits=14, decimal_places=2,
								  default_currency='USD', null=True, blank=True)
	our_live_class_price = MoneyField(max_digits=14, decimal_places=2, 
								  default_currency='USD', null=True, blank=True)
	is_published = models.BooleanField(default=False)
	status = models.CharField(max_length=10, choices=STATUS)
	date_created = models.DateTimeField(auto_now_add=True)
	last_updated = models.DateTimeField(default=now)

	def __str__(self):
	    return self.title

	def get_absolute_url(self):
		return reverse('course_detail', args=[str(self.slug)])

	def no_of_ratings(self):
		ratings = Rating.objects.filter(movie=self)
		return len(ratings)

	def avg_rating(self):
		sum = 0
		ratings = Rating.objects.filter(movie=self)

		for rating in ratings:
		    sum += rating.stars

		if len(ratings) > 0:
		    return sum / len(ratings)
		else:
		    return 0

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

	def get_absolute_url(self):
		return reverse('part_content', args=[str(self.id)])


class Section(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE, null=True, blank=True)
	part = models.ForeignKey(Part, on_delete=models.CASCADE)
	name = models.CharField(max_length=50)
	slug = AutoSlugField(populate_from='name', unique=True, 
			     always_update=False, default='')

	def __str__(self):
		return self.name

	def get_absolute_url(self):
		return reverse('section_content', args=[str(self.id)])



class Lesson(models.Model):
	title = models.CharField(max_length=100)
	Course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name='course_content')
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

	def get_absolute_url(self):
		return reverse('lesson_content', args=[str(self.slug)])


class StudentFeedback(models.Model):
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	ratings = models.FloatField(default=4.5, validators=[MaxValueValidator(5)])
	review = models.TextField()
	timeStamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.course)

	def get_absolute_url(self):
		return reverse('student_feedback', args=[str(self.slug)])


class FeaturedReview(models.Model):
	review = models.ForeignKey(StudentFeedback, on_delete=models.CASCADE)
	short_note = models.CharField(max_length=50, default='Thanks')
	timeStamp = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return str(self.review)


class Rating(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    stars = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])

    class Meta:
        unique_together = (('user', 'course'),)
        index_together = (('user', 'course'),)
