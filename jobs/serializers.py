from rest_framework import serializers

from .models import Job


class JobSerializer(serializers.ModelSerializer):

	class Meta:
		model = Job
		fields = '__all__'

	# category = models.ForeignKey(Category, on_delete=models.CASCADE)
	
	# firm = models.ForeignKey(Firm, on_delete=models.CASCADE)
	# title = models.CharField(max_length=50)
	# slug = AutoSlugField(populate_from='title', unique=True, 
	# 		     always_update=False, default='')
	# location = models.CharField(max_length=150)
	# is_full_time = models.BooleanField()
	# qualification = models.TextField()
	# description = models.TextField()
	# time_stamp = models.DateTimeField(auto_now_add=True)