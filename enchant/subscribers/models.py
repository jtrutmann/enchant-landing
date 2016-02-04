from django.db import models


class SubscriberQuerySet(models.QuerySet):

    def active(self):
        return self.filter(active = True)

class Subscriber(models.Model):
    first_name = models.CharField(max_length = 50, null=True, blank=True)
    last_name = models.CharField(max_length = 50, null=True, blank=True)
    email = models.EmailField()
    new = models.BooleanField(default=True)
    active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add = True)

    objects = SubscriberQuerySet.as_manager()

    def __str__(self):
        return self.email

    class meta:
        verbose_name = "Subscriber"
        verbose_name_plural = "Subscribers"
        # ordering = ["-created_at"]

# Create your models here.
