from django.contrib import admin
from .models import User

class userTable(admin.ModelAdmin):
    list_display = ('id', 'username', 'email')

admin.site.register(User, userTable)