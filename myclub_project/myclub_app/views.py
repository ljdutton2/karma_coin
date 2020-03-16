from django.shortcuts import render
from datetime import datetime
from django.http import HttpResponse
from django.views import View 
# Create your views here.
class helloworld(View):  # Create a view class

    # Change the function-based view to be called get and add the self param
    def get(self, request):
        html = "<html><body>Hello World</body></html>"
        return HttpResponse(html)

    
def show_the_time(request):
    now = datetime.now()
    html = "<html><body>It is now {}</body></html>".format(now)
    return HttpResponse(html)       