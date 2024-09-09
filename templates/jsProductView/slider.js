 document.addEventListener('alpine:init', () => {
        Alpine.data('slider', () => ({
            currentIndex: 1,
            images: [
                'https://as2.ftcdn.net/v2/jpg/05/50/33/47/1000_F_550334715_0d2cdaljV4Xd3x7yVUhRxfmLLEUyMdXr.jpg',
                'https://source.unsplash.com/1600x900/?cat',
                '/media/products/638ba2cb495859f4e0c27fb3.webp',
            ],
            back() {
                if (this.currentIndex > 1) {
                    this.currentIndex = this.currentIndex - 1;
                }
            },
            next() {
                if (this.currentIndex < this.images.length) {
                    this.currentIndex = this.currentIndex + 1;
                } else if (this.currentIndex <= this.images.length){
                    this.currentIndex = this.images.length - this.currentIndex + 1
                }
            },
        }))
    })