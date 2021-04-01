from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from django.contrib.auth import get_user_model

from .models import UserProfile, Instructor


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model() 
        fields = ['first_name', 'last_name', 'email', 'password']
        extra_kwargs = {'password': {'write_only':True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = UserProfile
        fields = '__all__'
        lookup_field = id

class InstructorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Instructor
        fields = '__all__'