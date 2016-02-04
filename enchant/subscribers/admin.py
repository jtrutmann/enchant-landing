from django.contrib import admin
from enchant.subscribers import models

class SubscriberAdmin(admin.ModelAdmin):
    list_display = ("email", "last_name", "first_name", "new", "active")


admin.site.register(models.Subscriber, SubscriberAdmin)

# Register your models here.
