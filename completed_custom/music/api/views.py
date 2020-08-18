from rest_framework import views, status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .serializers import MusicSerializer
from ..models import Music


class MusicListCreateView(views.APIView):

    def get(self, request):
        queryset = Music.objects.all()
        serializer = MusicSerializer(queryset, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MusicSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({
            "error": "invalid data"
        }, status=status.HTTP_400_BAD_REQUEST)


class MusicDetailView(views.APIView):

    def get(self, request, pk=None):
        song = Music.objects.get(pk=pk)
        serializer = MusicSerializer(song)
        return Response(serializer.data)

    def put(self, request, pk):
        song = Music.objects.get(pk=pk)
        serializer = MusicSerializer(song, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({
            "error": "could not update"
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        song = Music.objects.get(pk=pk)
        song.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
