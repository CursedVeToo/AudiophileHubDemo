// Simple image carousel
const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;

function changeCarouselImage() {
    carouselImages[currentImageIndex].style.opacity = 0;
    currentImageIndex++;

    if (currentImageIndex === carouselImages.length) {
        currentImageIndex = 0;
    }

    carouselImages[currentImageIndex].style.opacity = 1;
}

// Set the image rotation interval (1000ms = 1 seconds)
setInterval(changeCarouselImage, 2000);
