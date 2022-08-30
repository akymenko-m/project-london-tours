(function () {
  const tourInfo = [
    {
      id: "1",
      backgrClass: "bus-tours-block",
      priceInfo: 80,
      titleInfo: "Bus Tours.",
      descriptionInfo:
        "If the weather is not welcoming, it's not a reason to stop exploring. You are welcome to order our bus tours and see the city from the above.",
      durationInfo: "5 hours",
      monthsInfo: "November-March",
      amountTitleText: "Capacity:",
      amountInfo: "30 people",
    },

    {
      id: "2",
      backgrClass: "night-tours-block",
      priceInfo: 230,
      titleInfo: "Night Tours.",
      descriptionInfo:
        "Salford at night is a magical place to see. It was no coincidence that it became a birthplace of many English legends and myths.",
      durationInfo: "5 Days",
      monthsInfo: "10 October, 2022",
      amountTitleText: "Group:",
      amountInfo: "5-7 people",
    },

    {
      id: "3",
      backgrClass: "bike-tours-block",
      priceInfo: 230,
      titleInfo: "Bike Tours.",
      descriptionInfo:
        "Walking by foot is always fun but it's even better to try all transport. Bikes are a great possibility to move faster and get more adrenaline in the process.",
      durationInfo: "5 Days",
      monthsInfo: "10 October, 2022",
      amountTitleText: "Group:",
      amountInfo: "5-7 people",
    },

    {
      id: "4",
      backgrClass: "gastro-tours-block",
      priceInfo: 100,
      titleInfo: "Bike Tours.",
      descriptionInfo:
        "How can you fully experience a city's atmosphere if you haven't tried best local food? For those who like to enjoy the delicious meals, we prepared special programs.",
      durationInfo: "5 Days",
      monthsInfo: "10 October, 2022",
      amountTitleText: "Group:",
      amountInfo: "5-7 people",
    },

    {
      id: "5",
      backgrClass: "vip-tours-block",
      priceInfo: 500,
      titleInfo: "VIP Tours.",
      descriptionInfo:
        "Our premium clients enjoy the benefits of restaurant food, live music, cinema hall, and interactive entertainment outdoors.",
      durationInfo: "10 Days",
      monthsInfo: "10 October, 2022",
      amountTitleText: "Group:",
      amountInfo: "20 people",
    },

    {
      id: "6",
      backgrClass: "explor-history-tours-block",
      priceInfo: 500,
      titleInfo: "Explorying History.",
      descriptionInfo:
        "Salford is full of monumental attractions, some of which also are a part of the national cultural heritage. We invite you to a journey on exploring the city's history.",
      durationInfo: "15 Days",
      monthsInfo: "November-December",
      amountTitleText: "Group:",
      amountInfo: "15 people",
    },
  ];

  function bookingTourInfo(currentSlideIndex) {
    return `
            <div class="${tourInfo[currentSlideIndex].backgrClass}">
            <div class="bus-tours-info-block">
              <div class="price-block">
                <span class="price-from">from</span>
                <span class="price">$${tourInfo[currentSlideIndex].priceInfo}</span>
              </div>
              <span class="book-tour__title">${tourInfo[currentSlideIndex].titleInfo}</span>
              <span class="book-tour__description">${tourInfo[currentSlideIndex].descriptionInfo}</span>
              <div class="book-tour__details">
                <div class="details">
                  <div class="duration-icon"><img src="img/tours/book-tour-duration.png" alt="tour-duration"></div>
                  <span class="details-title-text">Duration:</span>
                  <span class="details-text">${tourInfo[currentSlideIndex].durationInfo}</span>
                </div>
                <div class="details">
                  <div class="duration-icon"><img src="img/tours/book-tour-date.png" alt="tour-date"></div>
                  <span class="details-title-text">Months:</span>
                  <span class="details-text">${tourInfo[currentSlideIndex].monthsInfo}</span>
                </div>
                <div class="details">
                  <div class="duration-icon"><img src="img/tours/book-tour-people.png" alt="tour-people"></div>
                  <span class="details-title-text">${tourInfo[currentSlideIndex].amountTitleText}</span>
                  <span class="details-text">${tourInfo[currentSlideIndex].amountInfo}</span>
                </div>
              </div>
              <div class="book-tour__button">Book a Tour</div>
            </div>
          </div>`;
  }

  let currentSlideIndex = 0;

  function renderCarousel() {
    const toursInfoContainer = document.querySelector(".book-tour-block");
    toursInfoContainer.innerHTML = bookingTourInfo(currentSlideIndex);
  }

  function next() {
    currentSlideIndex =
      currentSlideIndex + 1 >= tourInfo.length ? 0 : currentSlideIndex + 1;
    renderCarousel();
  }

  function prev() {
    currentSlideIndex =
      currentSlideIndex - 1 < 0 ? tourInfo.length - 1 : currentSlideIndex - 1;
    renderCarousel();
  }

  setInterval(next, 5000);

  window.addEventListener("resize", renderCarousel);

  renderCarousel();
})();
