from django.contrib.auth import authenticate
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from .models import CustomUser as User
from .serializers import useSerializer
from django.contrib.auth.hashers import make_password


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
    return Response({
        'username': request.user.username,
        'first_name': request.user.first_name,
        'last_name': request.user.last_name,
        'email': request.user.email,
        'points': request.user.points
    })


@api_view(['POST'])
def register_user(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    first_name = request.data.get('first_name')
    last_name = request.data.get('last_name')

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
        last_name=last_name,
         points=50
    )

    token, _ = Token.objects.get_or_create(user=user)
    return Response({'message': 'User created successfully', 'token': token.key})


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def update_points(request):
    points_earned = request.data.get('points_earned', 50)
    user = request.user

    if points_earned < 0:
        return Response({"error": "Points earned cannot be negative."}, status=400)

    user.points += points_earned
    user.save()

    return Response({"message": "Points updated successfully", "points": user.points})


class LeaderboardView(APIView):
    def get(self, request):
        leaderboard = User.objects.all().order_by('-points')
        serializer = useSerializer(leaderboard, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def award_points(request):
    user = request.user
    increment = int(request.data.get('points', 50))
    if increment < 0:
        return Response({'error': 'Points must be a positive number'}, status=400)
    user.points += increment
    user.save()

    return Response({'points': user.points})