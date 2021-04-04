from rest_framework import serializers

from .models import (
	Enrolled,
	StudentFeedback
	)


class EnrolledSerializers(serializers.HyLinkedModelSerializer):

	class Meta:
		model = Enrolled
		fields = '__all__'


class StudentFeedbackSerializers(serializers.ModelSerializer):

	class Meta:
		model = StudentFeedback
		fields = '__all__'
