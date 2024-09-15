from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=150, unique=False, null=False)
    model_production = models.CharField(max_length=150, null=False)
    price = models.IntegerField(null=False, default=0)
    stock = models.IntegerField(null=False, default=0)
    short_description = models.TextField(max_length=350, null=True, blank=True)
    picture = models.ImageField(upload_to='products/', null=True, blank=True)
    category = models.ForeignKey('Category', on_delete=models.SET_NULL, related_name='categorys',
                                 null=True, blank=True, related_query_name='category')
    brands = models.ForeignKey('Brand', on_delete=models.SET_NULL, related_name='brands', null=True, blank=True,
                               related_query_name='brand')
    technical = models.OneToOneField('Technical_Characteristics', on_delete=models.SET_NULL, related_name='technicals',
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
    name = models.CharField(max_length=255, unique=True)
    parent_category = models.ForeignKey(
        'self', on_delete=models.CASCADE, null=True, blank=True, related_name='subcategories'
    )
    mapping_category = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        id_end = Category.objects.all().order_by("-id").first()
        if self.parent_category:
            mapping = Category.objects.filter(id=self.parent_category.id).values('mapping_category')
            self.mapping_category = f'{mapping[0]["mapping_category"]}-{id_end.id + 1}-' \
                if self.id is None else f'{mapping[0]["mapping_category"]}-{self.id}-'
            super().save(*args, **kwargs)
        else:
            self.mapping_category = f'{id_end.id + 1}-' if self.id is None else f'{self.id}-'
            super().save(*args, **kwargs)

    class Meta:

        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class Brand(models.Model):
    name = models.CharField(max_length=150, unique=True, null=False)
    deleted = models.BooleanField(default=False)

    def __str__(self):
        return f'name:{self.name}'

    class Meta:
        verbose_name = 'brand'
        verbose_name_plural = 'brands'


class Technical_Characteristics(models.Model):
    description = models.TextField(null=True, blank=True)
    active = models.BooleanField(default=True)
    deleted = models.BooleanField(default=False)
