from django.contrib import admin

from .models import (
		Enrolled,
		UserCheckOut,
		Order,
		UserAddress
	)


admin.site.register(Enrolled)
admin.site.register(UserCheckOut)
admin.site.register(Order)
admin.site.register(UserAddress)
