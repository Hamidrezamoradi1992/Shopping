# Generated by Django 5.1.1 on 2024-09-17 12:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0002_alter_human_family_alter_human_name_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='human',
            name='age',
            field=models.DateTimeField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='human',
            name='phone',
            field=models.CharField(blank=True, default='not entered', max_length=12, null=True),
        ),
    ]
