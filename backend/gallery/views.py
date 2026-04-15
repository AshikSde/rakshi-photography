from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Category, Inquiry
from .serializers import CategorySerializer, InquirySerializer

@api_view(['GET'])
def get_categories(request):
    categories = Category.objects.all()
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def create_inquiry(request):
    serializer = InquirySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Saved successfully"})

    return Response(serializer.errors, status=400)