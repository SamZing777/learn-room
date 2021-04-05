from rest_framework import permissions


class IsStudentOrReadOnly(permissions.BasePermission):

	def has_object_permission(self, request, view, obj):

		if request.method in permissions.SAFE_METHODS:
			return True

		return obj.user.id == request.instructor.id


# class IsEnrolled(permissions.BasePermission):
