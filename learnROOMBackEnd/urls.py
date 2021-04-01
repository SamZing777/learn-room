from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework.schemas import get_schema_view
from rest_framework_swagger.views import get_swagger_view


API_TITLE = 'LearnROOM API'
API_DESCRIPTION = 'African Largest online Learning platform.'

schema_view = get_swagger_view(title=API_TITLE)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('rest/', include('rest_auth.urls')),
    path('rest/registration/', include('rest_auth.registration.urls')),

    path('auth/', include('rest_framework.urls')),
    path('api/v1/users/', include('users.urls')),
    path('course/', include('courses.urls')),

	# documentation for the API
    path('docs/', include_docs_urls(title=API_TITLE, description=API_DESCRIPTION)),
    path('swagger-docs/', schema_view),
    path('schema/', schema_view)
]
