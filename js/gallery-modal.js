let slideIndex = 1;
showSlide(slideIndex);

function openLightbox() {
    document.querySelector('.gallery__modal').style.display = 'block';
};

function closeLightbox() {
    document.querySelector('.gallery__modal').style.display = 'none';
};

function changeSlide(n) {
    showSlide(slideIndex += n);
};

function toSlide(n) {
    showSlide(slideIndex = n);
};

function showSlide(n) {
    let slides = document.getElementsByClassName('gallery__modalslide');
    if (n > slides.length) {
        slideIndex = 1;
    };

    if (n < 1) {
        slideIndex = slides.length;
    };

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };

    slides[slideIndex - 1].style.display = 'block';
};