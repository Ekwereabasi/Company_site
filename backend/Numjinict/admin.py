from django.contrib import admin
from .models import ContactForm

@admin.register(ContactForm)
class ContactFormAdmin(admin.ModelAdmin):
   list_display = ('name', 'email', 'phone', 'subscribe', 'created_at')
   list_filter = ('subscribe', 'created_at')
   search_fields = ('name', 'email', 'phone', 'project_info')
   readonly_fields = ('created_at',)

   def has_add_permission(self, request):
     #    Allow add permission
       return True

   def has_delete_permission(self, request, obj=None):
     #    Allow delete permission
       return True

