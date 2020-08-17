from rest_framework import serializers
from ..models import Music


# Music Model data serializer
class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Music
        fields = '__all__'
