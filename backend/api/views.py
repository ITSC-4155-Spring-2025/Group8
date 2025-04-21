from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.authtoken.models import Token

from .models import Profile  # ← import your Profile model


@api_view(['POST'])
def login_view(request):
    email = request.data.get('email')
    password = request.data.get('password')

    try:
        user = User.objects.get(email=email)
    except User.DoesNotExist:
        return Response({'error': 'Invalid email'}, status=400)

    user = authenticate(username=user.username, password=password)
    if not user:
        return Response({'error': 'Invalid password'}, status=400)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def logout_view(request):
    request.user.auth_token.delete()
    return Response({'message': 'Logged out successfully'})


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_profile(request):
    
    profile, created = Profile.objects.get_or_create(user=request.user)
    return Response({
        'username'   : request.user.username,
        'first_name' : request.user.first_name,
        'last_name'  : request.user.last_name,
        'email'      : request.user.email,
        'points'     : profile.points,   
    })


@api_view(['POST'])
def register_user(request):
    username   = request.data.get('username')
    email      = request.data.get('email')
    password   = request.data.get('password')
    first_name = request.data.get('first_name')
    last_name  = request.data.get('last_name')

    if not username or not email or not password:
        return Response({'error': 'All fields are required'}, status=400)

    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already exists'}, status=400)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already exists'}, status=400)

    user = User.objects.create(
        username=username,
        email=email,
        password=make_password(password),
        first_name=first_name,
        last_name=last_name
    )

    Profile.objects.create(user=user, points=50)

    token, _ = Token.objects.get_or_create(user=user)
    return Response({'message': 'User created successfully', 'token': token.key})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def award_points(request):
    """
    Call this with { points: <amount> } (default 50)
    to increment the authenticated user’s tally.
    """
    profile, created = Profile.objects.get_or_create(user=request.user)
    increment = int(request.data.get('points', 50))
    profile.points += increment
    profile.save()
    return Response({'points': profile.points})
