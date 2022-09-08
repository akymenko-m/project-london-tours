(function () {
  const placesSlides = [
        `<div class="carousel-places-slide">
            <img class="places-carousel-image" src="img/places/national_history_museum.png" alt="national_history_museum">
            <h2 class="places-carousel-title">The Natural History Museum</h2>
            <p class="places-carousel-text">The Natural History Museum in London is one of the three largest museum in
              South
              Kensington. The collection of the museum includes more than 70 million exhibits on botany,
              zoology, entomology, mineralogy, and paleontology. But the museum is best known for its
              unique collection of dinosaur skeletons, which includes the sceleton of a diplodocus 26
              meters long and a model of Tyrannosaurus.</p>
            <a class="read-more-places" href="https://koldovsky.github.io/709-team-05/"><span>Read more →</span></a>
          </div>`,

        `<div class="carousel-places-slide">
          <img class="places-carousel-image" src="img/places/buckinham_palace.png" alt="buckinham_palace">
          <h2 class="places-carousel-title">Buckingham Palace</h2>
          <p class="places-carousel-text">Buckingham Palace has serves as a residence of British monarcs since 1837.
              This luxurious
              complex is one of the few active palaces in the world. State Rooms are constantly used by
              Her
              Majesty and her family members for dinner parties, official receptions, and other special
              occasions. In August-September, when Elizabeth II leaves her residence, all 19 state rooms
              become available for visitors.</p>
            <a class="read-more-places" href="https://koldovsky.github.io/709-team-05/"><span>Read more →</span></a>
          </div>`,

        `<div class="carousel-places-slide">
          <img class="places-carousel-image" src="img/places/kew_garden.png" alt="kew_garden">
          <h2 class="places-carousel-title">Kew Gardens</h2>
          <p class="places-carousel-text">Buckingham Palace has serves as a residence of British monarcs since 1837.
              This luxurious
              complex is one of the few active palaces in the world. State Rooms are constantly used by
              Her
              Majesty and her family members for dinner parties, official receptions, and other special
              occasions. In August-September, when Elizabeth II leaves her residence, all 19 state rooms
              become available for visitors.</p>
            <a class="read-more-places" href="https://koldovsky.github.io/709-team-05/"><span>Read more →</span></a>
          </div>`
  ];

  let currentPlacesSlideIdx = 0;

  function renderPlacesCarousel() {
    const placesCarouselCont = document.querySelector('.places-carousel__slides');
    placesCarouselCont.innerHTML = placesSlides[currentPlacesSlideIdx];
    // if (window.innerWidth > 800) {
    //   const secondPlacesSlideIdx = currentPlacesSlideIdx + 1 >= placesSlides.length ? 0 : currentPlacesSlideIdx + 1;
    //   placesCarouselCont.innerHTML += placesSlides[secondPlacesSlideIdx];
    // }
  }

  function nextPlace() {
    currentPlacesSlideIdx = currentPlacesSlideIdx + 1 >= placesSlides.length ? 0 : currentPlacesSlideIdx + 1;
    renderPlacesCarousel();
  }

  function prevPlace() {
    currentPlacesSlideIdx = currentPlacesSlideIdx - 1 < 0 ? placesSlides.length-1 : currentPlacesSlideIdx - 1;
    renderPlacesCarousel();
  }

 const nextBtnPlaces = document.querySelector('.places-carousel__btn-next');
 nextBtnPlaces.addEventListener('click', nextPlace);

 const prevBtnPlaces = document.querySelector('.places-carousel__btn-prev');
 prevBtnPlaces.addEventListener('click', prevPlace);

  renderPlacesCarousel();

})();