# Generated by Django 3.1.7 on 2021-04-30 21:19

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('assessment', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='quiz',
            options={'verbose_name': 'Quiz', 'verbose_name_plural': 'Quizzes'},
        ),
    ]