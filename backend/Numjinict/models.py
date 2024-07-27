from django.db import models


class ContactForm(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20, blank=True, null=True)
    project_info = models.TextField()
    file = models.FileField(upload_to='uploads/', blank=True, null=True)
    subscribe = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

