import datetime
import django_heroku
from pathlib import Path

# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent
TEMPLATE_DIR = Path(BASE_DIR, 'templates')
STATIC_DIR = Path(BASE_DIR, 'static')


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '%a7g0tzn%&^(pzlyaff^gh25s+_^qeq(5n=(5avad7xjizla%h'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['learnroom.herokuapp.com', '127.0.0.1']


# Application definition

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'whitenoise.runserver_nostatic',    # third party
    'django.contrib.sites',           # added
    'django.contrib.staticfiles',


    # local apps
    'users.apps.UsersConfig',
    'courses.apps.CoursesConfig',
    'students.apps.StudentsConfig',
    'live_class.apps.LiveClassConfig',
    'carts.apps.CartsConfig',
    'enrollment.apps.EnrollmentConfig',
    'assessment.apps.AssessmentConfig',
    'jobs.apps.JobsConfig',
    

    # third party app
    'djmoney',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'corsheaders',
    'rest_auth',
    'rest_auth.registration',

    'rest_framework',
    'rest_framework.authtoken',
    'rest_framework_swagger',

    # Cloud computing Service
    'storages'
]


REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication'
    ],

    'DEFAULT_SCHEMA_CLASS': 'rest_framework.schemas.coreapi.AutoSchema',

    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny',
        ],

    # 'DEFAULT_PAGINATION_CLASS': [
    # 'courses.pagination.CoursePagination',
    # 'SEARCH_PARAM' : 'q'
    # ]
      
}


JWT_AUTH = {
    "JWT_RESPONSE_PAYLOAD_HANDLER": 
            "learnROOMBackEnd.utils.jwt_response_payload_handler",
    "JWT_EXPIRATION_DELTA": datetime.timedelta(seconds=30000),
    "JWT_ALLOW_REFRESH": True, #False
}


SITE_ID = 1



X_FRAME_OPTIONS = 'SAMEORIGIN'

SWAGGER_SETTINGS = {
    'LOGIN_URL': 'rest_framework:login',
    'LOGOUT_URL': 'rest_framework:logout'
}


CORS_ORIGIN_WHITELIST = (
	
	# React
    'http://localhost:8000',
    'http://localhost:4200',
    'http://localhost:3000',
    
    	# React Native
    'http://localhost:8081'
    # '*'
)

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = False

MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',

    # third party middlewares
    'whitenoise.middleware.WhiteNoiseMiddleware'
]

ROOT_URLCONF = 'learnROOMBackEnd.urls'

# TEMPLATE_DIRS = [
#     os.path.join(PROJECT_DIR, 'templates'),
# ]

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [TEMPLATE_DIR],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'learnROOMBackEnd.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

# Heroku Testing database

django_heroku.settings(config=locals(), staticfiles=False, logging=False)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'
STATIC_ROOT = STATIC_DIR

STATICFILES_STORAGE = 'whitenoise.storage.CompressedStaticFilesStorage'


AUTH_USER_MODEL = 'users.User'


ACCOUNT_AUTHENTICATION_METHOD = "email"
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False

AUTHENTICATION_BACKENDS = [
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
]

LOGIN_REDIRECT_URL = 'courses'
LOGOUT_REDIRECT_URL = '/'

# Email is sent using the SMTP HOST and Port Specified here

EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.zoho.com'
EMAIL_HOST_USER = 'admin@learnroom.co'
EMAIL_HOST_PASSWORD = 'PKGVHjRaapbg'
EMAIL_USE_TLS =  False
EMAIL_USE_SSL = True
EMAIL_PORT = 465

#stops Relaying disallowed as webmaster@localhost 
DEFAULT_FROM_EMAIL = 'admin@learnroom.co'


# AWS FILE UPLOAD
AWS_ACCESS_KEY_ID = 'AKIAXLZOCW5EXO43MNTF'
AWS_SECRET_ACCESS_KEY = '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'
AWS_STORAGE_BUCKET_NAME = 'course-img'
AWS_S3_FILE_OVERWRITE = False
AWS_DEFAULT_ACL = None
DEFAULT_FILE_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

AWS_S3_REGION_NAME = "us-east-2"
AWS_S3_SIGNATURE_VERSION = "s3v4"



# STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'

"""
BRAINTREE_PUBLIC = "test public"
BRAINTREE_PRIVATE = "test private"
BRAINTREE_MERCHANT_ID = "nwcnlnbgf2ou568p"
BRAINTREE_ENVIRONEMNT = "Sandbox"
"""
