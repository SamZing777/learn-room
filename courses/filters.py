from django_filters import FilterSet, CharFilter, NumberFilter

from .models import Course


class CourseFilter(FilterSet):
	title = CharFilter(name='title', lookup_type='icontains', distinct=True)
	category = CharFilter(name='category__title', lookup_type='icontains', distinct=True)
	category_id = CharFilter(name='category__id', lookup_type='icontains', distinct=True)
	self_pace_price = NumberFilter(name='self_pace_price', lookup_type='gte', distinct=True) # (some_price__gte=somequery)
	our_live_class_price = NumberFilter(name='our_live_class_price', lookup_type='lte', distinct=True)
	class Meta:
		model = Course
		fields = [
			'self_pace_price',
			'our_live_class_price',
			'category',
			'title',
			'description',
		]
