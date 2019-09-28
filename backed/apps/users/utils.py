__author__ = "txy1226052@gmail.com"
from .models import UserProfile
from .serializer import UserSerializer


def jwt_response_payload_handler(token, user=None, request=None):
    """为返回的结果添加用户相关信息"""
    data = {
        'token': token,
        # 'user_id': UserProfile.id,
        # 'username': UserProfile.username,
        # 'authority': UserProfile.authority,
        # 'icon': UserProfile.icon,
        # 'email': UserProfile.email
        'user': UserSerializer(user, context={'request': request}).data
    }
    return data