from rest_framework import permissions


"""
class UserIsInstructor(permissions.BasePermission):
	if user.is_instructor
		pass
"""


# If user in Owner of the course:
#    other read only

class IsOwnerOrReadOnly(permissions.BasePermission):
	# only the specific owner of the course can make any changes to the course

	def has_object_permission(self, request, view, obj):

		if request.method in permissions.SAFE_METHODS:
			return True

		return obj.user.id == request.instructor.id


"""
class IsEnrolledForTheCourse(permissions.BasePermission):
	pass
"""
