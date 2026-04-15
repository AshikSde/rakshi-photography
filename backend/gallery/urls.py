from django.urls import path
from .views import get_categories, create_inquiry

urlpatterns = [
    path('categories/', get_categories),
    path('inquiry/', create_inquiry),
]