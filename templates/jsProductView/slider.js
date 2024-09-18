let image = []
document.addEventListener('alpine:init', () => {

    Alpine.data('slider', () => (


        {
            currentIndex: 1,
            images: ["/media/slider/how-to-become-software-engineer.jpg",
                "/media/slider/CDG_blog_post_image_02-2-850x412.jpg",
                "/media/slider/DK-rebranding2.jpg",
                "/media/slider/۲۵۸۵۱نتالبیس.webp",
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



