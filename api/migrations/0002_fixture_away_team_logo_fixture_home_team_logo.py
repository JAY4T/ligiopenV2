# Generated by Django 5.1.6 on 2025-03-11 08:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='fixture',
            name='away_team_logo',
            field=models.ImageField(blank=True, null=True, upload_to='team_logos/'),
        ),
        migrations.AddField(
            model_name='fixture',
            name='home_team_logo',
            field=models.ImageField(blank=True, null=True, upload_to='team_logos/'),
        ),
    ]
