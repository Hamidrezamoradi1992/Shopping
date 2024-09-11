from django.db import models


# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=150, unique=True, null=False)
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

    class Meta:

        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):

        return self.name

    @staticmethod
    def calculate_max_depth(root_category):

        if not root_category.subcategories.exists():
            return 0
        else:
            return 1 + max(Category.calculate_max_depth(sub) for sub in root_category.subcategories.all())

    def get_descendants(self, include_self=False, levels=None):

        if levels is None:
            levels = Category.calculate_max_depth(self)

        result = [self] if include_self else []
        queryset = Category.objects.all()

        for _ in range(levels):
            queryset = queryset.prefetch_related('subcategories')

        categories = queryset.filter(id=self.id)

        def collect_categories(category, current_level):

            if current_level > 0:
                for subcategory in category.subcategories.all():
                    result.append(subcategory)
                    collect_categories(subcategory, current_level - 1)

        for category in categories:
            collect_categories(category, levels)

        return result


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
