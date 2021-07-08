from django.http.response import HttpResponseRedirect
from django.urls import reverse
from django.shortcuts import redirect, render


# This will import all Static files fro index function
from django.contrib.staticfiles.utils import get_files
from django.contrib.staticfiles.storage import StaticFilesStorage


# This will load a perticular script required to be render
def loadFile(request, filename = 'App'):
    files = list(get_files(StaticFilesStorage(), location='frontend'))
    files = {file.replace('frontend/','/static/frontend/') for file in files if filename in file and '.txt' not in file and 'runtime' not in file}
    print(files)  
    return render(request, 'frontend/template.html', {"files": files})


def home(request):
    return loadFile(request, filename='App')

def index(request, pageName=None):
    
    return redirect('frontend:home')