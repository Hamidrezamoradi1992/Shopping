document.addEventListener('alpine:init', () => {
    let image = []
    Alpine.data('slider', () => (

    fetch('accounts/api/slider', {
        method: "GET",
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRFToken': '{{ csrf_token }}',
        }
    }).then(async (response) => {
        const img = await response.json()
        console.log(img)
        for (i in img) {
            image.push(img[i].picture)
        }
        console.log(image)
    }),
        {
            currentIndex: 1,
            images: ["/media/slider/how-to-become-software-engineer.jpg",
                "/media/slider/CDG_blog_post_image_02-2-850x412.jpg",
            ],
            back() {
                console.log()
                if (this.currentIndex > 1) {
                    this.currentIndex = this.currentIndex - 1;
                }
            },
            next() {
                if (this.currentIndex < this.images.length) {
                    this.currentIndex = this.currentIndex + 1;
                } else if (this.currentIndex <= this.images.length) {
                    this.currentIndex = this.images.length - this.currentIndex + 1
                }
            },
        }
))
})



