# Generated by Django 5.1.1 on 2024-09-16 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('account', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='human',
            name='family',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='human',
            name='name',
            field=models.CharField(blank=True, default='', max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='human',
            name='phone',
            field=models.CharField(blank=True, max_length=12, null=True),
        ),
        migrations.AlterField(
            model_name='human',
            name='picture',
            field=models.ImageField(default='products/LOQ_15IRX9.webp', upload_to='images/'),
        ),
        migrations.AlterField(
            model_name='human',
            name='zipcode',
            field=models.CharField(blank=True, max_length=10, null=True),
        ),
    ]
