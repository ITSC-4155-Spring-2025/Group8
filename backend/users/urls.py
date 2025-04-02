# Evan Stark - April 1st 2025 - ITCS 4155 002
# Creating URL patterns for operations done on the users model.
# SOURCE USED: https://www.youtube.com/watch?v=5g_xIwxLSJk

from django.urls import path
from . import views

urlpatterns = [
    path('', views.get_all_users)
]