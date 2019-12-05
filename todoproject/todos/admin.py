from django.contrib import admin

# Register your models here.
from .models import Todo

class TodoAdmin(admin.ModelAdmin):  # add this
      list_display = ('title', 'content')

admin.site.register(Todo, TodoAdmin)