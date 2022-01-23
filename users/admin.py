from django.contrib import admin

from .models import User


class UserAdmin(admin.ModelAdmin):
    list_display = ['username', 'email', 'country', 'is_active']


admin.site.register(User, UserAdmin)


"""
    Admin
    lrAdmin123
"""
