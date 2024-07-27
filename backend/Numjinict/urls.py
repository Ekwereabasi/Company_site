from django.urls import path
from . import views

urlpatterns = [
   path('api/contact/', views.submit_contact_form, name='submit_contact_form'),
   path('contact/', views.contact_form, name='contact_form'),
]

