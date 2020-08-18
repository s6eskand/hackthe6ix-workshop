from rest_framework import views, status
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import MusicSerializer
from ..models import Music


class MusicListCreateView(views.APIView):

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request):
        queryset = Music.objects.filter(owner=self.request.user)
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

    permission_classes = [
        permissions.IsAuthenticated
    ]

    def get(self, request, pk=None):
        queryset = Music.objects.filter(owner=self.request.user)
        song = queryset.get(pk=pk)
        serializer = MusicSerializer(song)
        return Response(serializer.data)

    def put(self, request, pk):
        queryset = Music.objects.filter(owner=self.request.user)
        song = queryset.get(pk=pk)
        serializer = MusicSerializer(song, request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response({
            "error": "could not update"
        }, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        queryset = Music.objects.filter(owner=self.request.user)
        song = queryset.get(pk=pk)
        song.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)