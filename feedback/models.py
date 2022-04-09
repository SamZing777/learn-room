from django.db import models
from django.contrib.auth import get_user_model
from django.core.validators import MinValueValidator, MaxValueValidator

from courses.models import Course

User = get_user_model()


class StudentFeedback(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                related_name='student_feedback')
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                related_name='course_feedback')
    message = models.TextField()
    ratings = models.FloatField(
            validators=[MinValueValidator(1),
                        MaxValueValidator(5)
            ])
    timeStamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.user.username)

    class Meta:
        unique_together = (('user', 'course'),)
        index_together = (('user', 'course'),)


class FeaturedReview(models.Model):
    instructor = models.ForeignKey(User, on_delete=models.CASCADE,
                        related_name='featured')
    course = models.ForeignKey(Course, on_delete=models.CASCADE,
                        related_name='course_review')
    review = models.ForeignKey(StudentFeedback, on_delete=models.CASCADE,
                        related_name='student_review')
    
    def __str__(self):
        return str(self.review)
