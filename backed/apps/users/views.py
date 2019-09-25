from django.shortcuts import render
from django.views import View
from django.http import response, HttpResponse
import json


def UserView(request):
    response = HttpResponse('<h1>知了课堂</h1>')
    return response
