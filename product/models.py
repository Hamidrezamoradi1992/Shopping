from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=150, unique=True, null=False)
    model_production = models.CharField(max_length=150, null=False)
    price = models.IntegerField(null=False, default=0)
    stock = models.IntegerField(null=False, default=0)
    description = models.TextField(null=True, blank=True)
    picture = models.ImageField(upload_to='products/', null=True, blank=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, related_name='categorys',
                                 null=True, blank=True, related_query_name='category')
    brands = models.ForeignKey('Brand', on_delete=models.SET_NULL, related_name='brands', null=True, blank=True,
                               related_query_name='brand')
    technical = models.ForeignKey('Technical_Characteristics', on_delete=models.SET_NULL, related_name='technicals',
                                  null=True,
                                  blank=True, related_query_name='technical')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    active = models.BooleanField(default=True)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return (
            f'name:{self.name}-model:{self.model_production},price:{self.price},stock:{self.stock},'
            f'category:{self.category},brands:{self.brands}'
            f',created_at:{self.created_at.strftime("%Y%m%d%H:%M:%S")},updated_at:{self.updated_at.strftime(
                "%Y%m%d%H:%M:%S")},deleted:{self.deleted}')

    class Meta:
        verbose_name = 'product'
        verbose_name_plural = 'products'


class Category(models.Model):
    name = models.CharField(max_length=150, unique=True, null=False)
    father_category = models.ForeignKey("Category", on_delete=models.CASCADE, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return f'name:{self.name}-created_at:{self.created_at.strftime('%Y%m%d%H:%M:%S')}-deleted:{self.deleted}'

    class Meta:

        verbose_name = 'category'
        verbose_name_plural = 'categories'


class Brand(models.Model):
    name = models.CharField(max_length=150, unique=True, null=False)
    category = models.ManyToManyField("Category")
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return f'name:{self.name}-category:{self.category}'

    class Meta:

        verbose_name = 'brand'
        verbose_name_plural = 'brands'


class Technical_Characteristics(models.Model):
    description = models.TextField(null=True, blank=True)
    active = models.BooleanField(default=True)
    deleted = models.BooleanField(default=False)


