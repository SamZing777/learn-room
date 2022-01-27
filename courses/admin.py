from django.contrib import admin

from .models import (
    CourseCategory,
    CourseSubCategory,
    Course,
    Section,
    Lesson
)


class SubCategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'category']


class SectionInline(admin.StackedInline):
    model = Section
    extra = 1


class LessonInline(admin.StackedInline):
    model = Lesson
    extra = 1


class CourseAdmin(admin.ModelAdmin):
    list_display = ['title', 'category']
    inlines = [
        SectionInline,
        LessonInline
        ]


admin.site.register(CourseCategory)
admin.site.register(CourseSubCategory, SubCategoryAdmin)
admin.site.register(Course, CourseAdmin)
