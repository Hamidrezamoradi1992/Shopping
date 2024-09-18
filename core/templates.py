from account.models import Human
from product.models import Category
from core.models import Picture_Slider


def menu_context_processor(request):
    print(request.path)
    categories = Category.objects.all().order_by('parent_category')

    return {
        "menu": [
            dict(title="Home", link="/"),
            dict(title="About", link="/about-us/"),


        ],
        "categories": categories,
    }


def slider_context_processor(request):
    print(request.path)
    picture = Picture_Slider.objects.filter(active=True)
    return {
        "picture_slider": picture
}
