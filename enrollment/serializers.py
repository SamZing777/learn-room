from rest_framework import serializers

from .models import Enrolled


class EnrolledSerializers(serializers.ModelSerializer):

	class Meta:
		model = Enrolled
		fields = '__all__'
