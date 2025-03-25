from django.urls import path
from .views import GetUserList, CreateUserList, ListUserList

urlpatterns = [
    path('users/', ListUserList.as_view(), name='Users_List'), 
    path('users/create/', CreateUserList.as_view(), name='Users_Post'),  
    path('users/<int:pk>/', GetUserList.as_view(), name='User_Get'),  
]
