from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from .models import ContactForm
from .serializers import ContactFormSerializer

@api_view(['POST'])
@parser_classes([MultiPartParser, FormParser])
def submit_contact_form(request):
    serializer = ContactFormSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def contact_form(request):
    return render(request, 'contact_form.html')

