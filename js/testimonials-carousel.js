(function () {

    const slides = [
        `<div class="testimonials__slide">
            <blockquote class="alan-richards__blockquote">
                <img class="reviews__image-quote" src="img/testimonials/quote.png" alt="image quote">
                <cite class="alan-richards__name">Alan Richards</cite>
                <p class="alan-richards__review">«Ms. Marsden is the most professional tour guide I've seen so far, and I've seen a lot. The minute she opens her mouth, it's clear that she not only knows the city but also loves it with all her heart. This enthusiastic excitement is definitely contagious because, by the end of our trip, we all felt the same way.</p>
                <p class="alan-richards__selected-tour">We tried 'Touring Like A Local' and got a great vibe of actually living in London, not just being curious tourists. It was an awesome experience and I definitely want to repeat it.»</p>
                <time class="reviews__datetime" datetime="2021-09-08">8 September, 2021</time>
            </blockquote>
        </div>`,
        `<div class="testimonials__slide">
            <blockquote class="jeff-adams__blockquote">
                <img class="reviews__image-quote" src="img/testimonials/quote.png" alt="image quote">
                <cite class="jeff-adams__name">Jeff Adams</cite>
                <p class="jeff-adams__review">«It was our first time in London and it's such a huge city! We realised that it's almost impossible to see all the main sights in 2-3 days without a guide that has a ready tour. So, we contacted London Tours and liked everything, from the very first to the last day of our stay in London!</p>
                <p class="jeff-adams__selected-tour">We combined the bus tour and the Royal London excursion. In two days, we saw the main sights and got a bunch of expressions. We will come back definitely!»</p>
                <time class="reviews__datetime" datetime="2021-06-24">24 June, 2021</time>
            </blockquote>
        </div>`
    ];

    let currentSlideIdx = 0;

    function renderCarousel() {
        const slideContainer = document.querySelector(".testimonials-carousel__slides");
        slideContainer.innerHTML = slides[currentSlideIdx];
    }

    function prev() {
        currentSlideIdx = currentSlideIdx - 1 < 0 ? slides.length - 1 : currentSlideIdx - 1;
        renderCarousel();
    }

    function next() {
        currentSlideIdx = currentSlideIdx + 1 >= slides.length ? 0 : currentSlideIdx + 1;
        renderCarousel();
    }

    const prevButton = document.querySelector('.testimonials-carousel__btn-prev');
    prevButton.addEventListener('click', prev);

    const nextButton = document.querySelector('.testimonials-carousel__btn-next');
    nextButton.addEventListener('click', next);

    renderCarousel();
})();