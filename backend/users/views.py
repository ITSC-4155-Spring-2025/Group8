from rest_framework import generics
from .models import User
from .serializers import useSerializer

class CreateUserList(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = useSerializer

class ListUserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = useSerializer

class GetUserList(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = useSerializer