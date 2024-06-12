from template import views
from django.urls import path

urlpatterns = [
    path("", views.home, name="home"),
    path("profile/", views.profile, name="profile"),
    path("tables/", views.tables, name="tables"),
    path("chat/", views.chat, name="chat"),
    path("login/", views.user_login, name="login"),
    path("logout/", views.user_logout, name="logout"),
]
