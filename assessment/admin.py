from django.contrib import admin

from .models import (
		Quiz,
		Option,
		Project,
		StudentQuizAnswer,
		StudentQuizScore,
		StudentProjectReport,
		StudentProjectScore
	)


class OptionInline(admin.TabularInline):
	model = Option
	extra = 2


class StudentQuizAnswerInline(admin.TabularInline):
	model = StudentQuizAnswer
	extra = 1


class StudentQuizScoreInline(admin.TabularInline):
	model = StudentQuizScore
	extra = 1


class QuizAdmin(admin.ModelAdmin):
	inlines = [
		OptionInline,
		StudentQuizAnswerInline,
		StudentQuizScoreInline
	]
	list_display = ['course', 'lesson', 'section']


class StudentProjectReportInline(admin.StackedInline):
	model = StudentProjectReport
	extra = 1


class StudentProjectScoreInline(admin.StackedInline):
	model = StudentProjectReport
	extra = 1


class ProjectAdmin(admin.ModelAdmin):
	inlines = [
		StudentProjectReportInline,
		StudentProjectScoreInline
	]
	list_display = ['course', 'lesson', 'topic']


admin.site.register(Quiz, QuizAdmin)
admin.site.register(Project, ProjectAdmin)
