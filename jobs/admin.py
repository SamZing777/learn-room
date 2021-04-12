from django.contrib import admin

from .models import (
	Firm,
	Job
	)


class JobInline(admin.StackedInline):
	model = Job
	extra = 1


class FirmAdmin(admin.ModelAdmin):
	inlines = [
		JobInline
	]
	list_display = ['name', 'email', 'country']


admin.site.register(Firm, FirmAdmin)
