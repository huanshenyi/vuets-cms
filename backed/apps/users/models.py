from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    """
    ユーザー
    """
    name = models.CharField(max_length=30, null=True, blank=True, verbose_name="ユーザー")
    email = models.CharField(max_length=100, null=True, blank=True, verbose_name="アドレス")
    icon = models.ImageField(max_length=200, upload_to="users/icon/",
                                          null=True, blank=True, verbose_name="アイコン")

    class Meta:
        verbose_name = "ユーザー"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name
