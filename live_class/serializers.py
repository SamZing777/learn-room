from rest_framework import serializers


from .models import(
	LiveClass,
	Attendant,
	Question,
	Answer,
	LiveClassTranscript,
	LiveClassRecord
	)


class LiveClassSerializers(serializers.ModelSerializer):

	class Meta:
		model = LiveClass
		fields = '__all__'


class AttendantSerializer(serializers.ModelSerializer):

	class Meta:
		model = Attendant
		fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):

	class Meta:
		model = Question
		fields = '__all__'


class AnswerSerializer(serializers.ModelSerializer):

	class Meta:
		model = Answer
		fields = '__all__'


class TranscriptSerializer(serializers.ModelSerializer):

	class Meta:
		model = LiveClassTranscript
		fields = '__all__'


class RecordSerializer(serializers.ModelSerializer):

	class Meta:
		model = LiveClassRecord
		fields = '__all__'
