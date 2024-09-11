from product.models import Category
from core.models import Picture_Slider
def menu_context_processor(request):
    print(request.path)
    categories = Category.objects.all()
    return {
        "menu": [
            dict(title="Home", link= "/"),
            dict(title="About", link= "/about-us/"),

        ],
        "categories": categories,
    }


