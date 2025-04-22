from django.urls import path
from .views import login_view, logout_view, user_profile, LeaderboardView, update_points, register_user, award_points 

urlpatterns = [
    path('login/', login_view),
    path('logout/', logout_view),
    path('user/', user_profile),
    path('register/', register_user),
    path('user/profile/', user_profile),
    path('leaderboard/', LeaderboardView.as_view(), name='leaderboard'), 
    path('update-points/', update_points, name='update_points'),
    path('award_points/', award_points),
]
