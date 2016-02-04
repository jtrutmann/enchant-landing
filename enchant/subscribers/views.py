# from django.shortcuts import render
# from enchant.articles.models import Article
from rest_framework import viewsets
from rest_framework import generics, permissions
from enchant.subscribers.models import Subscriber
from enchant.subscribers.serializers import SubscriberSerializer
from rest_framework.permissions import AllowAny


# --------------------------------------------------
# Views
# --------------------------------------------------

# class ArticleList(generics.ListCreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     # permission_classes = (permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly,)

# class ArticleDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Article.objects.all()
#     serializer_class = ArticleSerializer
#     # permission_classes = (IsOwnerOrReadOnly,)

class SubscriberViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Subscriber.objects.all()
    serializer_class = SubscriberSerializer
    permission_classes = [AllowAny]
