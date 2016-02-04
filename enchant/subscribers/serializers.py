from enchant.subscribers.models import Subscriber
from rest_framework import serializers

# Serializers define the API representation.
class SubscriberSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Subscriber
        fields = ('id', 'email', 'first_name', 'last_name', 'active', 'new')