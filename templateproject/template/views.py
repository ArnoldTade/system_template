from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import *
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User


# Create your views here.
def user_login(request):
    if request.user.is_authenticated:
        return redirect("home")
    login_label = "Login"
    if request.method == "POST":
        userform = LoginForm(request.POST)
        if userform.is_valid():
            username = userform.cleaned_data["username"]
            password = userform.cleaned_data["password"]
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(
                    request,
                    f"Welcome {request.user}",
                )
                return redirect("home")
            else:
                messages.warning(request, "Wrong username or password")
    loginform = LoginForm()
    return render(
        request,
        "login.html",
        {
            "login_label": login_label,
            "loginform": loginform,
        },
    )


@login_required
def home(request):
    chat_users = User.objects.all()
    context = {
        "chat_users": chat_users,
    }
    return render(request, "home.html", context)


@login_required
def user_logout(request):
    logout(request)
    return redirect("login")


@login_required
def profile(request):
    return render(request, "profile.html")
