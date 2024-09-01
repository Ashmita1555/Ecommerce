

from django.contrib import admin
from django.contrib import admin
from .models import UserDetails

class UserDetailsAdmin(admin.ModelAdmin):
    list_display = ('fname', 'lname','uname','email', 'address','gender', 'joined_date')
    search_fields = ('uname', 'email')
    readonly_fields = ('joined_date',)

admin.site.register(UserDetails, UserDetailsAdmin)


