from rest_framework import serializers
from .models import Fixture
from .models import Partner
from .models import News
from .models import FeaturedPlayer


class FixtureSerializer(serializers.ModelSerializer):
    match_day = serializers.SerializerMethodField()
    match_time = serializers.SerializerMethodField()

    def get_match_day(self, obj):
        return obj.match_date.strftime('%A')  

    def get_match_time(self, obj):
        return obj.match_date.strftime('%I:%M %p') 

    class FixtureSerializer(serializers.ModelSerializer):
        image_url = serializers.SerializerMethodField()

    def get_image_url(self, obj):
        request = self.context.get("request")  # Get request context
        if obj.image:
            return request.build_absolute_uri(obj.image.url)  # Return full URL
        return None


    class Meta:
        model = Fixture
        fields = "__all__"  
        extra_fields = ['match_day', 'match_time'] 


    
class PartnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = "__all__"


class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = '__all__'



class FeaturedPlayerSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = FeaturedPlayer
        fields = '__all__'
        
    def get_image_url(self, obj):
        request = self.context.get('request')
        if obj.image and request:
            return request.build_absolute_uri(obj.image.url)
        return None
