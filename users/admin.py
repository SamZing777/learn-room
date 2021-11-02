from django.contrib import admin

from .models import User


class UserAdmin(admin.ModelAdmin):
	list_display = ['username', 'first_name', 'last_name', 'email', 'is_staff', 'is_active']


admin.site.register(User, UserAdmin)


# Admin
# lradmin123