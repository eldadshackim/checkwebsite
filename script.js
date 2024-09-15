document.addEventListener('DOMContentLoaded', function() {
    const galleryImages = document.querySelectorAll('.gallery img');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            alert(`You clicked on ${image.alt}`);
        });
    });
});
