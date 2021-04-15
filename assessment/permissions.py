from rest_framework import permissions


# Enrolled student
class IsStudentOwnerOrReadOnly(permissions.BasePermission):

	def has_object_permission(self, request, view, obj):

		if request.method in permissions.SAFE_METHODS:
			return True

		return obj.user.id == request.user.id

# If user is enrolled for the course
# class IsEnrolled(permissions.BasePermission):

# If user is an Instructor
# class UserIsInstructorOrReadOnly
