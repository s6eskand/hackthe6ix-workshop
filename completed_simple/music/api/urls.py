from django.urls import path
from .views import (
    CreateMusicView,
    ListMusicView,
    RetrieveMusicView,
    DestroyMusicView,
    UpdateMusicView
)

urlpatterns = [
    path('create', CreateMusicView.as_view()),
    path('', ListMusicView.as_view()),
    path('detail/<pk>', RetrieveMusicView.as_view()),
    path('delete/<pk>', DestroyMusicView.as_view()),
    path('edit/<pk>', UpdateMusicView.as_view()),
]
