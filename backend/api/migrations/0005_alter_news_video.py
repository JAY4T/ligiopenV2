# Generated by Django 5.1.6 on 2025-03-13 10:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_news'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='video',
            field=models.URLField(blank=True, null=True),
        ),
    ]
