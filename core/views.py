from django.shortcuts import render

from django.conf import settings
# Create your views here.


def chat(request):
    c = {
        "ABLY_KEY" :settings.ABLY_KEY
    }
    return render(request,'core/index.html',c)