from django.contrib import admin

from .models import (
	Category,
	SubCategory,
	Course,
	Part,
	Section,
	Lesson,
	StudentFeedback,
	FeaturedReview,
	Rating
	)


class PartInline(admin.StackedInline):
	model = Part
	extra = 1


class SectionInline(admin.StackedInline):
	model = Section
	extra = 1


class CourseAdmin(admin.ModelAdmin):
	inlines = [
		PartInline,
		SectionInline
	]

	list_display = ['title', 'is_self_paced', 'is_live_class']


class ReviewInline(admin.StackedInline):
	model = FeaturedReview
	extra = 1


class FeedbackAdmin(admin.ModelAdmin):
	inlines = [
		ReviewInline
	]
	list_display = ['student', 'course', 'ratings']


admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Course, CourseAdmin)
admin.site.register(Lesson)
admin.site.register(StudentFeedback, FeedbackAdmin)
admin.site.register(Rating)
