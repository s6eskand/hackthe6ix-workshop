from rest_framework.generics import (
    CreateAPIView,
    ListAPIView,
    RetrieveAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from ..models import Music
from .serializers import MusicSerializer


# endpoint to create new music (POST)
class CreateMusicView(CreateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer


# endpoint to list all music related to user (GET)
class ListMusicView(ListAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer


# endpoint to get specific details of music (GET)
class RetrieveMusicView(RetrieveAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer


# endpoint to delete specific music (DEL)
class DestroyMusicView(DestroyAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer


# endpoint to edit specific music (PUT)
class UpdateMusicView(UpdateAPIView):
    queryset = Music.objects.all()
    serializer_class = MusicSerializer
