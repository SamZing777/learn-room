from django.contrib import admin

from .models import (
    StudentFeedback,
    FeaturedReview
)


class StudentFeedbackAdmin(admin.ModelAdmin):
    list_display = ['user', 'course', 'ratings']


class FeaturedReviewAdmin(admin.ModelAdmin):
    list_display = ['course', 'instructor']


admin.site.register(StudentFeedback, StudentFeedbackAdmin)
admin.site.register(FeaturedReview, FeaturedReviewAdmin)
