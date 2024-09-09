from product.models import Category

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