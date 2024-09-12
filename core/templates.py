from product.models import Category
from core.models import Picture_Slider


def menu_context_processor(request):
    print(request.path)
    categories = Category.objects.all()
    return {
        "menu": [
            dict(title="Home", link="/"),
            dict(title="About", link="/about-us/"),
            dict(title="login/logout", link="/contact-us/"),

        ],
        "categories": categories,
    }


def slider_context_processor(request):
    print(request.path)
    picture = Picture_Slider.objects.filter(active=True)
    return {
        "picture_slider": picture
}
