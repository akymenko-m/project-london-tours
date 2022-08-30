(function () {
  const placesSlides = [
        `<div class="carousel-places-slide">
            <img class="places-carousel-image" src="img/places/national_history_museum.png" alt="national_history_museum">
        </div>`,

        `<div class="carousel-places-slide">
          <img class="places-carousel-image" src="img/places/buckinham_palace.png" alt="buckinham_palace">
          </div>`,

        `<div class="carousel-places-slide">
          <img class="places-carousel-image" src="img/places/kew_garden.png" alt="kew_garden">
        </div>`
  ];

  let currentPlacesSlideIdx = 0;

  function renderPlacesCarousel() {
    const placesCarouselCont = document.querySelector('places-carousel__slides');
    placesCarouselCont.innerHTML = placesSlides[currentPlacesSlideIdx];
  }

  function nextPlace() {
    currentPlacesSlideIdx = currentPlacesSlideIdx + 1 >= placesSlides.length ? 0 : currentPlacesSlideIdx + 1;
    renderPlacesCarousel();
  }

  setInterval(nextPlace, 2000);

  renderPlacesCarousel();

})();