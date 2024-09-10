# Generated by Django 5.1.1 on 2024-09-08 20:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_product_picture'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='description',
        ),
        migrations.AddField(
            model_name='product',
            name='short_description',
            field=models.TextField(blank=True, max_length=350, null=True),
        ),
    ]