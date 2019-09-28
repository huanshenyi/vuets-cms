from django.db import models
from django.contrib.auth.models import AbstractUser


class UserProfile(AbstractUser):
    """
    ユーザー
    """
    AUTHORITY_TYPE = (
        (1, "admin"),
        (2, "editor"),
        (3, "visitor")
    )
    name = models.CharField(max_length=30, null=True, blank=True, default="未入力", verbose_name="ユーザー")
    email = models.CharField(max_length=100, null=True, blank=True, verbose_name="アドレス")
    icon = models.ImageField(max_length=200, upload_to="users/icon/",
                                          null=True, blank=True, verbose_name="アイコン")
    authority = models.IntegerField(choices=AUTHORITY_TYPE, help_text="権限", verbose_name="権限", default=3)

    class Meta:
        verbose_name = "ユーザー"
        verbose_name_plural = verbose_name

    def __str__(self):
        return self.name
