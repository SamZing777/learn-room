from django.contrib import admin

from .models import (
	Category,
	SubCategory,
	Course,
	Part,
	Section,
	Lesson
	)


class PartInline(admin.StackedInline):
	model = Part
	extra = 1


class SectionInline(admin.StackedInline):
	model = Section
	extra = 1


class LessonInline(admin.TabularInline):
	model = Lesson
	extra = 1


class CourseAdmin(admin.ModelAdmin):
	inlines = [
		PartInline,
		SectionInline,
		LessonInline
	]
	list_display = ['title', 'is_self_paced', 'is_live_class']


admin.site.register(Category)
admin.site.register(SubCategory)
admin.site.register(Course, CourseAdmin)
