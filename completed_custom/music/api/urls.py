from .views import (
    MusicListCreateView,
    MusicDetailView
)
from django.urls import path

urlpatterns = [
    path('', MusicListCreateView.as_view()),
    path('/<pk>', MusicDetailView.as_view())
]
