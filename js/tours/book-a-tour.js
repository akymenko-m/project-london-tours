(function () {
  const tourInfo = [
    {
      id: "1",
      backgrClass: "bus-tours-block",
      // visibleClass: "carousel__item-visible",
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
      // visibleClass: "carousel__item-hidden",
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
      // visibleClass: "carousel__item-hidden",
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
      // visibleClass: "carousel__item-hidden",
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
      // visibleClass: "carousel__item-hidden",
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
      // visibleClass: "carousel__item-hidden",
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

  function bookingTourInfo(tourInfo) {
    const infoContainer = document.querySelector(".book-tour-block");
    infoContainer.innerHTML = "";
    for (const info of tourInfo) {
      infoContainer.innerHTML += `
            <div class="${info.backgrClass}">
            <div class="book-tours__arrow"><img src="img/tours/tours-previous.png" alt="tours-previous" id="tours__previous-arrow" /></div>
            <div class="bus-tours-info-block">
              <div class="price-block">
                <span class="price-from">from</span>
                <span class="price">$${info.priceInfo}</span>
              </div>
              <span class="book-tour__title">${info.titleInfo}</span>
              <span class="book-tour__description">${info.descriptionInfo}</span>
              <div class="book-tour__details">
                <div class="details">
                  <div class="duration-icon"><img src="img/tours/book-tour-duration.png" alt="tour-duration"></div>
                  <span class="details-title-text">Duration:</span>
                  <span class="details-text">${info.durationInfo}</span>
                </div>
                <div class="details">
                  <div class="duration-icon"><img src="img/tours/book-tour-date.png" alt="tour-date"></div>
                  <span class="details-title-text">Months:</span>
                  <span class="details-text">${info.monthsInfo}</span>
                </div>
                <div class="details">
                  <div class="duration-icon"><img src="img/tours/book-tour-people.png" alt="tour-people"></div>
                  <span class="details-title-text">${info.amountTitleText}</span>
                  <span class="details-text">${info.amountInfo}</span>
                </div>
              </div>
              <div class="book-tour__button">Book a Tour</div>
            </div>
            <div class="book-tours__arrow"><img src="img/tours/tours-next.png" alt="tours-next" id="tours__next-arrow" /></div>
          </div>`;
    }
  }
  bookingTourInfo(tourInfo);

  // let slidePosition = 0;
  // const slides = document.getElementsByClassName('carousel__item');
  // const totalSlides = slides.length;
  // console.log(slides);

  // document.getElementById('tours__next-arrow').addEventListener("click", function(){
  //     moveToNextSlide();
  // });

  // document.getElementById('tours__previous-arrow').addEventListener("click", function(){
  //     moveToPrevSlide();
  // });

  // function updateSlidePosition() {
  //     for (let slide of slides) {
  //         slide.classList.remove('carousel__item-visible');
  //         slide.classList.add('carousel__item-hidden');
  //     }

  //     slides[slidePosition].classList.add('carousel__item-visible');
  // }

  // function moveToNextSlide() {
  //     if (slidePosition === totalSlides - 1) {
  //         slidePosition = 0;
  //     } else {
  //         slidePosition++;
  //     }
  //     updateSlidePosition();
  // }

  // function moveToPrevSlide() {
  //     if (slidePosition === 0) {
  //         slidePosition = totalSlides - 1;
  //     } else {
  //         slidePosition--;
  //     }
  //     updateSlidePosition();
  // }
})();
