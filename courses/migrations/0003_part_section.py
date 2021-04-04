# Generated by Django 3.1.7 on 2021-04-01 13:20

import autoslug.fields
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0002_course_sub_category'),
    ]

    operations = [
        migrations.CreateModel(
            name='Part',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('slug', autoslug.fields.AutoSlugField(default='', editable=False, populate_from='name', unique=True)),
                ('lesson', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.course')),
            ],
        ),
        migrations.CreateModel(
            name='Section',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('slug', autoslug.fields.AutoSlugField(default='', editable=False, populate_from='name', unique=True)),
                ('part', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courses.part')),
            ],
        ),
    ]
