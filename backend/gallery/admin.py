from django.contrib import admin
from .models import Category, Album, Photo, Inquiry

admin.site.register(Category)
admin.site.register(Album)
admin.site.register(Photo)
admin.site.register(Inquiry)