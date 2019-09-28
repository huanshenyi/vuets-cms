__author__ = "txy1226052@gmail.com"

from rest_framework.serializers import ModelSerializer
from .models import UserProfile


class UserSerializer(ModelSerializer):
    class Meta:
        model = UserProfile
        fields = "__all__"