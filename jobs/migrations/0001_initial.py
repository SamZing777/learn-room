# Generated by Django 3.1.7 on 2021-04-30 21:18

import autoslug.fields
from django.db import migrations, models
import django.db.models.deletion
import django_countries.fields


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('courses', '0012_rating'),
    ]

    operations = [
        migrations.CreateModel(
            name='Firm',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254)),
                ('slug', autoslug.fields.AutoSlugField(default='', editable=False, populate_from='name', unique=True)),
                ('industry', models.CharField(choices=[('Advertising / Public Relations', 'Advertisingpublicrelations'), ('Aviation', 'Aviation'), ('Agriculture', 'Agriculture'), ('Architectural', 'Architectural'), ('Art and Craft', 'Artandcraft'), ('Auto Dealers', 'Autodealers'), ('Automobile', 'Automobile'), ('Banking and Finance', 'Banking And Finance'), ('Beauty', 'Beauty'), ('Beverages', 'Beverages'), ('Casinos / Gambling', 'Casinosandgambling'), ('Construction', 'Construction'), ('Consulting', 'Consulting'), ('Consumer Goods', 'Consumergoods'), ('Defense', 'Defense'), ('Education', 'Education'), ('Engineering', 'Engineering'), ('Entertainment', 'Entertainment'), ('Environment', 'Environment'), ('Fashion', 'Fashion'), ('Fast Moving Consumer Goods', 'Fastmovingconsumergoods'), ('Financial services', 'Financialservices'), ('Fitness and Gymnastics', 'Fitnessandgymnastics'), ('Food Production', 'Foodproduction'), ('General Contractors', 'Generalcontractors'), ('Health', 'Health'), ('Human Resources', 'Humanresources'), ('Information Communication Technology', 'Ict'), ('Insurance', 'Insurance'), ('Law', 'Law'), ('Liquor, Wine, Beverages', 'Liquorwinebeer'), ('Logistics', 'Logistics'), ('Manufacturing', 'Manufacturing'), ('Marketing', 'Marketing'), ('Mortgage', 'Mortgage'), ('Natural Resources', 'Naturalresources'), ('Oil and Gas', 'Oilandgas'), ('Photography', 'Photography'), ('Printing and Publishing', 'Printingandpublishing'), ('Public Service', 'Publicservice'), ('Real Estate', 'Realestate'), ('Sport Industry', 'Sportindustry'), ('Security', 'Security'), ('Steel Production', 'Steelproduction'), ('Telecommunication', 'Telecommunication'), ('Textile', 'Textile'), ('Timber, Logging and Paper mills', 'Timberloggingpapermills'), ('Transportation', 'Transportation'), ('Travel and Tourism', 'Travelandtourism'), ('Tobacco', 'Tobacco'), ('Lodging and Tourism', 'Lodgingandtoursim'), ('Waste Management', 'Wastemanagement'), ('Others', 'Others')], max_length=50)),
                ('country', django_countries.fields.CountryField(max_length=50)),
                ('website', models.URLField(blank=True, null=True)),
                ('short_note', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', autoslug.fields.AutoSlugField(default='', editable=False, populate_from='title', unique=True)),
                ('location', models.CharField(help_text='Remote or Job location', max_length=150)),
                ('is_full_time', models.BooleanField()),
                ('qualification', models.TextField()),
                ('description', models.TextField()),
                ('time_stamp', models.DateTimeField(auto_now_add=True)),
                ('category', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.category')),
                ('firm', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='jobs.firm')),
            ],
        ),
    ]
