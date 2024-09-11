from django.contrib import admin

from account.models import City, Country, Human


# Register your models here.
@admin.register(Human)
class AccountAdmin(admin.ModelAdmin):
    model = Human
    list_display = ['name', 'family', 'age']
    list_filter = ['city', 'country']


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    model = City
    list_display = ['name']
    list_filter = ['country']


@admin.register(Country)
class CountryAdmin(admin.ModelAdmin):
    model = Country
    list_display = ['name']
