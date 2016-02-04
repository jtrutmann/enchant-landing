from django.conf.urls import include, url
from django.contrib import admin
from rest_framework import routers
# from enchant.articles.views import ArticleViewSet
# from enchant.jobs.views import JobViewSet, JobApplicationViewSet
from enchant.subscribers.views import SubscriberViewSet



router = routers.DefaultRouter()
# router.register(r'job-app', JobApplicationUploadView)
# router.register(r'jobapplications', JobApplicationViewSet)
# router.register(r'jobs', JobViewSet)
# router.register(r'articles', ArticleViewSet)
router.register(r'subscribers', SubscriberViewSet)


urlpatterns = [
    # Examples:
    url(r'^', include('enchant.core.urls')),

    url(r'^admin/', include(admin.site.urls)),
    # url(r'^markdown/', include("django_markdown.urls")),
    # url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^api/', include(router.urls)),
    # url(r'^api/job-app', JobApplicationUploadView.as_view(), name='job-app-upload'),
]
