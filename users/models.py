from django.db import models
from django.contrib.auth.models import AbstractUser
from django_countries.fields import CountryField


class User(AbstractUser):
    country = CountryField(blank_label='(select country)')
    is_student = models.BooleanField(default=True)
    is_instructor = models.BooleanField(default=False, null=True, blank=True)
    pass

    def __str__(self):
        return self.email
