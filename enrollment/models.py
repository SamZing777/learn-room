from django.db import models
from decimal import Decimal
from django.conf import settings
from django.urls import reverse
from django.db.models.signals import pre_save, post_save

from users.models import User
from courses.models import Course
from carts.models import Cart


class Enrolled(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE)
	student = models.ForeignKey(User, on_delete=models.CASCADE)
	timeStamp = models.DateTimeField(auto_now_add=True)
	used_coupon = models.BooleanField(default=False)

	def __str__(self):
		return str(self.course)


class UserCheckOut(models.Model):
	user = models.OneToOneField(User, null=True, blank=True,
					on_delete=models.CASCADE) #not required
	email = models.EmailField(unique=True) #--> required
	braintree_id = models.CharField(max_length=120, null=True, blank=True)

	def __unicode__(self): #def __str__(self):
		return self.email



ADDRESS_TYPE = (
	('billing', 'Billing'),
	('shipping', 'Shipping'),
)


class UserAddress(models.Model):
	user = models.ForeignKey(UserCheckOut, on_delete=models.CASCADE)
	address_type = models.CharField(max_length=120, choices=ADDRESS_TYPE)
	street = models.CharField(max_length=120)
	city = models.CharField(max_length=120)
	state = models.CharField(max_length=120)
	zipcode = models.CharField(max_length=120)

	def __unicode__(self):
		return self.street

	def get_address(self):
		return "%s, %s, %s %s" %(self.street, self.city, self.state, self.zipcode)


ORDER_STATUS_CHOICES = (
	('created', 'Created'),
	('paid', 'Paid'),
	('refunded', 'Refunded'),
)


class Order(models.Model):
	status = models.CharField(max_length=120, choices=ORDER_STATUS_CHOICES, default='created')
	cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
	user = models.ForeignKey(UserCheckOut, null=True, on_delete=models.CASCADE)
	billing_address = models.ForeignKey(UserAddress, related_name='billing_address', null=True,
						on_delete=models.CASCADE)
	order_total = models.DecimalField(max_digits=50, decimal_places=2, )
	order_id = models.CharField(max_length=20, null=True, blank=True)

	def __unicode__(self):
		return "Order_id: %s, Cart_id: %s"%(self.id, self.cart.id)

	class Meta:
		ordering = ['-id']

	def get_absolute_url(self):
		return reverse("order_detail", kwargs={"pk": self.pk})

	def mark_completed(self, order_id=None):
		self.status = "paid"
		if order_id and not self.order_id:
			self.order_id = order_id
		self.save()

	@property
	def is_complete(self):
		if self.status == "paid":
			return True
		return False


def order_pre_save(sender, instance, *args, **kwargs):
	cart_total = instance.cart.total
	order_total = Decimal(shipping_total_price) + Decimal(cart_total)
	instance.order_total = order_total

pre_save.connect(order_pre_save, sender=Order)
