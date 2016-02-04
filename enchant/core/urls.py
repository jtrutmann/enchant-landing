from django.conf.urls import url
from enchant.core import views

urlpatterns = [
    url(r'^$', 'enchant.core.views.index'),
]
