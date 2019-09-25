from django.contrib import admin

from django.contrib import admin

from .models import UserProfile


class UserProfileAdmin(admin.ModelAdmin):
    list_display = ("id", "username", "email",)
    search_fields = ("username",)


admin.site.register(UserProfile, UserProfileAdmin)
