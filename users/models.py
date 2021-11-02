from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator


class User(AbstractUser):
	id_student = models.CharField(primary_key=True, max_length=10, validators=[RegexValidator(r'^\d{1,10}$')])
	is_instructor = models.BooleanField(default=False)

	def __str__(self):
		return self.email


class Instructor(models.Model): 
	user = models.ForeignKey(User, on_delete=models.CASCADE)
	about = models.TextField()
	occupation = models.CharField(max_length=200)
	is_bestSeller = models.BooleanField(default=False)

	def __str__(self):
		return str(self.user)


class Profile(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	picture = models.CharField(max_length=20)
	mobile_number = models.CharField(max_length=20)
	country = models.CharField(max_length=50)
	bio = models.CharField(max_length=255,
	 help_text='A short sentence about you as a student',
	 default='Enthusiastic....')

	def __str__(self):
		return str(self.user)

"""
	@receiver(post_save, sender=User)
	def create_user_profile(sender, instance, created, **kwargs):
		if created:
			Profile.objects.create(user=instance)
"""




# Admin
# lradmin123
