from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator
from djmoney.models.fields import MoneyField

User = get_user_model()


class CourseCategory(models.Model):
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Course Categories'


class CourseSubCategory(models.Model):
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE,
                        related_name='sub_categories')
    name = models.CharField(max_length=40)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'Course Sub Categories'


class Course(models.Model):

    STATUS = (
        ('Draft', 'Draft'),
        ('Published', 'Published')
    )

    title = models.CharField(max_length=100)
    instructor = models.ForeignKey(User, on_delete=models.CASCADE,
                        related_name='course_instructor')
    category = models.ForeignKey(CourseCategory, on_delete=models.CASCADE,
                        related_name='courses')
    sub_category = models.ForeignKey(CourseSubCategory, on_delete=models.CASCADE,
                        related_name='sub_courses')
    status = models.CharField(max_length=10, choices=STATUS, default="Draft")
    thumb_nail = models.FileField(help_text='A cover image for your Course')
    short_note = models.CharField(max_length=250)
    description = models.TextField()
    language = models.CharField(max_length=20)
    is_self_pace = models.BooleanField()
    is_live_class = models.BooleanField()
    self_pace_price = MoneyField(max_digits=14, decimal_places=2,
                        null=True, blank=True)
    live_class_price = MoneyField(max_digits=14, decimal_places=2,
                        null=True, blank=True)
    date_updated = models.DateField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

"""
    class Meta:
        ordering = []
"""


class Requirement(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    requirement = models.CharField(max_length=200)

    def __str__(self):
        return self.requirement


class WhatToLearn(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    content = models.CharField(max_length=200)

    def __str__(self):
        return self.content


class Section(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                    related_name='course_section')
    title = models.CharField(max_length=100)

    def __str__(self):
        return self.title


class Lesson(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                    related_name='course_lessons')
    title = models.CharField(max_length=100)
    Section = models.ForeignKey(Section, on_delete=models.CASCADE,
                    related_name='lesson_sections')
    video = models.FileField(help_text='Recorded Video of your course')
    lesson_file = models.FileField(
        help_text='File (PDF, excel etc to enhance students learning', null=True, blank=True)
    url = models.URLField(null=True, blank=True)
    can_preview = models.BooleanField()
    duration = models.FloatField(validators=[MinValueValidator(0.10), MaxValueValidator(25.00)])
    date_updated = models.DateField(auto_now=True)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
