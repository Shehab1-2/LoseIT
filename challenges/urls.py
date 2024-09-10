from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_challenges, name='get_all_challenges'),
    path('add/', views.add_challenge, name='add_challenge'),
    path('update/<int:id>/', views.update_challenge, name='update_challenge'),
    path('delete/<int:id>/', views.delete_challenge, name='delete_challenge'),
    path('<int:id>/', views.get_challenge_by_id, name='get_challenge_by_id'),
]
